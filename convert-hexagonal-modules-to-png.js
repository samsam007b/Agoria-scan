const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('public/qr-code-hexagonal-modules.svg');

sharp(svgBuffer)
  .png()
  .toFile('public/qr-code-hexagonal-modules.png')
  .then(() => {
    console.log('✅ QR code modules hexagonaux (PNG) généré: public/qr-code-hexagonal-modules.png');
    console.log('📱 Testez avec votre smartphone pour vérifier la scannabilité !');
  })
  .catch(err => {
    console.error('Erreur lors de la conversion:', err);
    process.exit(1);
  });
