const QRCode = require('qrcode');
const fs = require('fs');

const url = 'https://agoria-scan.vercel.app';
const agoriaBlue = '#003E7E';

// Generate QR code as data URL
QRCode.toDataURL(url, {
  color: {
    dark: agoriaBlue,
    light: '#FFFFFF'
  },
  width: 340, // Smaller to fit within hexagon with safe margins
  margin: 2,
  errorCorrectionLevel: 'H' // High error correction to handle hexagonal clipping
}, function (err, dataUrl) {
  if (err) {
    console.error('Erreur lors de la génération du QR code:', err);
    process.exit(1);
  }

  const size = 500;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 15; // 15px margin

  // Calculate hexagon points (pointy top hexagon)
  const hexagonPoints = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    hexagonPoints.push(`${x},${y}`);
  }

  const hexagonPath = hexagonPoints.join(' ');

  // Calculate QR code position (centered)
  const qrSize = 340;
  const qrX = (size - qrSize) / 2;
  const qrY = (size - qrSize) / 2;

  // Create SVG with embedded QR code image
  const hexagonalQRSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Hexagonal clip path for QR code -->
    <clipPath id="hexClip">
      <polygon points="${hexagonPath}" />
    </clipPath>
  </defs>

  <!-- White background hexagon -->
  <polygon points="${hexagonPath}" fill="#FFFFFF" />

  <!-- QR Code image with hexagonal clip -->
  <g clip-path="url(#hexClip)">
    <image href="${dataUrl}" x="${qrX}" y="${qrY}" width="${qrSize}" height="${qrSize}" />
  </g>

  <!-- Hexagonal border on top -->
  <polygon points="${hexagonPath}" fill="none" stroke="${agoriaBlue}" stroke-width="6" stroke-linejoin="miter" />
</svg>`;

  // Save SVG file
  fs.writeFileSync('public/qr-code-hexagon-v2.svg', hexagonalQRSVG);
  console.log('✅ QR code hexagonal V2 (SVG) généré avec succès: public/qr-code-hexagon-v2.svg');
  console.log('📱 URL encodée:', url);
  console.log('🎨 Forme: Hexagone pointu vers le haut avec bordure Agoria Blue');
  console.log('🔍 Niveau de correction d\'erreur: H (30% de dommages tolérés)');
  console.log('✨ Le QR code est centré avec des marges de sécurité pour garantir la scannabilité');
});
