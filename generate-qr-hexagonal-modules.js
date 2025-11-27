const QRCode = require('qrcode');
const fs = require('fs');

const url = 'https://agoria-scan.vercel.app';
const agoriaBlue = '#003E7E';

// Generate QR code segments
QRCode.toDataURL(url, {
  errorCorrectionLevel: 'H',
  margin: 1,
  width: 1000
}, async function (err, dataUrl) {
  if (err) {
    console.error('Erreur lors de la génération du QR code:', err);
    process.exit(1);
  }

  // Use QRCode segments to get the matrix
  const segments = await QRCode.create(url, {
    errorCorrectionLevel: 'H'
  });

  const modules = segments.modules;
  const size = modules.size;
  const moduleSize = 12; // Size of each hexagon
  const hexRadius = moduleSize / 2;

  // Calculate hexagon dimensions (pointy top hexagon)
  const hexWidth = hexRadius * 2;
  const hexHeight = Math.sqrt(3) * hexRadius;
  const horizontalSpacing = hexWidth * 0.75;
  const verticalSpacing = hexHeight;

  // Calculate total SVG dimensions with padding
  const padding = 60;
  const svgWidth = size * horizontalSpacing + hexRadius + padding * 2;
  const svgHeight = size * verticalSpacing + padding * 2;

  // Function to create hexagon path (pointy top)
  function createHexagonPath(cx, cy, radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return points.join(' ');
  }

  // Generate hexagons for each dark module
  let hexagons = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const isDark = modules.get(x, y);
      if (isDark) { // If module is dark
        // Offset every other row for hexagon tessellation
        const offsetX = (y % 2) * (horizontalSpacing / 2);
        const cx = padding + x * horizontalSpacing + offsetX + hexRadius;
        const cy = padding + y * verticalSpacing + hexRadius;

        const hexPath = createHexagonPath(cx, cy, hexRadius);
        hexagons += `  <polygon points="${hexPath}" fill="${agoriaBlue}" />\n`;
      }
    }
  }

  // Create SVG
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${Math.round(svgWidth)}" height="${Math.round(svgHeight)}" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- White background -->
  <rect width="100%" height="100%" fill="#FFFFFF"/>

  <!-- QR Code with hexagonal modules -->
${hexagons}

  <!-- Border for visibility -->
  <rect x="1" y="1" width="${svgWidth - 2}" height="${svgHeight - 2}" fill="none" stroke="#E0E0E0" stroke-width="2"/>
</svg>`;

  // Save SVG file
  fs.writeFileSync('public/qr-code-hexagonal-modules.svg', svg);
  console.log('✅ QR code avec modules hexagonaux généré: public/qr-code-hexagonal-modules.svg');
  console.log('📱 URL encodée:', url);
  console.log('🎨 Style: Chaque pixel est un hexagone pointu');
  console.log('⚠️  À tester pour vérifier la scannabilité !');
  console.log(`📐 Dimensions: ${Math.round(svgWidth)}x${Math.round(svgHeight)}px`);
  console.log(`📊 Taille de la matrice: ${size}x${size} modules`);
});
