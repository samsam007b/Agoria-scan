'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Shield, CheckCircle, FileText, Clock, Leaf, Users, DollarSign, Cpu, Settings, LucideIcon } from 'lucide-react';
import { complianceThemes } from '@/data/complianceThemes';

// Mapping des icônes Lucide pour les thèmes
const themeIcons: Record<string, LucideIcon> = {
  'data-protection': Shield,
  'environmental': Leaf,
  'social-hr': Users,
  'financial': DollarSign,
  'digital-ai': Cpu,
  'industrial': Settings,
};

export default function ComplianceScanLanding() {
  const router = useRouter();
  const [acceptedRGPD, setAcceptedRGPD] = useState(false);

  const handleStart = () => {
    if (!acceptedRGPD) {
      alert('Veuillez accepter la clause de confidentialité pour continuer.');
      return;
    }
    router.push('/compliance-scan/questions');
  };

  // Compter le nombre total de questions
  const totalQuestions = complianceThemes.reduce((sum, theme) => sum + theme.questions.length, 0);

  return (
    <div className="bg-white">
      {/* Hero Section - Style simple et épuré */}
      <section className="relative bg-[#060D4D] py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Pattern de fond subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre centré */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Compliance Scan
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Évaluez votre niveau de conformité en <strong>5 minutes</strong>
            </p>
          </div>

          {/* Stats en ligne */}
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 mb-10 sm:mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{totalQuestions}</div>
              <div className="text-sm sm:text-base text-white/70">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">6</div>
              <div className="text-sm sm:text-base text-white/70">Thèmes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">5 min</div>
              <div className="text-sm sm:text-base text-white/70">Durée</div>
            </div>
          </div>

          {/* CTA Card centrée */}
          <div className="bg-white shadow-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] text-center mb-6">
              Commencez maintenant
            </h2>

            {/* Checkbox RGPD */}
            <div className="bg-[#F5F7FA] border-2 border-gray-200 p-5 sm:p-6 mb-6">
              <label className="flex items-start cursor-pointer group">
                <input
                  type="checkbox"
                  checked={acceptedRGPD}
                  onChange={(e) => setAcceptedRGPD(e.target.checked)}
                  className="mt-1 mr-4 w-5 h-5 flex-shrink-0 text-[#1C32FF] border-gray-300 focus:ring-[#1C32FF] cursor-pointer"
                />
                <span className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed">
                  J'accepte que mes réponses soient traitées de manière <strong>anonyme et confidentielle</strong> dans
                  le cadre de cette auto-évaluation. Aucune donnée personnelle n'est collectée.
                </span>
              </label>
            </div>

            {/* Bouton CTA */}
            <button
              onClick={handleStart}
              disabled={!acceptedRGPD}
              className={`w-full btn-agoria-primary inline-flex items-center justify-center gap-3 text-lg py-4 ${
                !acceptedRGPD ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              DÉMARRER L'ÉVALUATION
              <ArrowRight size={22} />
            </button>

            {!acceptedRGPD && (
              <p className="text-xs text-[#6B6B6B] text-center mt-3">
                Veuillez accepter la clause de confidentialité pour continuer
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Section Thèmes - Grid des 6 domaines */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              6 domaines de conformité évalués
            </h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceThemes.map((theme) => {
              const IconComponent = themeIcons[theme.id] || Shield;
              return (
                <div
                  key={theme.id}
                  className="bg-white border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* En-tête avec indicateur et poids */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: theme.color }}
                    >
                      <IconComponent className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#6B6B6B] uppercase">Poids</div>
                    <div className="text-lg font-bold" style={{ color: theme.color }}>
                      {Math.round(theme.weight * 100)}%
                    </div>
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight">
                  {theme.shortTitle}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
                  {theme.description}
                </p>

                {/* Points clés */}
                <div className="space-y-2 mb-4">
                  {theme.keyPoints.slice(0, 3).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 mt-2 flex-shrink-0" style={{ backgroundColor: theme.color }}></div>
                      <span className="text-xs text-[#1A1A1A] leading-tight">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Footer avec nombre de questions */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs text-[#6B6B6B]">
                    {theme.questions.length} questions
                  </span>
                  <span className="text-xs font-semibold" style={{ color: theme.color }}>
                    {theme.stat}
                  </span>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Ce que vous obtenez
            </h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Rapide et simple',
                description: 'Complétez l\'évaluation en 5 minutes chrono'
              },
              {
                icon: CheckCircle,
                title: 'Score détaillé',
                description: 'Score global et par domaine de conformité'
              },
              {
                icon: FileText,
                title: 'Recommandations',
                description: 'Actions prioritaires personnalisées'
              },
              {
                icon: FileText,
                title: 'Rapport PDF',
                description: 'Téléchargez votre diagnostic complet'
              },
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-[#F5F7FA] hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-[#1C32FF] transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#1C32FF] flex items-center justify-center">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action final */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1C32FF] to-[#0D1A99]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à évaluer votre conformité ?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Identifiez vos forces et axes d'amélioration en quelques minutes.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-[#1C32FF] font-bold px-8 py-4 text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            Commencer maintenant
            <ArrowRight size={22} />
          </button>
        </div>
      </section>
    </div>
  );
}
