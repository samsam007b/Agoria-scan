'use client';

import { useState, useEffect } from 'react';
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
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  onThemeClick?: (themeId: string) => void;
  glassEffect?: boolean;
}

export default function HexagonThemes({
  themes,
  interactive = true,
  size = 'large',
  onThemeClick,
  glassEffect = false
}: HexagonThemesProps) {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tailles selon le format
  const dimensions = {
    small: { width: 200, height: 200, viewBox: '0 0 200 200' },
    medium: { width: 450, height: 450, viewBox: '0 0 450 450' },
    large: { width: 600, height: 600, viewBox: '0 0 600 600' },
    xlarge: { width: 800, height: 800, viewBox: '0 0 800 800' },
    xxlarge: { width: 900, height: 900, viewBox: '0 0 900 900' }
  };

  const dim = dimensions[size];
  const centerX = size === 'xxlarge' ? 450 : size === 'xlarge' ? 400 : size === 'large' ? 300 : size === 'medium' ? 225 : 100;
  const centerY = centerX;
  const radius = size === 'xxlarge' ? 300 : size === 'xlarge' ? 260 : size === 'large' ? 200 : size === 'medium' ? 145 : 60;

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

  // Fonction pour calculer la rotation nécessaire
  const calculateRotation = (themePosition: number) => {
    // Position 0 = top (0°)
    // Chaque position = 60° (360° / 6)
    const baseAngle = themePosition * 60;

    if (isMobile) {
      // Sur mobile : pointer vers le bas (180°)
      // Donc on veut que l'icône soit en bas → rotation pour que position actuelle aille en bas
      return 180 - baseAngle;
    } else {
      // Sur desktop : pointer vers la droite (90°)
      // Donc on veut que l'icône soit à droite → rotation pour que position actuelle aille à droite
      return 90 - baseAngle;
    }
  };

  // Handler de click sur un thème
  const handleThemeClick = (theme: Theme) => {
    const newRotation = calculateRotation(theme.position);
    setRotation(newRotation);

    // Appeler le callback parent
    onThemeClick?.(theme.id);

    // Sur mobile, scroll vers la carte en dessous après une courte pause
    if (isMobile) {
      setTimeout(() => {
        // Trouver l'élément parent qui contient l'hexagone et la carte
        const hexagonContainer = document.querySelector('.hexagon-container');
        if (hexagonContainer) {
          const parentSection = hexagonContainer.closest('section');
          if (parentSection) {
            // Calculer la position du bas de l'hexagone
            const hexagonRect = hexagonContainer.getBoundingClientRect();
            const scrollTarget = window.scrollY + hexagonRect.bottom + 20; // +20px de marge

            window.scrollTo({
              top: scrollTarget,
              behavior: 'smooth'
            });
          }
        }
      }, 400); // Attendre que la rotation commence
    }
  };

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
      <motion.svg
        viewBox={dim.viewBox}
        className="w-full h-full"
        animate={{ rotate: rotation }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center center' }}
      >
        {/* Hexagone principal avec glassmorphism si activé */}
        <defs>
          {glassEffect && (
            <filter id="glass-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          )}
        </defs>
        <path
          d={hexagonPath}
          fill={glassEffect ? "rgba(255, 255, 255, 0.15)" : "transparent"}
          stroke={glassEffect ? "rgba(255, 255, 255, 0.3)" : "#1C32FF"}
          strokeWidth="3"
          style={glassEffect ? { backdropFilter: 'blur(12px)' } : undefined}
        />

        {/* Dividers entre les 6 segments */}
        {hexagonPoints.map((point, i) => (
          <line
            key={`divider-${i}`}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke={glassEffect ? "rgba(255, 255, 255, 0.25)" : "#1C32FF"}
            strokeWidth="2"
            opacity={glassEffect ? "0.6" : "0.4"}
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
          const iconSize = size === 'xxlarge' ? 48 : size === 'xlarge' ? 42 : size === 'large' ? 34 : size === 'medium' ? 26 : 16;

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
                  fill={isActive ? (glassEffect ? 'rgba(255, 255, 255, 0.25)' : 'rgba(28, 50, 255, 0.15)') : 'transparent'}
                  className="cursor-pointer transition-all duration-300 touch-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  onMouseEnter={() => setActiveTheme(theme.id)}
                  onMouseLeave={() => setActiveTheme(null)}
                  onTouchStart={() => setActiveTheme(theme.id)}
                  onTouchEnd={() => {
                    setTimeout(() => setActiveTheme(null), 300);
                    handleThemeClick(theme);
                  }}
                  onClick={() => handleThemeClick(theme)}
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
                      className={glassEffect ? "text-white drop-shadow-lg" : "text-[#1C32FF] drop-shadow-lg"}
                      strokeWidth={2}
                    />
                  ) : typeof theme.icon === 'string' ? (
                    <span className={glassEffect ? "text-white text-xl" : "text-[#1C32FF] text-xl"}>{theme.icon}</span>
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

        {/* Texte central retiré - uniquement les icônes restent */}
      </motion.svg>

    </div>
  );
}
