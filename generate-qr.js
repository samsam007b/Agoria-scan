const QRCode = require('qrcode');
const fs = require('fs');

const url = 'https://agoria-scan.vercel.app';

// Generate QR code as PNG
QRCode.toFile('public/qr-code-agoria-scan.png', url, {
  color: {
    dark: '#003E7E',  // Agoria blue
    light: '#FFFFFF'
  },
  width: 500,
  margin: 2
}, function (err) {
  if (err) {
    console.error('Erreur lors de la génération du QR code:', err);
    process.exit(1);
  }
  console.log('✅ QR code généré avec succès: public/qr-code-agoria-scan.png');
  console.log('📱 URL encodée:', url);
});
