export const scanContextData = {
  title: "Pourquoi célébrer la conformité ?",
  intro:
    "La conformité est devenue un facteur de compétitivité. Les TPE/PME tech wallonnes doivent prouver qu'elles protègent les données, sécurisent leurs systèmes et respectent des règles en évolution (NIS2, RGPD, marchés publics). Notre campagne donne un cap clair et des actions rapides.",
  insights: [
    {
      label: "Cyberincidents en hausse avec NIS2",
      value: "556 notifications en 18 mois (+80%)",
      source_label: "CCB Safeonweb",
      source_url:
        "https://atwork.safeonweb.be/fr/news/mobilisation-pour-la-cybersecurite-2-410-organisations-dans-les-secteurs-critiques-belges-0",
    },
    {
      label: "Violations de données 2023",
      value: "1 292 notifications (43% erreur humaine)",
      source_label: "APD – Rapport annuel 2023",
      source_url:
        "https://www.autoriteprotectiondonnees.be/publications/rapport-annuel-2023.pdf",
    },
    {
      label: "IA en entreprise 2024",
      value: "24,71% des entreprises (20,7% petites)",
      source_label: "SPF Économie",
      source_url:
        "https://economie.fgov.be/fr/themes/line/economie-numerique-en-chiffres/les-entreprises-et-linternet/les-entreprises-et-les",
    },
  ],
  themes: [
    {
      id: "conformite-reglementation",
      title: "Conformité & Règlementation",
      color: "#FF6B35", // Orange (Social & RH thème proche)
      why: "Simplifier l'accès et la mise à jour réglementaire des PME (emploi, marchés publics, obligations sociales).",
      help: [
        "Check-lists employeur",
        "Modèles contractuels",
        "Veille réglementaire",
        "Hygiène facturation/archivage",
      ],
      sources: [
        {
          label: "SPF Économie – Marchés publics PME",
          url: "https://economie.fgov.be/fr/themes/entreprises/developper-et-gerer-une/acces-des-pme-aux-marches",
        },
        {
          label: "Transparence & simplification",
          url: "https://economie.fgov.be/fr/themes/entreprises/developper-et-gerer-une/acces-des-pme-aux-marches/acces-facilite-pour-les-pme/plus-de-transparence-et",
        },
      ],
    },
    {
      id: "rse-gouvernance",
      title: "RSE & Gouvernance",
      color: "#7CB342", // Vert (Environnement)
      why: "Encourager des pratiques durables, éthiques et inclusives dans les organisations tech.",
      help: [
        "Stratégie RSE",
        "Reporting extra-financier",
        "Politiques d'inclusion",
        "Éthique numérique",
      ],
      sources: [
        {
          label: "SPF Économie – RSE",
          url: "https://economie.fgov.be/fr/themes/entreprises",
        },
      ],
    },
    {
      id: "digitalisation-ia",
      title: "Digitalisation & IA",
      color: "#00BCD4", // Cyan (Digital & IA)
      why: "Accompagner la transition numérique et l'adoption de l'IA en toute sécurité.",
      help: [
        "Stratégie de transformation digitale",
        "Adoption IA responsable",
        "Automatisation des processus",
        "Conformité AI Act",
      ],
      sources: [
        {
          label: "SPF Économie – Économie numérique",
          url: "https://economie.fgov.be/fr/themes/line/economie-numerique-en-chiffres/les-entreprises-et-linternet/les-entreprises-et-les",
        },
      ],
    },
    {
      id: "securite-cybersecurite",
      title: "Sécurité & Cybersécurité",
      color: "#0073CF", // Bleu (Data Protection & Cyber)
      why: "Renforcer la résilience face aux menaces numériques, conformité NIS2 et RGPD.",
      help: [
        "MFA et authentification forte",
        "Sauvegardes 3-2-1 testées",
        "Formation anti-phishing",
        "Analyse d'applicabilité NIS2",
        "Gestion des incidents",
      ],
      sources: [
        {
          label: "CCB – NIS2",
          url: "https://ccb.belgium.be/fr/reglementation/nis2",
        },
        {
          label: "SPF Économie – Cybersécurité PME",
          url: "https://economie.fgov.be/fr/themes/entreprises/pme-et-independants-en/digitalisation-des-pme/la-cybersecurite-au-sein-des",
        },
        {
          label: "APD – Rapport annuel 2023",
          url: "https://www.autoriteprotectiondonnees.be/publications/rapport-annuel-2023.pdf",
        },
      ],
    },
    {
      id: "competences-formation",
      title: "Compétences & Formation",
      color: "#9C27B0", // Violet (Financial proche)
      why: "Développer les talents internes pour maîtriser les nouvelles obligations et technologies.",
      help: [
        "Plans de formation conformité",
        "Upskilling cybersécurité",
        "Sensibilisation RGPD",
        "Formation IA et data",
      ],
      sources: [
        {
          label: "Agoria – Formation continue",
          url: "https://www.agoria.be",
        },
      ],
    },
    {
      id: "financement-gouvernance",
      title: "Financement & Gouvernance",
      color: "#FFC107", // Jaune (Industrial)
      why: "Faciliter l'accès aux aides, incitants et mécanismes de soutien à la conformité.",
      help: [
        "Subventions digitalisation",
        "Aides à la transition",
        "Gouvernance financière",
        "Audits et certification",
      ],
      sources: [
        {
          label: "SPF Économie – Aides aux entreprises",
          url: "https://economie.fgov.be/fr/themes/entreprises",
        },
      ],
    },
  ],
  event: {
    title: "Journée de la conformité",
    bullets: [
      "Ateliers NIS2 & RGPD",
      "Cliniques individuelles",
      "Rencontres experts",
    ],
    cta_label: "Voir le programme",
    cta_url: "/evenement/conformity-day",
  },
};
