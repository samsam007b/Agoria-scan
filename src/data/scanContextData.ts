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
      id: "reg-social",
      title: "Conformité réglementaire & sociale",
      why: "Exigences de base (BCE, contrats, DIMONA, marchés publics) et transparence accrue ; simplification en cours mais obligations réelles pour candidater et livrer.",
      help: [
        "Check-lists employeur",
        "Modèles contractuels",
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
      id: "rgpd",
      title: "RGPD & Gouvernance des données",
      why: "Flux soutenu de violations notifiées, poids de l'erreur humaine, nécessité d'un registre, base légale, délais 72h.",
      help: [
        "Registre des traitements",
        "Notices claires",
        "SLA droits des personnes",
        "Politique de rétention",
      ],
      sources: [
        {
          label: "APD – Rapport annuel 2023",
          url: "https://www.autoriteprotectiondonnees.be/publications/rapport-annuel-2023.pdf",
        },
      ],
    },
    {
      id: "digital-sec",
      title: "Digitalisation & Sécurité (incl. NIS2)",
      why: "Montée des incidents, obligations renforcées, adoption numérique hétérogène (écart petites vs grandes).",
      help: [
        "MFA",
        "Sauvegardes 3-2-1 testées",
        "Formation anti-phishing",
        "Analyse d'applicabilité NIS2 et plan d'actions",
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
