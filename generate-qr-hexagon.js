const QRCode = require('qrcode');
const fs = require('fs');

const url = 'https://agoria-scan.vercel.app';
const agoriaBlue = '#003E7E';

// Generate QR code as SVG string
QRCode.toString(url, {
  type: 'svg',
  color: {
    dark: agoriaBlue,
    light: '#FFFFFF'
  },
  width: 400,
  margin: 2,
  errorCorrectionLevel: 'H' // High error correction for better scanning with clipped corners
}, function (err, svgString) {
  if (err) {
    console.error('Erreur lors de la génération du QR code:', err);
    process.exit(1);
  }

  // Create hexagonal SVG wrapper
  const size = 500;
  const padding = 50;
  const qrSize = size - (padding * 2);

  // Calculate hexagon points (flat top hexagon)
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 10; // 10px margin

  const hexagonPoints = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6; // Start from top, rotate 30 degrees
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    hexagonPoints.push(`${x},${y}`);
  }

  const hexagonPath = hexagonPoints.join(' ');

  // Extract the QR code path from the generated SVG
  const qrPathMatch = svgString.match(/<path[^>]*d="([^"]*)"[^>]*\/>/);
  const qrPath = qrPathMatch ? qrPathMatch[1] : '';

  // Create final hexagonal QR code SVG
  const hexagonalQRSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Hexagonal clip path -->
    <clipPath id="hexClip">
      <polygon points="${hexagonPath}" />
    </clipPath>

    <!-- Gradient for background -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F5F5F5;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Hexagonal background -->
  <polygon points="${hexagonPath}" fill="url(#bgGradient)" />

  <!-- Hexagonal border -->
  <polygon points="${hexagonPath}" fill="none" stroke="${agoriaBlue}" stroke-width="4" />

  <!-- QR Code with hexagonal clip -->
  <g clip-path="url(#hexClip)">
    <g transform="translate(${padding}, ${padding}) scale(${qrSize / 400})">
      ${svgString.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1]}
    </g>
  </g>
</svg>`;

  // Save SVG file
  fs.writeFileSync('public/qr-code-hexagon.svg', hexagonalQRSVG);
  console.log('✅ QR code hexagonal (SVG) généré avec succès: public/qr-code-hexagon.svg');
  console.log('📱 URL encodée:', url);
  console.log('🎨 Forme: Hexagone avec bordure Agoria Blue');
});
