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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0073CF] mx-auto mb-4"></div>
          <p className="text-gray-600">Calcul de vos résultats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003E7E] mb-4">
            Vos Résultats
          </h1>
          <p className="text-lg text-gray-600">
            Voici votre évaluation de conformité détaillée
          </p>
        </div>

        {/* Score Global */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <div className="flex flex-col items-center">
            <ScoreGauge
              score={scoreResult.globalScore}
              color={scoreResult.level.color}
              label="Score Global"
            />
            <div className="mt-6 text-center max-w-2xl">
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: scoreResult.level.color }}
              >
                {scoreResult.level.label}
              </h2>
              <p className="text-gray-700 text-lg">{scoreResult.level.description}</p>
            </div>
          </div>
        </section>

        {/* Scores par Module */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003E7E] mb-6">Détail par module</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {scoreResult.moduleScores.map((module: any) => (
              <ModuleScore
                key={module.id}
                id={module.id}
                label={module.label}
                score={module.score}
                color={module.color}
                weight={module.weight}
              />
            ))}
          </div>
        </section>

        {/* Recommandations */}
        {recommendations.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003E7E] mb-6">
              Recommandations prioritaires
            </h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                type Priority = 'high' | 'medium' | 'low';

                const priorityColors: Record<Priority, string> = {
                  high: 'border-[#D32F2F] bg-red-50',
                  medium: 'border-[#FF6B35] bg-orange-50',
                  low: 'border-[#0073CF] bg-blue-50',
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

                const priority = rec.priority as Priority;
                const Icon = priorityIcons[priority];
                const colorClass = priorityColors[priority];

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-lg border-l-4 p-6 shadow-md ${colorClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="text-[#003E7E]" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-gray-500 uppercase">
                            {priorityLabels[priority]}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#003E7E] mb-2">
                          {rec.title}
                        </h3>
                        <p className="text-gray-700 mb-3">{rec.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-600">Ressource:</span>
                          <span className="text-[#0073CF] font-semibold">
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
        <section className="bg-gradient-to-br from-[#003E7E] to-[#0073CF] rounded-xl shadow-lg p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Et maintenant ?
            </h2>
            <p className="text-blue-100">
              Téléchargez votre rapport complet ou contactez-nous pour être accompagné
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#ff5520] text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Download size={20} />
              Télécharger le rapport PDF
            </button>

            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 bg-white text-[#003E7E] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all"
            >
              <RotateCcw size={20} />
              Recommencer l'évaluation
            </button>
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:info@agoria.be"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white underline transition-colors"
            >
              Être contacté par un conseiller Agoria
              <ArrowRight size={16} />
            </a>
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
