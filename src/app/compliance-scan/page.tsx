'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, FileText, Download, ArrowRight } from 'lucide-react';

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

  const modules = [
    {
      id: 'A',
      emoji: '🔐',
      title: 'Digitalisation & Sécurité',
      weight: '30%',
      color: '#1C32FF',
      description: 'Évaluez vos mesures de cybersécurité, MFA, sauvegardes, formation et conformité NIS2.',
      questions: 6,
    },
    {
      id: 'B',
      emoji: '👥',
      title: 'Conformité réglementaire & sociale',
      weight: '40%',
      color: '#00D084',
      description: 'Vérifiez vos obligations légales : BCE, contrats, DIMONA, registre du personnel, facturation.',
      questions: 6,
    },
    {
      id: 'C',
      emoji: '🔐',
      title: 'RGPD & Gouvernance des données',
      weight: '30%',
      color: '#FF6B35',
      description: 'Contrôlez votre conformité RGPD : registre, DPO, droits des personnes, rétention.',
      questions: 6,
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Rapide et simple', description: 'Complétez l\'évaluation en 5-10 minutes' },
    { icon: CheckCircle, title: 'Score détaillé', description: 'Obtenez un score global et par module' },
    { icon: FileText, title: 'Recommandations', description: 'Recevez des actions prioritaires personnalisées' },
    { icon: Download, title: 'Rapport PDF', description: 'Téléchargez votre rapport complet' },
  ];

  return (
    <div className="bg-white">
      {/* Hero with CTA */}
      <section className="relative bg-gradient-to-br from-[#1C32FF] via-[#0D1A99] to-[#1C32FF] py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-4xl sm:text-5xl">🔐</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Compliance Scan
                </h1>
                <div className="hidden sm:block w-3 h-3 md:w-4 md:h-4 bg-white"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2 sm:mb-3 px-2">
                Évaluez votre niveau de conformité en <strong>5-10 minutes</strong>
              </p>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto px-4">
                Un outil d'auto-évaluation gratuit et confidentiel pour identifier vos forces
                et vos axes d'amélioration en matière de conformité.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">18</div>
                <div className="text-xs sm:text-sm text-white/80">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">3</div>
                <div className="text-xs sm:text-sm text-white/80">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5-10'</div>
                <div className="text-xs sm:text-sm text-white/80">Minutes</div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] text-center mb-4 sm:mb-6">
                Commencez votre évaluation maintenant
              </h2>

              {/* Checkbox RGPD */}
              <div className="bg-[#F5F7FA] border-2 border-gray-200 p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={acceptedRGPD}
                    onChange={(e) => setAcceptedRGPD(e.target.checked)}
                    className="mt-0.5 sm:mt-1 mr-3 sm:mr-4 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#1C32FF] border-gray-300 focus:ring-[#1C32FF] cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                    J'accepte que mes réponses soient traitées de manière <strong>anonyme et confidentielle</strong> dans
                    le cadre de cette auto-évaluation. Aucune donnée personnelle n'est collectée.
                  </span>
                </label>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleStart}
                disabled={!acceptedRGPD}
                className={`w-full btn-agoria-primary inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg py-3 sm:py-4 ${
                  !acceptedRGPD ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                DÉMARRER L'ÉVALUATION
                <ArrowRight size={20} className="sm:w-6 sm:h-6" />
              </button>

              {!acceptedRGPD && (
                <p className="text-xs text-[#6B6B6B] text-center mt-2 sm:mt-3">
                  Veuillez accepter la clause de confidentialité pour continuer
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Les 3 modules de l'évaluation
            </h2>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1C32FF] flex-shrink-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((module) => {
              return (
                <div key={module.id} className="card-agoria group">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div
                      className="p-3 sm:p-4 group-hover:scale-110 transition-transform flex items-center justify-center"
                      style={{
                        backgroundColor: module.color,
                        width: '72px',
                        height: '72px',
                      }}
                    >
                      <span className="text-4xl">{module.emoji}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm font-semibold text-[#6B6B6B] uppercase">
                      Module {module.id} • {module.weight}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mt-2 mb-2 sm:mb-3">
                      {module.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-xs sm:text-sm mb-3 sm:mb-4">
                      {module.description}
                    </p>
                    <div className="text-xs sm:text-sm text-[#6B6B6B]">
                      {module.questions} questions
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Pourquoi faire le Compliance Scan ?
            </h2>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1C32FF] flex-shrink-0"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-5 sm:p-6 bg-[#F5F7FA] hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <IconComponent className="text-[#1C32FF]" size={36} />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-base sm:text-lg">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
