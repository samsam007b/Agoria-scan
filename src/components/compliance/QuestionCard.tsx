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
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Module Badge */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${moduleColor}20` }}
        >
          <IconComponent style={{ color: moduleColor }} size={24} />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-500 uppercase">
            Module {moduleId}
          </div>
          <div className="text-sm font-bold" style={{ color: moduleColor }}>
            {moduleLabel}
          </div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-[#003E7E] mb-6 leading-snug">
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
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-[#0073CF] bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-[#0073CF] hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-[#0073CF] bg-[#0073CF]'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <span
                    className={`font-semibold ${
                      isSelected ? 'text-[#0073CF]' : 'text-gray-700'
                    }`}
                  >
                    {option.key}.
                  </span>{' '}
                  <span
                    className={`${
                      isSelected ? 'text-[#003E7E] font-semibold' : 'text-gray-700'
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
