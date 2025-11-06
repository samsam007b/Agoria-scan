import questionsData from '@/data/questions.json';

export interface Answer {
  questionId: string;
  moduleId: string;
  score: number;
  selectedOption: string;
}

export interface ModuleScore {
  id: string;
  label: string;
  score: number;
  color: string;
  weight: number;
}

export interface ScoreResult {
  globalScore: number;
  moduleScores: ModuleScore[];
  level: {
    label: string;
    color: string;
    description: string;
  };
}

export function calculateScores(answers: Answer[]): ScoreResult {
  const moduleScores: ModuleScore[] = [];

  // Calculer le score pour chaque module
  questionsData.modules.forEach((module) => {
    const moduleAnswers = answers.filter((a) => a.moduleId === module.id);

    if (moduleAnswers.length === 0) {
      moduleScores.push({
        id: module.id,
        label: module.label,
        score: 0,
        color: module.color,
        weight: module.weight,
      });
      return;
    }

    // Moyenne des scores du module (sur 10)
    const sumScores = moduleAnswers.reduce((sum, a) => sum + a.score, 0);
    const avgScore = (sumScores / module.questions.length) * 10;

    moduleScores.push({
      id: module.id,
      label: module.label,
      score: Math.round(avgScore),
      color: module.color,
      weight: module.weight,
    });
  });

  // Score global pondéré (sur 100)
  const globalScore = moduleScores.reduce((sum, module) => {
    return sum + (module.score * module.weight * 10);
  }, 0);

  // Déterminer le niveau
  const level = getLevel(Math.round(globalScore));

  return {
    globalScore: Math.round(globalScore),
    moduleScores,
    level,
  };
}

export function getLevel(score: number): {
  label: string;
  color: string;
  description: string;
} {
  if (score <= 40) {
    return {
      label: 'À risque',
      color: '#D32F2F',
      description:
        'Votre niveau de conformité présente des lacunes importantes. Des actions prioritaires sont nécessaires pour réduire les risques.',
    };
  }
  if (score <= 70) {
    return {
      label: 'En progression',
      color: '#FF6B35',
      description:
        'Vous êtes sur la bonne voie mais des améliorations sont encore nécessaires pour atteindre un niveau optimal de conformité.',
    };
  }
  return {
    label: 'Conforme et proactive',
    color: '#7CB342',
    description:
      'Excellent ! Votre organisation démontre un niveau élevé de conformité. Continuez à maintenir vos bonnes pratiques.',
  };
}

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
    A1: {
      questionId: 'A1',
      title: 'Désignez un responsable cybersécurité',
      description:
        'Formalisez le mandat avec responsabilités claires et revue annuelle.',
      resource: 'Guide CCB - Gouvernance de la cybersécurité',
      priority: 'high',
    },
    A2: {
      questionId: 'A2',
      title: "Activez l'authentification multi-facteurs (MFA)",
      description:
        'Protégez vos accès critiques : email, outils cloud, VPN avec MFA.',
      resource: 'Guide CCB NIS2 Quickstart',
      priority: 'high',
    },
    A3: {
      questionId: 'A3',
      title: 'Mettez en place une stratégie de sauvegarde 3-2-1',
      description:
        '3 copies, 2 supports différents, 1 hors site. Testez trimestriellement.',
      resource: 'CCB - Bonnes pratiques sauvegardes',
      priority: 'high',
    },
    A4: {
      questionId: 'A4',
      title: 'Organisez des formations cybersécurité',
      description:
        'Formation annuelle + simulations phishing pour sensibiliser vos équipes.',
      resource: 'Agoria Academy - Modules cyber',
      priority: 'medium',
    },
    A5: {
      questionId: 'A5',
      title: 'Créez une procédure de gestion des incidents',
      description:
        'Documentez les rôles, délais (72h RGPD), et modèles de notification.',
      resource: 'APD - Notification violations données',
      priority: 'high',
    },
    A6: {
      questionId: 'A6',
      title: 'Évaluez votre conformité NIS2',
      description:
        "Vérifiez si vous êtes concerné et préparez les mesures d'ici octobre 2024.",
      resource: 'CCB - Directive NIS2',
      priority: 'high',
    },
    B1: {
      questionId: 'B1',
      title: 'Mettez à jour vos mentions légales',
      description:
        'Vérifiez BCE, coordonnées, statuts, UBO au registre UBO (SPF Finances).',
      resource: 'SPF Economie - Banque-Carrefour des Entreprises',
      priority: 'medium',
    },
    B2: {
      questionId: 'B2',
      title: 'Auditez vos contrats de travail',
      description:
        'Faites auditer vos modèles par un juriste social tous les 2 ans.',
      resource: 'Agoria - Services juridiques',
      priority: 'medium',
    },
    B3: {
      questionId: 'B3',
      title: 'Formalisez votre procédure DIMONA',
      description:
        "Incluez une procédure d'urgence en cas d'indisponibilité du responsable.",
      resource: 'ONSS - Procédure DIMONA',
      priority: 'high',
    },
    B4: {
      questionId: 'B4',
      title: 'Tenez à jour votre registre du personnel',
      description:
        'Conservez tous les documents réglementaires selon les délais légaux.',
      resource: 'SPF Emploi - Registre du personnel',
      priority: 'medium',
    },
    B5: {
      questionId: 'B5',
      title: 'Auditez vos processus de facturation',
      description:
        'Vérifiez conformité TVA, archivage, délais de paiement annuellement.',
      resource: 'SPF Finances - Obligations comptables',
      priority: 'medium',
    },
    B6: {
      questionId: 'B6',
      title: 'Standardisez vos contrats fournisseurs',
      description:
        'Créez des clauses types (RGPD, confidentialité, audit) avec check-list onboarding.',
      resource: 'Agoria - Modèles contractuels',
      priority: 'medium',
    },
    C1: {
      questionId: 'C1',
      title: 'Créez votre registre des traitements RGPD',
      description:
        "Documentez tous vos traitements de données selon l'art. 30 RGPD.",
      resource: 'APD - Modèle registre pour PME',
      priority: 'high',
    },
    C2: {
      questionId: 'C2',
      title: 'Désignez un DPO ou référent privacy',
      description:
        'Formalisez le rôle avec mandat clair même si DPO non obligatoire.',
      resource: 'APD - Quand désigner un DPO ?',
      priority: 'medium',
    },
    C3: {
      questionId: 'C3',
      title: 'Publiez votre politique de confidentialité',
      description:
        'Informez clairement sur vos traitements et mappez les bases légales.',
      resource: 'APD - Modèle notice RGPD',
      priority: 'high',
    },
    C4: {
      questionId: 'C4',
      title: 'Créez une procédure de gestion des droits',
      description:
        'Formalisez le processus pour répondre aux demandes (accès, rectification, effacement) sous 1 mois.',
      resource: 'APD - Droits des personnes',
      priority: 'medium',
    },
    C5: {
      questionId: 'C5',
      title: 'Définissez votre politique de rétention',
      description:
        'Documentez les durées de conservation et mettez en place des purges automatiques.',
      resource: 'APD - Durées de conservation',
      priority: 'medium',
    },
    C6: {
      questionId: 'C6',
      title: 'Sécurisez vos transferts de données',
      description:
        'Vérifiez localisation des hébergeurs et mettez en place des garanties (SCC) si hors UE.',
      resource: 'APD - Transferts internationaux',
      priority: 'high',
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
