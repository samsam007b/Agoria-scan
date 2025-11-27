# 📱 Options de QR Codes pour Agoria Scan

Ce document présente les différentes approches possibles pour créer des QR codes qui s'alignent avec la direction artistique hexagonale d'Agoria.

## 🎨 Approches implémentées

### 1. **QR Code Standard** ✅
- **Fichier**: `qr-code-agoria-scan.png`
- **Description**: QR code carré classique en bleu Agoria
- **Scannabilité**: ⭐⭐⭐⭐⭐ Excellent
- **Esthétique**: Simple et fonctionnel

### 2. **QR Code Clippé en Hexagone** ✅
- **Fichiers**: `qr-code-hexagon-v2.svg` / `.png`
- **Description**: QR code carré avec un masque hexagonal
- **Scannabilité**: ⭐⭐⭐⭐ Très bon (correction d'erreur niveau H)
- **Esthétique**: Moderne et s'intègre à la charte graphique
- **Avantages**:
  - Structure QR préservée
  - Bordure hexagonale élégante
  - Coins coupés minimisent l'impact sur les zones critiques

### 3. **QR Code à Modules Hexagonaux** ✅
- **Fichiers**: `qr-code-hexagonal-modules.svg` / `.png`
- **Description**: Chaque pixel carré est remplacé par un hexagone
- **Scannabilité**: ⭐⭐⭐ À tester (dépend du scanner)
- **Esthétique**: Très artistique et unique
- **Avantages**:
  - Look totalement unique
  - Parfaitement aligné avec la direction artistique
  - Tessellation hexagonale régulière
- **Inconvénients**:
  - Certains scanners peuvent avoir du mal
  - Nécessite un test approfondi

## 🚀 Autres approches possibles (non implémentées)

### 4. **QR Code avec Logo Central**
- Ajouter le logo Agoria au centre du QR code
- Utilise la correction d'erreur pour compenser l'espace du logo
- Scannabilité: ⭐⭐⭐⭐ Bon si le logo ne dépasse pas 30% de la surface

### 5. **QR Code avec Coins Arrondis**
- Remplacer les pixels carrés par des cercles/formes arrondies
- Plus doux visuellement
- Scannabilité: ⭐⭐⭐⭐ Bon

### 6. **QR Code avec Dégradé**
- Utiliser un dégradé de couleurs au lieu d'une couleur unie
- Nécessite un bon contraste
- Scannabilité: ⭐⭐⭐ Moyen (dépend du contraste)

### 7. **QR Code Animé (SVG/GIF)**
- Animation subtile des modules
- Pour usage web uniquement
- Scannabilité: ⭐⭐⭐⭐ Bon si un frame est fixe

### 8. **QR Code avec Texture/Pattern**
- Appliquer une texture aux modules noirs
- Garde le contraste élevé
- Scannabilité: ⭐⭐⭐⭐ Bon

## 📊 Comparaison des versions implémentées

| Version | Fichier | Taille | Scannabilité | Unicité | Recommandation |
|---------|---------|--------|--------------|---------|----------------|
| Standard | `qr-code-agoria-scan.png` | 500x500 | ⭐⭐⭐⭐⭐ | ⭐⭐ | Usage général |
| Clippé Hexagonal | `qr-code-hexagon-v2.png` | 500x500 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | **Recommandé** |
| Modules Hexagonaux | `qr-code-hexagonal-modules.png` | 423x463 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Usage artistique |

## 🎯 Recommandations

1. **Pour l'impression officielle**: Utiliser le QR code clippé hexagonal (v2)
   - Bon compromis entre esthétique et fiabilité
   - Testé et fonctionnel

2. **Pour le web/digital**: Peut expérimenter avec les modules hexagonaux
   - Plus visuel et unique
   - Tester sur plusieurs appareils avant déploiement

3. **Pour une fiabilité maximale**: QR code standard
   - Garantie de fonctionnement sur tous les scanners

## 🧪 Tests recommandés

Pour chaque version, tester avec :
- ✅ iPhone Camera
- ✅ Android Camera
- ✅ Applications tierces (WhatsApp, WeChat, etc.)
- ✅ Différentes distances de scan
- ✅ Différents angles
- ✅ Différentes conditions d'éclairage

## 📝 Notes techniques

- **Correction d'erreur**: Niveau H (30% de tolérance)
- **Couleur**: Agoria Blue (#003E7E)
- **URL encodée**: https://agoria-scan.vercel.app
- **Formats disponibles**: SVG (vectoriel) et PNG (raster)

---

**Conseil**: Toujours tester les QR codes avant l'impression en masse !
