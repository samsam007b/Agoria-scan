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
  selectedOption,
  onSelect,
}: QuestionCardProps) {

  return (
    <div className="card-agoria p-4 sm:p-6 md:p-8">
      {/* Theme Badge */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: moduleColor }}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/30"></div>
        </div>
        <div>
          <div className="text-xs sm:text-sm font-semibold text-[#6B6B6B] uppercase">
            Thème
          </div>
          <div className="text-xs sm:text-sm font-bold" style={{ color: moduleColor }}>
            {moduleLabel}
          </div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 sm:mb-6 leading-snug">
        {questionLabel}
      </h2>

      {/* Options */}
      <div className="space-y-2.5 sm:space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === option.label;
          return (
            <button
              key={`${questionId}-opt-${index}`}
              onClick={() => onSelect(option.label, option.score)}
              className={`w-full text-left p-3.5 sm:p-4 border-2 transition-all duration-200 active:scale-[0.98] ${
                isSelected
                  ? 'bg-[#F5F7FA] shadow-sm'
                  : 'border-gray-200 hover:bg-[#F5F7FA] active:bg-[#F5F7FA]'
              }`}
              style={{
                borderColor: isSelected ? moduleColor : undefined,
                borderWidth: isSelected ? '2px' : '2px',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-full flex items-center justify-center transition-all flex-shrink-0`}
                  style={{
                    borderColor: isSelected ? moduleColor : '#D1D5DB',
                    backgroundColor: isSelected ? moduleColor : 'transparent'
                  }}
                >
                  {isSelected && (
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-sm sm:text-base ${
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
