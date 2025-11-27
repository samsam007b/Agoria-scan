const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('public/qr-code-hexagon.svg');

sharp(svgBuffer)
  .png()
  .toFile('public/qr-code-hexagon.png')
  .then(() => {
    console.log('✅ QR code hexagonal (PNG) généré avec succès: public/qr-code-hexagon.png');
    console.log('🎨 Format: PNG 500x500px avec transparence');
    console.log('📱 Testez le QR code pour vérifier qu\'il est scannable !');
  })
  .catch(err => {
    console.error('Erreur lors de la conversion:', err);
    process.exit(1);
  });
