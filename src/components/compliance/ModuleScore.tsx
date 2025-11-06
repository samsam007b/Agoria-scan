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
    <div className="card-agoria border-l-4" style={{ borderColor: color }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg" style={{ backgroundColor: color }}>
            <IconComponent className="text-white" size={24} />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#6B6B6B] uppercase">
              Module {id} • {Math.round(weight * 100)}%
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A]">{label}</h3>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold" style={{ color }}>
            {score}
          </div>
          <div className="text-sm text-[#6B6B6B]">/ 10</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="w-full bg-[#F5F7FA] rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </div>
        <div className="mt-2 text-sm text-[#1A1A1A] font-medium">
          {percentage}% de conformité
        </div>
      </div>
    </div>
  );
}
