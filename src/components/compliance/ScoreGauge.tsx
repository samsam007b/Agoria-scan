'use client';

interface ScoreGaugeProps {
  score: number;
  color: string;
  label: string;
  size?: 'small' | 'large';
}

export default function ScoreGauge({ score, color, label, size = 'large' }: ScoreGaugeProps) {
  const radius = size === 'large' ? 90 : 60;
  const strokeWidth = size === 'large' ? 14 : 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const sizeClass = size === 'large' ? 'w-52 h-52 sm:w-56 sm:h-56' : 'w-32 h-32';
  const textSize = size === 'large' ? 'text-5xl sm:text-6xl' : 'text-2xl';

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass} group`}>
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full opacity-20 blur-xl animate-pulse" style={{ backgroundColor: color }}></div>

        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90 relative z-10"
        >
          {/* Background circle */}
          <circle
            stroke="#E5E7EB"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress circle with gradient */}
          <defs>
            <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={color} stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle
            stroke={`url(#gradient-${label})`}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: 'url(#glow)',
            }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Score text with animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <span className={`${textSize} font-bold leading-none animate-scale-in`} style={{ color }}>
            {score}
          </span>
          <span className="text-xs sm:text-sm text-[#6B6B6B] font-semibold mt-1">/ 100</span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="font-bold text-lg sm:text-xl text-[#1A1A1A]">{label}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
          <span className="text-sm text-[#6B6B6B]">Évaluation complétée</span>
        </div>
      </div>
    </div>
  );
}
