'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Download, AlertCircle, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { calculateScores, generateRecommendations, type Answer } from '@/utils/scoreCalculator';
import { generatePDF } from '@/utils/pdfGenerator';
import ScoreGauge from '@/components/compliance/ScoreGauge';
import ModuleScore from '@/components/compliance/ModuleScore';

export default function ResultatsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [scoreResult, setScoreResult] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    // Load answers from sessionStorage
    const savedAnswers = sessionStorage.getItem('compliance-answers');

    if (!savedAnswers) {
      // No answers, redirect to start
      router.push('/compliance-scan');
      return;
    }

    const answers: Answer[] = JSON.parse(savedAnswers);

    // Calculate scores
    const result = calculateScores(answers);
    setScoreResult(result);

    // Generate recommendations
    const recs = generateRecommendations(answers);
    setRecommendations(recs);

    setLoading(false);
  }, [router]);

  const handleDownloadPDF = () => {
    if (scoreResult && recommendations) {
      generatePDF(scoreResult, recommendations);
    }
  };

  const handleRestart = () => {
    sessionStorage.removeItem('compliance-answers');
    router.push('/compliance-scan');
  };

  if (loading || !scoreResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-b-2 border-[#0073CF] mx-auto mb-4"></div>
          <p className="text-gray-600">Calcul de vos résultats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#1C32FF] animate-pulse"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] bg-clip-text text-transparent">
              Vos Résultats
            </h1>
            <div className="w-2 h-2 bg-[#1C32FF] animate-pulse"></div>
          </div>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            Voici votre évaluation de conformité détaillée
          </p>
        </div>

        {/* Score Global */}
        <section className="relative bg-white shadow-2xl p-6 sm:p-8 md:p-12 mb-8 overflow-hidden border-t-4 border-[#1C32FF]">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1C32FF]/5 to-transparent rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#00D084]/5 to-transparent rounded-full -ml-24 -mb-24"></div>

          <div className="relative flex flex-col items-center">
            <ScoreGauge
              score={scoreResult.globalScore}
              color={scoreResult.level.color}
              label="Score Global"
            />
            <div className="mt-6 sm:mt-8 text-center max-w-2xl">
              <div className="inline-block px-6 py-2 rounded-full mb-4" style={{ backgroundColor: `${scoreResult.level.color}20` }}>
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: scoreResult.level.color }}
                >
                  {scoreResult.level.label}
                </h2>
              </div>
              <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed">{scoreResult.level.description}</p>
            </div>
          </div>
        </section>

        {/* Scores par Module */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">Détail par module</h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {scoreResult.moduleScores.map((module: any, index: number) => (
              <div
                key={module.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ModuleScore
                  id={module.id}
                  label={module.label}
                  score={module.score}
                  color={module.color}
                  weight={module.weight}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Recommandations */}
        {recommendations.length > 0 && (
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Recommandations prioritaires
              </h2>
              <div className="w-3 h-3 bg-[#FF6B35]"></div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {recommendations.map((rec, index) => {
                type Priority = 'high' | 'medium' | 'low';

                const priorityColors: Record<Priority, string> = {
                  high: 'border-l-[#D32F2F] bg-gradient-to-r from-red-50 to-white',
                  medium: 'border-l-[#FF6B35] bg-gradient-to-r from-orange-50 to-white',
                  low: 'border-l-[#1C32FF] bg-gradient-to-r from-blue-50 to-white',
                };
                const priorityIcons: Record<Priority, typeof AlertCircle> = {
                  high: AlertCircle,
                  medium: AlertCircle,
                  low: CheckCircle2,
                };
                const priorityLabels: Record<Priority, string> = {
                  high: 'Priorité haute',
                  medium: 'Priorité moyenne',
                  low: 'Priorité basse',
                };
                const priorityBadgeColors: Record<Priority, string> = {
                  high: 'bg-[#D32F2F] text-white',
                  medium: 'bg-[#FF6B35] text-white',
                  low: 'bg-[#1C32FF] text-white',
                };

                const priority = rec.priority as Priority;
                const Icon = priorityIcons[priority];
                const colorClass = priorityColors[priority];
                const badgeColor = priorityBadgeColors[priority];

                return (
                  <div
                    key={index}
                    className={`bg-white border-l-4 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${colorClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-white shadow-md">
                        <Icon className="text-[#1A1A1A]" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${badgeColor}`}>
                            {priorityLabels[priority]}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">
                          {rec.title}
                        </h3>
                        <p className="text-[#6B6B6B] mb-4 leading-relaxed">{rec.description}</p>
                        <div className="flex items-center gap-2 text-sm bg-[#F5F7FA] px-4 py-2 rounded-full inline-flex">
                          <span className="text-[#6B6B6B] font-medium">Ressource:</span>
                          <span className="text-[#1C32FF] font-semibold">
                            {rec.resource}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTAs */}
        <section className="relative bg-gradient-to-br from-[#1C32FF] via-[#0D1A99] to-[#1C32FF] shadow-2xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

          <div className="relative">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Et maintenant ?
              </h2>
              <p className="text-base sm:text-lg text-white/90">
                Téléchargez votre rapport complet ou contactez-nous pour être accompagné
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#ff5520] text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
              >
                <Download size={20} />
                Télécharger le rapport PDF
              </button>

              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 bg-white text-[#1C32FF] font-bold px-8 py-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                <RotateCcw size={20} />
                Recommencer l'évaluation
              </button>
            </div>

            <div className="text-center">
              <a
                href="mailto:info@agoria.be"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors group"
              >
                Être contacté par un conseiller Agoria
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Note pédagogique */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Les résultats de cette auto-évaluation sont indicatifs et confidentiels.
            <br />
            Pour un audit complet, contactez les équipes Agoria.
          </p>
        </div>
      </div>
    </div>
  );
}
