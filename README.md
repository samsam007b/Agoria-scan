# 🎯 Agoria Compliance Scan - Démo Académique

Un outil d'auto-évaluation de conformité pour les entreprises belges, développé dans le cadre d'un projet académique en collaboration avec Agoria.

## 📋 Description

Cette démo reproduit l'apparence du site officiel d'Agoria et présente un **Compliance Scan** fonctionnel permettant aux entreprises d'évaluer leur niveau de conformité en matière de :

- 🛡️ **Digitalisation & Sécurité** (30%) - Cybersécurité, MFA, sauvegardes, NIS2
- 📊 **Conformité réglementaire & sociale** (40%) - BCE, contrats, DIMONA, registre du personnel
- 🔒 **RGPD & Gouvernance des données** (30%) - Registre, DPO, droits des personnes

## ✨ Fonctionnalités

- ✅ **Homepage style Agoria** avec navigation factice
- ✅ **18 questions réparties sur 3 modules**
- ✅ **Calcul automatique des scores** avec pondération
- ✅ **Visualisations interactives** (gauges, barres de progression)
- ✅ **Recommandations personnalisées** selon les réponses
- ✅ **Génération de rapport PDF** complet
- ✅ **Design responsive** (mobile, tablet, desktop)
- ✅ **Sauvegarde automatique** des réponses (sessionStorage)

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ et npm

### Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

### Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
Agoria-scan/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Layout global avec Header/Footer
│   │   ├── page.tsx                      # Homepage Agoria-style
│   │   ├── compliance-scan/
│   │   │   ├── page.tsx                  # Landing du Compliance Scan
│   │   │   ├── questions/page.tsx        # Questionnaire (18 questions)
│   │   │   └── resultats/page.tsx        # Page de résultats
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AgoriaHeader.tsx          # Header avec navigation
│   │   │   └── AgoriaFooter.tsx          # Footer Agoria
│   │   ├── home/
│   │   │   └── HeroSection.tsx           # Hero section homepage
│   │   └── compliance/
│   │       ├── QuestionCard.tsx          # Carte de question
│   │       ├── ProgressBar.tsx           # Barre de progression
│   │       ├── ScoreGauge.tsx            # Gauge circulaire
│   │       └── ModuleScore.tsx           # Score par module
│   ├── data/
│   │   └── questions.json                # Les 18 questions structurées
│   └── utils/
│       ├── scoreCalculator.ts            # Logique de calcul des scores
│       └── pdfGenerator.ts               # Génération du rapport PDF
```

## 🎨 Design System

### Couleurs Agoria

```css
--agoria-blue-dark: #003E7E;      /* Bleu foncé principal */
--agoria-blue: #0073CF;           /* Bleu clair */
--agoria-green: #7CB342;          /* Vert succès */
--agoria-orange: #FF6B35;         /* Orange warning */
--agoria-red: #D32F2F;            /* Rouge erreur */
```

### Typographie

- **Font principale** : Open Sans (Google Fonts)
- **Poids** : 400 (regular), 600 (semibold), 700 (bold)

## 📊 Calcul des scores

### Score global

```
Score Global = (Score Module A × 30%) + (Score Module B × 40%) + (Score Module C × 30%)
```

### Niveaux de conformité

- **0-40** : ⚠️ À risque (rouge)
- **41-70** : 🟠 En progression (orange)
- **71-100** : ✅ Conforme et proactive (vert)

## 🚢 Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🛠️ Stack Technique

- **Framework** : Next.js 16 (App Router) + TypeScript
- **Styling** : Tailwind CSS 4
- **Icons** : Lucide React
- **PDF** : jsPDF
- **Deployment** : Vercel

## 📝 Notes importantes

### Projet académique

Ce projet est développé dans un cadre **purement académique** en collaboration avec Agoria.

### Fonctionnalités factices

- Tous les liens du header/footer sauf "Compliance Scan" sont désactivés
- Les sections "Services" de la homepage sont décoratives
- Les données sont traitées localement (sessionStorage)

### Données et confidentialité

- **Aucune donnée personnelle** n'est collectée
- Les réponses sont stockées localement dans le navigateur
- Le rapport PDF est généré côté client

## 🎓 Contexte académique

Ce projet a été développé dans le cadre d'une collaboration avec **Agoria** pour la **Journée de la Conformité 2025**.

---

**Note** : Ce projet est une démo académique. Pour un audit de conformité officiel, contactez directement [Agoria](https://www.agoria.be).
