const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('public/qr-code-hexagon-v2.svg');

sharp(svgBuffer)
  .png()
  .toFile('public/qr-code-hexagon-v2.png')
  .then(() => {
    console.log('✅ QR code hexagonal V2 (PNG) généré avec succès: public/qr-code-hexagon-v2.png');
    console.log('🎨 Format: PNG 500x500px');
    console.log('📱 Prêt à être testé avec votre smartphone !');
  })
  .catch(err => {
    console.error('Erreur lors de la conversion:', err);
    process.exit(1);
  });
