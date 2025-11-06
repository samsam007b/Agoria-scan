'use client';

import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Lock } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section - Style Agoria Clean */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <h1 className="heading-agoria-1">
                Compliance Scan
              </h1>
              <div className="w-3 h-3 bg-[#1C32FF] rounded-sm"></div>
            </div>
            <p className="text-xl text-[#6B6B6B] mb-8 leading-relaxed">
              Évaluez votre niveau de conformité en 5 minutes. Un outil d'auto-évaluation gratuit pour identifier vos priorités en matière de cybersécurité, conformité réglementaire et RGPD.
            </p>
            <Link
              href="/compliance-scan"
              className="btn-agoria-primary inline-flex items-center gap-2"
            >
              Démarrer l'évaluation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Be Inspired - Style Agoria */}
      <section className="bg-[#F5F7FA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="heading-agoria-2">Évaluez votre conformité</h2>
            <div className="w-3 h-3 bg-[#1C32FF] rounded-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-agoria group">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1C32FF] p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Digitalisation & Sécurité</h3>
              <p className="text-[#6B6B6B] mb-4">
                Évaluez vos mesures de protection digitale et votre conformité NIS2
              </p>
              <div className="text-[#1C32FF] font-semibold text-sm">30% du score</div>
            </div>

            <div className="card-agoria group">
              <div className="flex justify-center mb-6">
                <div className="bg-[#00D084] p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <FileCheck className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Conformité réglementaire</h3>
              <p className="text-[#6B6B6B] mb-4">
                Vérifiez votre conformité aux obligations légales et sociales belges
              </p>
              <div className="text-[#00D084] font-semibold text-sm">40% du score</div>
            </div>

            <div className="card-agoria group">
              <div className="flex justify-center mb-6">
                <div className="bg-[#FF6B35] p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Lock className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">RGPD & Gouvernance</h3>
              <p className="text-[#6B6B6B] mb-4">
                Contrôlez votre conformité RGPD et votre gouvernance des données
              </p>
              <div className="text-[#FF6B35] font-semibold text-sm">30% du score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section factice - Services style Agoria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="heading-agoria-2">Nos Services</h2>
            <div className="w-3 h-3 bg-[#1C32FF] rounded-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Conseil stratégique', desc: 'Accompagnement personnalisé pour votre transformation' },
              { title: 'Formation & Academy', desc: 'Développez les compétences de vos équipes' },
              { title: 'Networking & Events', desc: 'Connectez-vous avec l\'écosystème technologique' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7FA] rounded-lg p-6 border border-gray-200 opacity-50 cursor-not-allowed hover:opacity-60 transition-opacity"
                title="Section non disponible dans la démo"
              >
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-[#6B6B6B] mb-4">{service.desc}</p>
                <button disabled className="text-[#1C32FF] font-semibold text-sm flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
