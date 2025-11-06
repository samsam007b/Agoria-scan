import { Shield, Briefcase, Lock } from 'lucide-react';

interface Option {
  key: string;
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
  onSelect: (optionKey: string, score: number) => void;
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
  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'A':
        return Shield;
      case 'B':
        return Briefcase;
      case 'C':
        return Lock;
      default:
        return Shield;
    }
  };

  const IconComponent = getModuleIcon(moduleId);

  return (
    <div className="card-agoria p-8">
      {/* Module Badge */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3"
          style={{ backgroundColor: moduleColor }}
        >
          <IconComponent className="text-white" size={24} />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#6B6B6B] uppercase">
            Module {moduleId}
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
        {options.map((option) => {
          const isSelected = selectedOption === option.key;
          return (
            <button
              key={option.key}
              onClick={() => onSelect(option.key, option.score)}
              className={`w-full text-left p-4 border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-[#1C32FF] bg-[#F5F7FA] shadow-sm'
                  : 'border-gray-200 hover:border-[#1C32FF] hover:bg-[#F5F7FA]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-[#1C32FF] bg-[#1C32FF]'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 bg-white" />
                  )}
                </div>
                <div className="flex-1">
                  <span
                    className={`font-semibold ${
                      isSelected ? 'text-[#1C32FF]' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {option.key}.
                  </span>{' '}
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
