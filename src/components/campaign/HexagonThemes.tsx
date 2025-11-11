'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Theme {
  id: string;
  position: number;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  description: string;
}

interface HexagonThemesProps {
  themes: Theme[];
  interactive?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function HexagonThemes({
  themes,
  interactive = true,
  size = 'large'
}: HexagonThemesProps) {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  // Tailles selon le format
  const dimensions = {
    small: { width: 200, height: 200, viewBox: '0 0 200 200' },
    medium: { width: 300, height: 300, viewBox: '0 0 300 300' },
    large: { width: 400, height: 400, viewBox: '0 0 400 400' }
  };

  const dim = dimensions[size];
  const centerX = size === 'large' ? 200 : size === 'medium' ? 150 : 100;
  const centerY = centerX;
  const radius = size === 'large' ? 120 : size === 'medium' ? 90 : 60;

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
          {/* Gradient bleu Agoria principal */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003E7E" />
            <stop offset="100%" stopColor="#0073CF" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Pattern de fond */}
          <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/>
          </pattern>
        </defs>

        {/* Hexagone principal avec animation pulse */}
        <motion.path
          d={hexagonPath}
          fill="url(#blueGradient)"
          stroke="white"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.98, 1.02, 0.98],
            opacity: 1
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.5
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

        {/* 6 points interactifs pour chaque thème */}
        {themes.map((theme, index) => {
          const angle = (Math.PI / 3) * theme.position - Math.PI / 2;
          const iconRadius = radius * 0.7;
          const iconX = centerX + iconRadius * Math.cos(angle);
          const iconY = centerY + iconRadius * Math.sin(angle);

          return (
            <g key={theme.id}>
              {/* Zone interactive */}
              {interactive && (
                <motion.circle
                  cx={iconX}
                  cy={iconY}
                  r={size === 'large' ? 20 : size === 'medium' ? 15 : 10}
                  fill={activeTheme === theme.id ? theme.color : 'white'}
                  stroke={theme.color}
                  strokeWidth="2"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setActiveTheme(theme.id)}
                  onMouseLeave={() => setActiveTheme(null)}
                />
              )}

              {/* Icône du thème */}
              <text
                x={iconX}
                y={iconY}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={size === 'large' ? 20 : size === 'medium' ? 16 : 12}
                className="pointer-events-none"
              >
                {theme.icon}
              </text>
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

      {/* Labels autour de l'hexagone */}
      {size === 'large' && (
        <div className="absolute inset-0 pointer-events-none">
          {themes.map((theme) => {
            const pos = labelPositions[theme.position];
            const isActive = activeTheme === theme.id;

            return (
              <motion.div
                key={`label-${theme.id}`}
                className="absolute"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: pos.align as any,
                  minWidth: '120px'
                }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  opacity: isActive ? 1 : 0.8
                }}
              >
                <div
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: isActive ? theme.color : '#f5f5f5',
                    color: isActive ? 'white' : '#424242',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {theme.shortTitle}
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-gray-600 mt-1 max-w-[150px]"
                  >
                    {theme.description}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
