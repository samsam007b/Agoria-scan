interface ProgressBarProps {
  current: number;
  total: number;
  moduleColor?: string;
}

export default function ProgressBar({ current, total, moduleColor = '#0073CF' }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">
          Question {current} sur {total}
        </span>
        <span className="text-sm font-semibold text-gray-700">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: moduleColor,
          }}
        />
      </div>
    </div>
  );
}
