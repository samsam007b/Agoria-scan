'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Briefcase, Lock, CheckCircle, Clock, FileText, Download, ChevronRight } from 'lucide-react';

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
      color: 'bg-[#0073CF]',
      borderColor: 'border-[#0073CF]',
      description: 'Évaluez vos mesures de cybersécurité, MFA, sauvegardes, formation et conformité NIS2.',
      questions: 6,
    },
    {
      id: 'B',
      icon: Briefcase,
      title: 'Conformité réglementaire & sociale',
      weight: '40%',
      color: 'bg-[#7CB342]',
      borderColor: 'border-[#7CB342]',
      description: 'Vérifiez vos obligations légales : BCE, contrats, DIMONA, registre du personnel, facturation.',
      questions: 6,
    },
    {
      id: 'C',
      icon: Lock,
      title: 'RGPD & Gouvernance des données',
      weight: '30%',
      color: 'bg-[#FF6B35]',
      borderColor: 'border-[#FF6B35]',
      description: 'Contrôlez votre conformité RGPD : registre, DPO, droits des personnes, rétention.',
      questions: 6,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Rapide et simple',
      description: 'Complétez l\'évaluation en 5-10 minutes',
    },
    {
      icon: CheckCircle,
      title: 'Score détaillé',
      description: 'Obtenez un score global et par module',
    },
    {
      icon: FileText,
      title: 'Recommandations',
      description: 'Recevez des actions prioritaires personnalisées',
    },
    {
      icon: Download,
      title: 'Rapport PDF',
      description: 'Téléchargez votre rapport complet',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-[#0073CF]">Home</a>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-[#003E7E] font-semibold">Compliance Scan</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003E7E] to-[#0073CF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compliance Scan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            Évaluez votre niveau de conformité en 3 modules clés
          </p>
          <p className="text-base text-blue-200 max-w-3xl mx-auto">
            Un outil d'auto-évaluation gratuit et confidentiel pour identifier vos forces
            et vos axes d'amélioration en matière de conformité.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003E7E] text-center mb-12">
            Les 3 modules de l'évaluation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={module.id}
                  className={`bg-white rounded-xl shadow-md border-t-4 ${module.borderColor} p-6 hover:shadow-xl transition-shadow`}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`${module.color} p-4 rounded-full`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase">
                      Module {module.id} • {module.weight}
                    </span>
                    <h3 className="text-xl font-bold text-[#003E7E] mt-2 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {module.description}
                    </p>
                    <div className="text-sm text-gray-500">
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
          <h2 className="text-3xl font-bold text-[#003E7E] text-center mb-12">
            Pourquoi faire le Compliance Scan ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-[#0073CF]" size={40} />
                  </div>
                  <h3 className="font-bold text-[#003E7E] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003E7E] text-center mb-6">
              Prêt à évaluer votre conformité ?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              L'évaluation comprend <strong>18 questions</strong> réparties sur 3 modules.
              <br />
              Temps estimé : <strong>5-10 minutes</strong>
            </p>

            {/* Checkbox RGPD */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedRGPD}
                  onChange={(e) => setAcceptedRGPD(e.target.checked)}
                  className="mt-1 mr-3 w-5 h-5 text-[#0073CF] border-gray-300 rounded focus:ring-[#0073CF]"
                />
                <span className="text-sm text-gray-700">
                  J'accepte que mes réponses soient traitées de manière <strong>anonyme et confidentielle</strong> dans
                  le cadre de cette auto-évaluation. Aucune donnée personnelle n'est collectée. Les résultats sont
                  uniquement visibles par moi et ne sont pas transmis à Agoria sans mon consentement explicite.
                </span>
              </label>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={handleStart}
                disabled={!acceptedRGPD}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all transform ${
                  acceptedRGPD
                    ? 'bg-[#FF6B35] hover:bg-[#ff5520] text-white shadow-xl hover:shadow-2xl hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                DÉMARRER L'ÉVALUATION
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
