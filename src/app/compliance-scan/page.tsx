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
      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h1 className="heading-agoria-1">Compliance Scan</h1>
              <div className="w-3 h-3 bg-[#1C32FF]"></div>
            </div>
            <p className="text-xl text-[#6B6B6B] mb-4">
              Évaluez votre niveau de conformité en 3 modules clés
            </p>
            <p className="text-base text-[#6B6B6B]">
              Un outil d'auto-évaluation gratuit et confidentiel pour identifier vos forces
              et vos axes d'amélioration en matière de conformité.
            </p>
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

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="heading-agoria-3 text-center mb-6">
              Prêt à évaluer votre conformité ?
            </h2>
            <p className="text-center text-[#6B6B6B] mb-8">
              L'évaluation comprend <strong>18 questions</strong> réparties sur 3 modules.
              <br />
              Temps estimé : <strong>5-10 minutes</strong>
            </p>

            {/* Checkbox RGPD */}
            <div className="bg-[#F5F7FA] border border-gray-200 p-6 mb-8">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedRGPD}
                  onChange={(e) => setAcceptedRGPD(e.target.checked)}
                  className="mt-1 mr-3 w-5 h-5 text-[#1C32FF] border-gray-300 focus:ring-[#1C32FF]"
                />
                <span className="text-sm text-[#1A1A1A]">
                  J'accepte que mes réponses soient traitées de manière <strong>anonyme et confidentielle</strong> dans
                  le cadre de cette auto-évaluation. Aucune donnée personnelle n'est collectée.
                </span>
              </label>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={handleStart}
                disabled={!acceptedRGPD}
                className={`btn-agoria-primary inline-flex items-center gap-2 ${
                  !acceptedRGPD ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                DÉMARRER L'ÉVALUATION
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
