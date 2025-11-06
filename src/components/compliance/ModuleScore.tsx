import { Shield, Briefcase, Lock } from 'lucide-react';

interface ModuleScoreProps {
  id: string;
  label: string;
  score: number;
  color: string;
  weight: number;
}

export default function ModuleScore({ id, label, score, color, weight }: ModuleScoreProps) {
  const getIcon = (id: string) => {
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

  const IconComponent = getIcon(id);
  const percentage = score * 10; // Score sur 100 (0-10 -> 0-100%)

  return (
    <div className="relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-t-4 overflow-hidden group transform hover:-translate-y-2" style={{ borderColor: color }}>
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16 transition-opacity group-hover:opacity-10" style={{ backgroundColor: color }}></div>

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-4 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: color }}>
              <IconComponent className="text-white" size={28} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wide mb-1">
                Module {id} • {Math.round(weight * 100)}%
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">{label}</h3>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold leading-none" style={{ color }}>
              {score.toFixed(1)}
            </div>
            <div className="text-xs text-[#6B6B6B] mt-1">/ 10</div>
          </div>
        </div>

        {/* Progress bar with glow effect */}
        <div className="relative">
          <div className="w-full bg-[#F5F7FA] h-3 overflow-hidden rounded-full">
            <div
              className="h-full transition-all duration-1000 ease-out rounded-full relative overflow-hidden"
              style={{
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-[#1A1A1A] font-semibold">
              {percentage.toFixed(1)}% de conformité
            </span>
            <span className="text-xs text-[#6B6B6B] font-medium">
              {percentage >= 70 ? '✓ Bon' : percentage >= 40 ? '⚠ Moyen' : '✗ Faible'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
