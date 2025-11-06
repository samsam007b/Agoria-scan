interface ProgressBarProps {
  current: number;
  total: number;
  moduleColor?: string;
}

export default function ProgressBar({ current, total, moduleColor = '#1C32FF' }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-[#1A1A1A]">
          Question {current} sur {total}
        </span>
        <span className="text-sm font-semibold text-[#1C32FF]">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-[#F5F7FA] rounded-full h-2 overflow-hidden">
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
