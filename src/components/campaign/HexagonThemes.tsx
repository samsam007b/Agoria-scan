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
        <defs>
          {/* Gradient bleu Agoria - version sombre */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D1A99" />
            <stop offset="50%" stopColor="#060D4D" />
            <stop offset="100%" stopColor="#0D1A99" />
          </linearGradient>

          {/* Glow effect tech */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Pattern de fond tech */}
          <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="white" opacity="0.15"/>
          </pattern>
        </defs>

        {/* Hexagone principal avec animation tech */}
        <motion.path
          d={hexagonPath}
          fill="url(#blueGradient)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ scale: 0.95, opacity: 0, rotate: -5 }}
          animate={{
            scale: [0.98, 1.01, 0.98],
            opacity: 1,
            rotate: [0, 2, 0]
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            },
            rotate: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.6
            }
          }}
          className="drop-shadow-2xl"
        />

        {/* Pattern overlay */}
        <path
          d={hexagonPath}
          fill="url(#hexPattern)"
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

          // Animation du segment au hover
          const outerRadius = isActive ? radius * 1.1 : radius;
          const innerRadius = radius * 0.4;

          return (
            <g key={theme.id}>
              {/* Segment cliquable avec effet zoom */}
              {interactive && (
                <motion.path
                  d={(() => {
                    const x1 = centerX + innerRadius * Math.cos(angleStart);
                    const y1 = centerY + innerRadius * Math.sin(angleStart);
                    const x2 = centerX + outerRadius * Math.cos(angleStart);
                    const y2 = centerY + outerRadius * Math.sin(angleStart);
                    const x3 = centerX + outerRadius * Math.cos(angleEnd);
                    const y3 = centerY + outerRadius * Math.sin(angleEnd);
                    const x4 = centerX + innerRadius * Math.cos(angleEnd);
                    const y4 = centerY + innerRadius * Math.sin(angleEnd);

                    return `M ${x1},${y1} L ${x2},${y2} A ${outerRadius},${outerRadius} 0 0,1 ${x3},${y3} L ${x4},${y4} A ${innerRadius},${innerRadius} 0 0,0 ${x1},${y1} Z`;
                  })()}
                  fill={isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent'}
                  className="cursor-pointer"
                  animate={{
                    fill: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                  }}
                  transition={{ duration: 0.3 }}
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
          fontSize={size === 'large' ? 18 : size === 'medium' ? 14 : 10}
          fontWeight="bold"
          fill="white"
          className="uppercase tracking-wider"
        >
          {size !== 'small' && 'Compliance'}
        </text>
        <text
          x={centerX}
          y={centerY + (size === 'large' ? 20 : size === 'medium' ? 16 : 12)}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size === 'large' ? 24 : size === 'medium' ? 18 : 14}
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
