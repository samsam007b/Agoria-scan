import { complianceThemes, getScoreLevel } from '@/data/complianceThemes';

export interface Answer {
  questionId: string;
  themeId: string;
  score: number;
  selectedOption: string;
}

export interface ThemeScore {
  id: string;
  label: string;
  score: number;
  color: string;
  weight: number;
  emoji: string;
}

export interface ScoreResult {
  globalScore: number;
  themeScores: ThemeScore[];
  level: {
    label: string;
    color: string;
    description: string;
  };
}

export function calculateScores(answers: Answer[]): ScoreResult {
  const themeScores: ThemeScore[] = [];

  // Calculer le score pour chaque thème
  complianceThemes.forEach((theme) => {
    const themeAnswers = answers.filter((a) => a.themeId === theme.id);

    if (themeAnswers.length === 0) {
      themeScores.push({
        id: theme.id,
        label: theme.shortTitle,
        score: 0,
        color: theme.color,
        weight: theme.weight,
        emoji: theme.icon,
      });
      return;
    }

    // Moyenne des scores du thème (sur 10)
    const sumScores = themeAnswers.reduce((sum, a) => sum + a.score, 0);
    const avgScore = sumScores / theme.questions.length;

    themeScores.push({
      id: theme.id,
      label: theme.shortTitle,
      score: parseFloat(avgScore.toFixed(1)),
      color: theme.color,
      weight: theme.weight,
      emoji: theme.icon,
    });
  });

  // Score global pondéré (sur 100)
  const globalScore = themeScores.reduce((sum, theme) => {
    return sum + (theme.score * theme.weight * 10);
  }, 0);

  // Déterminer le niveau en utilisant la fonction du nouveau système
  const scoreLevel = getScoreLevel(Math.round(globalScore));
  const level = {
    label: scoreLevel.label,
    color: scoreLevel.color,
    description: scoreLevel.message,
  };

  return {
    globalScore: Math.round(globalScore),
    themeScores,
    level,
  };
}

// getLevel is now imported from complianceThemes.ts as getScoreLevel

export interface Recommendation {
  questionId: string;
  title: string;
  description: string;
  resource: string;
  priority: 'high' | 'medium' | 'low';
}

export function generateRecommendations(answers: Answer[]): Recommendation[] {
  const recommendations: Recommendation[] = [];

  const recommendationsMap: Record<string, Recommendation> = {
    // Protection des données & cybersécurité
    'cyber-1': {
      questionId: 'cyber-1',
      title: 'Désignez un responsable cybersécurité',
      description: 'Formalisez le mandat avec responsabilités claires et revue annuelle.',
      resource: 'Guide CCB - Gouvernance de la cybersécurité',
      priority: 'high',
    },
    'cyber-2': {
      questionId: 'cyber-2',
      title: "Activez l'authentification multi-facteurs (MFA)",
      description: 'Protégez vos accès critiques : email, outils cloud, VPN avec MFA.',
      resource: 'Guide CCB NIS2 Quickstart',
      priority: 'high',
    },
    'cyber-3': {
      questionId: 'cyber-3',
      title: 'Créez une procédure de gestion des incidents',
      description: 'Documentez les rôles, délais (72h RGPD), et modèles de notification.',
      resource: 'APD - Notification violations données',
      priority: 'high',
    },

    // Conformité environnementale
    'env-1': {
      questionId: 'env-1',
      title: 'Mesurez votre empreinte carbone',
      description: 'Réalisez un bilan carbone certifié pour identifier vos leviers de réduction.',
      resource: 'Bilan Carbone - Méthodologie ADEME',
      priority: 'medium',
    },
    'env-2': {
      questionId: 'env-2',
      title: 'Formalisez votre politique DEEE',
      description: 'Mettez en place une politique de gestion des déchets électroniques avec traçabilité.',
      resource: 'SPF Environnement - Gestion DEEE',
      priority: 'medium',
    },
    'env-3': {
      questionId: 'env-3',
      title: 'Créez votre plan de transition énergétique',
      description: 'Définissez des objectifs chiffrés de réduction énergétique avec plan d\'action.',
      resource: 'Facilitateur Energie Wallonie',
      priority: 'medium',
    },

    // Conformité sociale & RH
    'hr-1': {
      questionId: 'hr-1',
      title: 'Auditez vos contrats de travail',
      description: 'Faites auditer vos modèles par un juriste social tous les 2 ans.',
      resource: 'Agoria - Services juridiques',
      priority: 'high',
    },
    'hr-2': {
      questionId: 'hr-2',
      title: 'Créez un plan de formation structuré',
      description: 'Allouez au moins 5% de votre masse salariale à la formation continue.',
      resource: 'Agoria Academy - Catalogues formation',
      priority: 'medium',
    },
    'hr-3': {
      questionId: 'hr-3',
      title: 'Formalisez votre politique de bien-être',
      description: 'Mettez en place une politique écrite avec personne de confiance désignée.',
      resource: 'SPF Emploi - Bien-être au travail',
      priority: 'high',
    },

    // Conformité financière
    'fin-1': {
      questionId: 'fin-1',
      title: 'Vérifiez vos mentions légales sur factures',
      description: 'Assurez-vous que toutes vos factures contiennent les mentions obligatoires.',
      resource: 'SPF Économie - Mentions obligatoires',
      priority: 'high',
    },
    'fin-2': {
      questionId: 'fin-2',
      title: 'Mettez en place un contrôle TVA trimestriel',
      description: 'Instaurez des contrôles internes réguliers de vos déclarations TVA.',
      resource: 'SPF Finances - Guide TVA',
      priority: 'high',
    },
    'fin-3': {
      questionId: 'fin-3',
      title: 'Structurez votre veille subsides',
      description: 'Mettez en place une veille active sur les aides disponibles pour votre secteur.',
      resource: 'Agoria - Service subsides',
      priority: 'medium',
    },

    // Conformité numérique & IA
    'ai-1': {
      questionId: 'ai-1',
      title: 'Évaluez vos risques IA',
      description: 'Documentez vos usages IA et réalisez une analyse de risques selon l\'AI Act.',
      resource: 'Commission Européenne - AI Act Guide',
      priority: 'high',
    },
    'ai-2': {
      questionId: 'ai-2',
      title: 'Auditez l\'accessibilité de votre site',
      description: 'Réalisez un audit WCAG 2.1 niveau AA pour votre site web.',
      resource: 'AnySurfer - Audit accessibilité',
      priority: 'medium',
    },
    'ai-3': {
      questionId: 'ai-3',
      title: 'Définissez votre politique de souveraineté des données',
      description: 'Privilégiez l\'hébergement dans l\'UE ou mettez en place des garanties appropriées.',
      resource: 'APD - Transferts internationaux',
      priority: 'high',
    },

    // Conformité industrielle
    'ind-1': {
      questionId: 'ind-1',
      title: 'Obtenez le marquage CE',
      description: 'Assurez-vous que tous vos produits disposent du marquage CE et de la déclaration de conformité.',
      resource: 'SPF Économie - Marquage CE',
      priority: 'high',
    },
    'ind-2': {
      questionId: 'ind-2',
      title: 'Complétez votre documentation technique',
      description: 'Créez et maintenez à jour tous les dossiers techniques, manuels et procédures de maintenance.',
      resource: 'Agoria - Standards techniques',
      priority: 'medium',
    },
    'ind-3': {
      questionId: 'ind-3',
      title: 'Lancez un projet de certification ISO',
      description: 'Identifiez les normes ISO pertinentes (9001, 14001, 27001) et planifiez votre certification.',
      resource: 'BELAC - Certification ISO',
      priority: 'medium',
    },
  };

  // Générer recommandations pour scores ≤ 6
  answers.forEach((answer) => {
    if (answer.score <= 6 && recommendationsMap[answer.questionId]) {
      recommendations.push(recommendationsMap[answer.questionId]);
    }
  });

  // Trier par priorité (high > medium > low)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  recommendations.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  // Retourner max 5 recommandations
  return recommendations.slice(0, 5);
}
