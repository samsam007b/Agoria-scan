// Données complètes des 6 thèmes de conformité Agoria

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    score: number;
  }[];
}

export interface ComplianceTheme {
  id: string;
  position: number;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  description: string;
  weight: number;
  keyPoints: string[];
  stat: string;
  questions: Question[];
}

export const complianceThemes: ComplianceTheme[] = [
  {
    id: 'data-protection',
    position: 0, // top
    title: 'Protection des données & cybersécurité',
    shortTitle: 'Données & Cyber',
    icon: '🔐',
    color: '#0073CF',
    description: 'RGPD, NIS2, sécurité des systèmes, protection données clients',
    weight: 0.20,
    keyPoints: [
      'Registre des traitements RGPD',
      'Authentification multi-facteurs (MFA)',
      'Plan de réponse aux incidents cyber',
      'Sauvegardes 3-2-1 testées'
    ],
    stat: '72h pour notifier une violation RGPD',
    questions: [
      {
        id: 'cyber-1',
        text: 'Avez-vous désigné un responsable cybersécurité avec mandat écrit ?',
        options: [
          { label: 'Oui, mandat formalisé ≤12 mois', score: 10 },
          { label: 'Oui, mais non documenté', score: 6 },
          { label: 'En projet', score: 3 },
          { label: 'Non', score: 0 }
        ]
      },
      {
        id: 'cyber-2',
        text: 'MFA activé sur email, cloud et accès critiques ?',
        options: [
          { label: 'MFA partout', score: 10 },
          { label: 'MFA partiel', score: 6 },
          { label: 'En test/pilote', score: 3 },
          { label: 'Pas de MFA', score: 0 }
        ]
      },
      {
        id: 'cyber-3',
        text: 'Procédure de notification incidents (72h RGPD) ?',
        options: [
          { label: 'Procédure complète documentée', score: 10 },
          { label: 'Procédure sommaire', score: 6 },
          { label: 'Processus informel', score: 3 },
          { label: 'Aucune procédure', score: 0 }
        ]
      }
    ]
  },
  {
    id: 'environmental',
    position: 1, // top-right
    title: 'Conformité environnementale & transition durable',
    shortTitle: 'Environnement',
    icon: '🌱',
    color: '#7CB342',
    description: 'ESG, bilan carbone, économie circulaire, reporting durabilité',
    weight: 0.15,
    keyPoints: [
      'Mesure empreinte carbone',
      'Plan de transition énergétique',
      'Gestion déchets électroniques',
      'Reporting ESG/CSRD'
    ],
    stat: '2024: obligation reporting ESG +250 employés',
    questions: [
      {
        id: 'env-1',
        text: 'Avez-vous mesuré votre empreinte carbone au cours des 24 derniers mois ?',
        options: [
          { label: 'Oui, bilan carbone certifié', score: 10 },
          { label: 'Estimation interne réalisée', score: 6 },
          { label: 'En projet de mesure', score: 3 },
          { label: 'Non, pas encore', score: 0 }
        ]
      },
      {
        id: 'env-2',
        text: 'Politique de gestion des déchets électroniques (DEEE) ?',
        options: [
          { label: 'Politique formalisée + traçabilité', score: 10 },
          { label: 'Partenaire recyclage identifié', score: 6 },
          { label: 'Processus informel', score: 3 },
          { label: 'Aucune politique', score: 0 }
        ]
      },
      {
        id: 'env-3',
        text: 'Votre entreprise dispose-t-elle d\'un plan de transition énergétique ?',
        options: [
          { label: 'Plan formalisé avec objectifs chiffrés', score: 10 },
          { label: 'Actions ponctuelles identifiées', score: 6 },
          { label: 'Réflexion en cours', score: 3 },
          { label: 'Pas de plan', score: 0 }
        ]
      }
    ]
  },
  {
    id: 'social-hr',
    position: 2, // bottom-right
    title: 'Conformité sociale & RH',
    shortTitle: 'Social & RH',
    icon: '👥',
    color: '#FF6B35',
    description: 'Droit du travail, bien-être, formation, diversité & inclusion',
    weight: 0.20,
    keyPoints: [
      'Contrats de travail conformes',
      'DIMONA et registre personnel',
      'Plan de formation obligatoire',
      'Politique bien-être & inclusion'
    ],
    stat: '5% masse salariale pour formation',
    questions: [
      {
        id: 'hr-1',
        text: 'Vos contrats de travail sont-ils conformes et à jour (clauses RGPD, télétravail) ?',
        options: [
          { label: 'Tous conformes, revus ≤2 ans', score: 10 },
          { label: 'Majoritairement conformes', score: 6 },
          { label: 'Mise à jour en cours', score: 3 },
          { label: 'Pas de revue récente', score: 0 }
        ]
      },
      {
        id: 'hr-2',
        text: 'Plan de formation annuel avec budget alloué ?',
        options: [
          { label: 'Plan formalisé ≥5% masse salariale', score: 10 },
          { label: 'Plan existant <5%', score: 6 },
          { label: 'Formations ponctuelles', score: 3 },
          { label: 'Pas de plan de formation', score: 0 }
        ]
      },
      {
        id: 'hr-3',
        text: 'Politique de bien-être au travail et prévention des risques psychosociaux ?',
        options: [
          { label: 'Politique écrite + personne de confiance', score: 10 },
          { label: 'Processus informel existant', score: 6 },
          { label: 'En cours de formalisation', score: 3 },
          { label: 'Aucune politique', score: 0 }
        ]
      }
    ]
  },
  {
    id: 'financial',
    position: 3, // bottom
    title: 'Conformité financière',
    shortTitle: 'Finance',
    icon: '💶',
    color: '#9C27B0',
    description: 'Facturation, TVA, subsides, marchés publics, transparence',
    weight: 0.15,
    keyPoints: [
      'Mentions légales factures',
      'Déclarations TVA conformes',
      'Éligibilité subsides',
      'Transparence financière'
    ],
    stat: 'BCE: mise à jour sous 30 jours',
    questions: [
      {
        id: 'fin-1',
        text: 'Vos factures contiennent-elles toutes les mentions légales obligatoires ?',
        options: [
          { label: 'Toutes conformes, vérifiées ≤12 mois', score: 10 },
          { label: 'Conformes mais non vérifiées', score: 6 },
          { label: 'Mise en conformité en cours', score: 3 },
          { label: 'Mentions incomplètes', score: 0 }
        ]
      },
      {
        id: 'fin-2',
        text: 'Déclarations TVA à jour et processus de contrôle interne ?',
        options: [
          { label: 'À jour + contrôle trimestriel', score: 10 },
          { label: 'À jour, contrôle ponctuel', score: 6 },
          { label: 'Quelques retards occasionnels', score: 3 },
          { label: 'Retards fréquents', score: 0 }
        ]
      },
      {
        id: 'fin-3',
        text: 'Veille active sur les subsides et aides disponibles pour votre secteur ?',
        options: [
          { label: 'Veille structurée + dossiers actifs', score: 10 },
          { label: 'Veille occasionnelle', score: 6 },
          { label: 'Intérêt mais pas de veille', score: 3 },
          { label: 'Aucune veille', score: 0 }
        ]
      }
    ]
  },
  {
    id: 'digital-ai',
    position: 4, // bottom-left
    title: 'Conformité numérique & IA',
    shortTitle: 'Digital & IA',
    icon: '🤖',
    color: '#00BCD4',
    description: 'AI Act, éthique IA, transformation digitale, accessibilité web',
    weight: 0.15,
    keyPoints: [
      'Transparence algorithmes IA',
      'Accessibilité WCAG 2.1',
      'Souveraineté des données',
      'Digital Services Act'
    ],
    stat: 'AI Act applicable dès 2025',
    questions: [
      {
        id: 'ai-1',
        text: 'Si vous utilisez l\'IA, avez-vous évalué les risques et documenté les usages ?',
        options: [
          { label: 'Analyse de risques complète + registre', score: 10 },
          { label: 'Documentation partielle', score: 6 },
          { label: 'Usage IA mais pas de documentation', score: 3 },
          { label: 'Pas d\'usage IA / Non évalué', score: 5 }
        ]
      },
      {
        id: 'ai-2',
        text: 'Votre site web respecte-t-il les normes d\'accessibilité (WCAG 2.1) ?',
        options: [
          { label: 'Audit récent + niveau AA atteint', score: 10 },
          { label: 'Efforts d\'accessibilité sans audit', score: 6 },
          { label: 'Accessibilité partielle', score: 3 },
          { label: 'Non conforme', score: 0 }
        ]
      },
      {
        id: 'ai-3',
        text: 'Politique de souveraineté des données (hébergement, cloud, transferts hors UE) ?',
        options: [
          { label: 'Politique claire + hébergement UE', score: 10 },
          { label: 'Partiellement dans l\'UE', score: 6 },
          { label: 'Pas de politique définie', score: 3 },
          { label: 'Hébergement hors UE sans garanties', score: 0 }
        ]
      }
    ]
  },
  {
    id: 'industrial',
    position: 5, // top-left
    title: 'Conformité industrielle & Sécurité',
    shortTitle: 'Industriel',
    icon: '⚙️',
    color: '#FFC107',
    description: 'Normes produits, marquage CE, sécurité machines, ISO',
    weight: 0.15,
    keyPoints: [
      'Marquage CE produits',
      'Normes ISO applicables',
      'Sécurité équipements',
      'Documentation technique'
    ],
    stat: '90% PME tech concernées par CE',
    questions: [
      {
        id: 'ind-1',
        text: 'Vos produits/équipements disposent-ils du marquage CE si nécessaire ?',
        options: [
          { label: 'Tous marqués CE + déclaration conformité', score: 10 },
          { label: 'Marquage CE partiel', score: 6 },
          { label: 'En cours de certification', score: 3 },
          { label: 'Non applicable / Non marqués', score: 5 }
        ]
      },
      {
        id: 'ind-2',
        text: 'Documentation technique complète (dossiers, manuels, maintenances) ?',
        options: [
          { label: 'Documentation complète et à jour', score: 10 },
          { label: 'Documentation partielle', score: 6 },
          { label: 'Documentation obsolète', score: 3 },
          { label: 'Peu ou pas de documentation', score: 0 }
        ]
      },
      {
        id: 'ind-3',
        text: 'Certifications ISO pertinentes obtenues (9001, 14001, 27001, etc.) ?',
        options: [
          { label: 'Au moins 1 ISO active + audits réguliers', score: 10 },
          { label: 'En cours de certification', score: 6 },
          { label: 'Projet de certification', score: 3 },
          { label: 'Aucune certification ISO', score: 0 }
        ]
      }
    ]
  }
];

// Fonction helper pour obtenir un thème par ID
export function getThemeById(themeId: string): ComplianceTheme | undefined {
  return complianceThemes.find(t => t.id === themeId);
}

// Fonction helper pour obtenir toutes les questions
export function getAllQuestions(): Question[] {
  return complianceThemes.flatMap(theme => theme.questions);
}

// Couleurs du système de scoring
export const scoringColors = {
  high: '#7CB342',    // 71-100: Vert
  medium: '#FF9800',  // 41-70: Orange
  low: '#F44336'      // 0-40: Rouge
};

export function getScoreColor(score: number): string {
  if (score >= 71) return scoringColors.high;
  if (score >= 41) return scoringColors.medium;
  return scoringColors.low;
}

export function getScoreLevel(score: number) {
  if (score >= 71) return {
    label: 'Excellence',
    color: scoringColors.high,
    message: 'Votre entreprise est un modèle de conformité'
  };
  if (score >= 41) return {
    label: 'En progression',
    color: scoringColors.medium,
    message: 'Des bases solides, continuez vos efforts'
  };
  return {
    label: 'Action requise',
    color: scoringColors.low,
    message: 'Des actions prioritaires sont nécessaires'
  };
}
