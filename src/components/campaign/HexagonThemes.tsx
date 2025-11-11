'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Theme {
  id: string;
  position: number;
  title: string;
  shortTitle: string;
  icon: string | LucideIcon; // Support emoji ou Lucide icon
  color: string;
  description: string;
}

interface HexagonThemesProps {
  themes: Theme[];
  interactive?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  onThemeClick?: (themeId: string) => void;
}

export default function HexagonThemes({
  themes,
  interactive = true,
  size = 'large',
  onThemeClick
}: HexagonThemesProps) {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  // Tailles selon le format
  const dimensions = {
    small: { width: 200, height: 200, viewBox: '0 0 200 200' },
    medium: { width: 300, height: 300, viewBox: '0 0 300 300' },
    large: { width: 400, height: 400, viewBox: '0 0 400 400' },
    xlarge: { width: 550, height: 550, viewBox: '0 0 550 550' }
  };

  const dim = dimensions[size];
  const centerX = size === 'xlarge' ? 275 : size === 'large' ? 200 : size === 'medium' ? 150 : 100;
  const centerY = centerX;
  const radius = size === 'xlarge' ? 180 : size === 'large' ? 120 : size === 'medium' ? 90 : 60;

  // Calcul des points de l'hexagone
  const hexagonPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2; // Start from top
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  const hexagonPath = hexagonPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`)
    .join(' ') + ' Z';

  // Positions des labels autour de l'hexagone
  const labelPositions = [
    { x: centerX, y: centerY - radius - 30, align: 'center' }, // top
    { x: centerX + radius + 30, y: centerY - radius / 2, align: 'left' }, // top-right
    { x: centerX + radius + 30, y: centerY + radius / 2, align: 'left' }, // bottom-right
    { x: centerX, y: centerY + radius + 30, align: 'center' }, // bottom
    { x: centerX - radius - 30, y: centerY + radius / 2, align: 'right' }, // bottom-left
    { x: centerX - radius - 30, y: centerY - radius / 2, align: 'right' } // top-left
  ];

  return (
    <div className="hexagon-container relative" style={{ width: dim.width, height: dim.height }}>
      <svg viewBox={dim.viewBox} className="w-full h-full">
        {/* Hexagone principal statique */}
        <path
          d={hexagonPath}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="2"
        />

        {/* Dividers entre les 6 segments */}
        {hexagonPoints.map((point, i) => (
          <line
            key={`divider-${i}`}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* 6 segments interactifs pour chaque thème */}
        {themes.map((theme, index) => {
          // Définition du segment : entre divider N et divider N+1
          const angleStart = (Math.PI / 3) * theme.position - Math.PI / 2;
          const angleEnd = angleStart + Math.PI / 3;

          // Icône au centre du camembert (pas sur la ligne de division)
          const iconAngle = (angleStart + angleEnd) / 2;
          const iconRadius = radius * 0.7;
          const iconX = centerX + iconRadius * Math.cos(iconAngle);
          const iconY = centerY + iconRadius * Math.sin(iconAngle);

          const isActive = activeTheme === theme.id;
          const IconComponent = typeof theme.icon !== 'string' ? theme.icon : null;
          const iconSize = size === 'xlarge' ? 32 : size === 'large' ? 24 : size === 'medium' ? 20 : 16;

          return (
            <g key={theme.id}>
              {/* Segment cliquable (camembert complet du centre au bord) */}
              {interactive && (
                <motion.path
                  d={(() => {
                    // Segment complet : du centre aux bords de l'hexagone
                    const x1 = centerX;
                    const y1 = centerY;
                    const x2 = centerX + radius * Math.cos(angleStart);
                    const y2 = centerY + radius * Math.sin(angleStart);
                    const x3 = centerX + radius * Math.cos(angleEnd);
                    const y3 = centerY + radius * Math.sin(angleEnd);

                    return `M ${x1},${y1} L ${x2},${y2} A ${radius},${radius} 0 0,1 ${x3},${y3} Z`;
                  })()}
                  fill={isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveTheme(theme.id)}
                  onMouseLeave={() => setActiveTheme(null)}
                  onClick={() => onThemeClick?.(theme.id)}
                />
              )}

              {/* Icône Lucide minimaliste */}
              <foreignObject
                x={iconX - iconSize / 2}
                y={iconY - iconSize / 2}
                width={iconSize}
                height={iconSize}
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center w-full h-full">
                  {IconComponent ? (
                    <IconComponent
                      size={iconSize}
                      className="text-white drop-shadow-lg"
                      strokeWidth={1.5}
                    />
                  ) : typeof theme.icon === 'string' ? (
                    <span className="text-white text-xl">{theme.icon}</span>
                  ) : null}
                </div>
              </foreignObject>

              {/* Nom de la thématique au hover */}
              {isActive && (
                <motion.foreignObject
                  x={iconX - 60}
                  y={iconY + iconSize / 2 + 10}
                  width={120}
                  height={40}
                  className="pointer-events-none"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="bg-white text-[#1A1A1A] text-xs font-bold px-3 py-1.5 shadow-lg text-center rounded-sm">
                      {theme.shortTitle}
                    </div>
                  </div>
                </motion.foreignObject>
              )}
            </g>
          );
        })}

        {/* Texte central "Compliance Hub" */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size === 'xlarge' ? 22 : size === 'large' ? 18 : size === 'medium' ? 14 : 10}
          fontWeight="bold"
          fill="white"
          className="uppercase tracking-wider"
        >
          {size !== 'small' && 'Compliance'}
        </text>
        <text
          x={centerX}
          y={centerY + (size === 'xlarge' ? 26 : size === 'large' ? 20 : size === 'medium' ? 16 : 12)}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size === 'xlarge' ? 28 : size === 'large' ? 24 : size === 'medium' ? 18 : 14}
          fontWeight="bold"
          fill="white"
          className="uppercase"
        >
          {size !== 'small' && 'HUB'}
        </text>
      </svg>

    </div>
  );
}
