interface Option {
  label: string;
  score: number;
}

interface QuestionCardProps {
  questionId: string;
  questionLabel: string;
  options: Option[];
  moduleId: string;
  moduleLabel: string;
  moduleColor: string;
  moduleIcon?: string; // Emoji icon
  selectedOption?: string;
  onSelect: (optionLabel: string, score: number) => void;
}

export default function QuestionCard({
  questionId,
  questionLabel,
  options,
  moduleId,
  moduleLabel,
  moduleColor,
  moduleIcon,
  selectedOption,
  onSelect,
}: QuestionCardProps) {

  return (
    <div className="card-agoria p-8">
      {/* Theme Badge */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3 text-3xl flex items-center justify-center"
          style={{
            backgroundColor: `${moduleColor}20`,
            border: `2px solid ${moduleColor}`
          }}
        >
          {moduleIcon || '📋'}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#6B6B6B] uppercase">
            Thème
          </div>
          <div className="text-sm font-bold" style={{ color: moduleColor }}>
            {moduleLabel}
          </div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 leading-snug">
        {questionLabel}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === option.label;
          return (
            <button
              key={`${questionId}-opt-${index}`}
              onClick={() => onSelect(option.label, option.score)}
              className={`w-full text-left p-4 border-2 transition-all duration-200 ${
                isSelected
                  ? 'bg-[#F5F7FA] shadow-sm'
                  : 'border-gray-200 hover:bg-[#F5F7FA]'
              }`}
              style={{
                borderColor: isSelected ? moduleColor : undefined,
                borderWidth: isSelected ? '2px' : '2px'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all`}
                  style={{
                    borderColor: isSelected ? moduleColor : '#D1D5DB',
                    backgroundColor: isSelected ? moduleColor : 'transparent'
                  }}
                >
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <span
                    className={`${
                      isSelected ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {option.label}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
