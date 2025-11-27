const potrace = require('potrace');
const fs = require('fs');

// Trace the logo image to SVG
potrace.trace('public/agoria-logo.png', {
  color: '#000000',
  background: '#FFFFFF',
  threshold: 128,
  optTolerance: 0.2
}, function(err, svg) {
  if (err) {
    console.error('Erreur lors de la vectorisation:', err);
    process.exit(1);
  }

  // Save the vectorized SVG
  fs.writeFileSync('public/agoria-logo-vectorized.svg', svg);
  console.log('✅ Logo vectorisé avec succès: public/agoria-logo-vectorized.svg');
  console.log('📐 Format: SVG avec chemins vectoriels');
  console.log('🎨 Le logo est maintenant entièrement vectoriel et redimensionnable');
});
