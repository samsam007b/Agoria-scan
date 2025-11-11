import { jsPDF } from 'jspdf';
import type { ScoreResult } from './scoreCalculator';
import type { Recommendation } from './scoreCalculator';

export function generatePDF(
  scoreResult: ScoreResult,
  recommendations: Recommendation[]
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;

  // Couleurs
  const blue = '#003E7E';
  const lightBlue = '#0073CF';

  // ===== PAGE 1: GARDE =====
  // Header avec logo (texte)
  doc.setFillColor(0, 62, 126);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('AGORIA', pageWidth / 2, 25, { align: 'center' });

  // Titre du rapport
  yPos = 70;
  doc.setTextColor(0, 62, 126);
  doc.setFontSize(24);
  doc.text('Rapport de Conformité', pageWidth / 2, yPos, { align: 'center' });

  yPos += 20;
  doc.setFontSize(16);
  doc.setTextColor(100, 100, 100);
  doc.text('Compliance Scan', pageWidth / 2, yPos, { align: 'center' });

  // Score global - Grand cercle
  yPos = 120;
  const centerX = pageWidth / 2;
  const radius = 30;

  // Cercle background
  doc.setDrawColor(230, 230, 230);
  doc.setLineWidth(8);
  doc.circle(centerX, yPos, radius, 'S');

  // Cercle score (simulé)
  const scoreColor = scoreResult.level.color;
  const [r, g, b] = hexToRgb(scoreColor);
  doc.setDrawColor(r, g, b);
  doc.setLineWidth(8);
  doc.circle(centerX, yPos, radius, 'S');

  // Score au centre
  doc.setTextColor(r, g, b);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(scoreResult.globalScore.toString(), centerX, yPos + 5, {
    align: 'center',
  });

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('/ 100', centerX, yPos + 15, { align: 'center' });

  // Niveau
  yPos = 170;
  doc.setFontSize(18);
  doc.setTextColor(r, g, b);
  doc.setFont('helvetica', 'bold');
  doc.text(scoreResult.level.label, centerX, yPos, { align: 'center' });

  // Date
  yPos = 250;
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  const today = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(`Généré le ${today}`, centerX, yPos, { align: 'center' });

  // Footer
  doc.setFontSize(8);
  doc.text(
    'Ceci est une démo académique - Projet étudiant 2025',
    centerX,
    pageHeight - 10,
    { align: 'center' }
  );

  // ===== PAGE 2: SCORES PAR MODULE =====
  doc.addPage();
  yPos = 20;

  // Titre
  doc.setTextColor(0, 62, 126);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Scores détaillés par module', 20, yPos);

  yPos += 15;

  // Description
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  const description = doc.splitTextToSize(scoreResult.level.description, pageWidth - 40);
  doc.text(description, 20, yPos);

  yPos += 20;

  // Scores des thèmes
  scoreResult.themeScores.forEach((theme) => {
    const themeColor = hexToRgb(theme.color);
    const [r, g, b] = themeColor;

    // Box pour le thème
    doc.setDrawColor(r, g, b);
    doc.setLineWidth(0.5);
    doc.setFillColor(r, g, b, 0.1);
    doc.roundedRect(20, yPos, pageWidth - 40, 30, 3, 3, 'FD');

    // Thème ID et titre
    doc.setFontSize(12);
    doc.setTextColor(r, g, b);
    doc.setFont('helvetica', 'bold');
    doc.text(`Thème: ${theme.label}`, 25, yPos + 10);

    doc.setFontSize(10);
    doc.setTextColor(0, 62, 126);
    doc.text(`${Math.round(theme.weight * 100)}% du score total`, 25, yPos + 17);

    // Score
    doc.setFontSize(24);
    doc.setTextColor(r, g, b);
    doc.setFont('helvetica', 'bold');
    doc.text(`${theme.score}/10`, pageWidth - 40, yPos + 18, { align: 'right' });

    // Barre de progression
    const barWidth = pageWidth - 40;
    const barX = 20;
    const barY = yPos + 22;
    const barHeight = 4;

    // Background
    doc.setFillColor(220, 220, 220);
    doc.roundedRect(barX, barY, barWidth, barHeight, 2, 2, 'F');

    // Progress
    doc.setFillColor(r, g, b);
    const progress = (theme.score / 10) * barWidth;
    doc.roundedRect(barX, barY, progress, barHeight, 2, 2, 'F');

    yPos += 40;
  });

  // ===== PAGE 3: RECOMMANDATIONS =====
  if (recommendations.length > 0) {
    doc.addPage();
    yPos = 20;

    doc.setTextColor(0, 62, 126);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommandations prioritaires', 20, yPos);

    yPos += 15;

    recommendations.forEach((rec, index) => {
      // Éviter débordement de page
      if (yPos > pageHeight - 60) {
        doc.addPage();
        yPos = 20;
      }

      // Numéro et titre
      doc.setFontSize(12);
      doc.setTextColor(0, 62, 126);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${rec.title}`, 20, yPos);

      yPos += 7;

      // Description
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.setFont('helvetica', 'normal');
      const recDescription = doc.splitTextToSize(rec.description, pageWidth - 40);
      doc.text(recDescription, 20, yPos);

      yPos += recDescription.length * 5 + 3;

      // Ressource
      doc.setFontSize(9);
      doc.setTextColor(0, 115, 207);
      doc.text(`Ressource: ${rec.resource}`, 20, yPos);

      yPos += 10;
    });
  }

  // ===== PAGE FINALE: CONTACT =====
  doc.addPage();
  yPos = 20;

  doc.setTextColor(0, 62, 126);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Besoin d\'accompagnement ?', 20, yPos);

  yPos += 20;

  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const contactText = [
    'Les équipes d\'Agoria sont à votre disposition pour vous accompagner',
    'dans votre démarche de conformité.',
    '',
    'Contact:',
    'Diamant Building',
    'Boulevard A. Reyers 80',
    '1030 Bruxelles',
    '',
    'Tél: +32 2 706 82 11',
    'Email: info@agoria.be',
    'Web: www.agoria.be',
  ];

  contactText.forEach((line) => {
    doc.text(line, 20, yPos);
    yPos += 7;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text(
    'Ceci est une démo académique - Projet étudiant 2025',
    pageWidth / 2,
    pageHeight - 10,
    { align: 'center' }
  );

  // Save
  doc.save(`Rapport-Compliance-Scan-${new Date().toISOString().split('T')[0]}.pdf`);
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}
