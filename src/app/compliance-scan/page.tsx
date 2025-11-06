'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Briefcase, Lock, CheckCircle, Clock, FileText, Download, ArrowRight } from 'lucide-react';

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
      icon: Shield,
      title: 'Digitalisation & Sécurité',
      weight: '30%',
      color: '#1C32FF',
      description: 'Évaluez vos mesures de cybersécurité, MFA, sauvegardes, formation et conformité NIS2.',
      questions: 6,
    },
    {
      id: 'B',
      icon: Briefcase,
      title: 'Conformité réglementaire & sociale',
      weight: '40%',
      color: '#00D084',
      description: 'Vérifiez vos obligations légales : BCE, contrats, DIMONA, registre du personnel, facturation.',
      questions: 6,
    },
    {
      id: 'C',
      icon: Lock,
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
      <section className="relative bg-gradient-to-br from-[#1C32FF] via-[#0D1A99] to-[#1C32FF] py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="text-white" size={48} />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Compliance Scan
                </h1>
                <div className="w-4 h-4 bg-white"></div>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-3">
                Évaluez votre niveau de conformité en <strong>5-10 minutes</strong>
              </p>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                Un outil d'auto-évaluation gratuit et confidentiel pour identifier vos forces
                et vos axes d'amélioration en matière de conformité.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">18</div>
                <div className="text-sm text-white/80">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-white/80">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5-10'</div>
                <div className="text-sm text-white/80">Minutes</div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white shadow-2xl p-8 md:p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1A1A1A] text-center mb-6">
                Commencez votre évaluation maintenant
              </h2>

              {/* Checkbox RGPD */}
              <div className="bg-[#F5F7FA] border-2 border-gray-200 p-6 mb-6">
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={acceptedRGPD}
                    onChange={(e) => setAcceptedRGPD(e.target.checked)}
                    className="mt-1 mr-4 w-5 h-5 text-[#1C32FF] border-gray-300 focus:ring-[#1C32FF] cursor-pointer"
                  />
                  <span className="text-sm text-[#1A1A1A] leading-relaxed">
                    J'accepte que mes réponses soient traitées de manière <strong>anonyme et confidentielle</strong> dans
                    le cadre de cette auto-évaluation. Aucune donnée personnelle n'est collectée.
                  </span>
                </label>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleStart}
                disabled={!acceptedRGPD}
                className={`w-full btn-agoria-primary inline-flex items-center justify-center gap-3 text-lg py-4 ${
                  !acceptedRGPD ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                DÉMARRER L'ÉVALUATION
                <ArrowRight size={24} />
              </button>

              {!acceptedRGPD && (
                <p className="text-xs text-[#6B6B6B] text-center mt-3">
                  Veuillez accepter la clause de confidentialité pour continuer
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="heading-agoria-2">Les 3 modules de l'évaluation</h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <div key={module.id} className="card-agoria group">
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: module.color }}
                    >
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-[#6B6B6B] uppercase">
                      Module {module.id} • {module.weight}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mt-2 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm mb-4">
                      {module.description}
                    </p>
                    <div className="text-sm text-[#6B6B6B]">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="heading-agoria-2">Pourquoi faire le Compliance Scan ?</h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-[#F5F7FA] hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-[#1C32FF]" size={40} />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#6B6B6B]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
