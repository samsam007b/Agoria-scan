'use client';

interface ScoreGaugeProps {
  score: number;
  color: string;
  label: string;
  size?: 'small' | 'large';
}

export default function ScoreGauge({ score, color, label, size = 'large' }: ScoreGaugeProps) {
  const radius = size === 'large' ? 80 : 60;
  const strokeWidth = size === 'large' ? 12 : 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const sizeClass = size === 'large' ? 'w-48 h-48' : 'w-32 h-32';
  const textSize = size === 'large' ? 'text-4xl' : 'text-2xl';

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
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
          {/* Progress circle */}
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s ease-in-out',
            }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${textSize} font-bold`} style={{ color }}>
            {score}
          </span>
          <span className="text-sm text-gray-500 font-semibold">/ 100</span>
        </div>
      </div>
      <p className="mt-4 text-center font-bold text-lg text-gray-700">{label}</p>
    </div>
  );
}
