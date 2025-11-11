'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, FileCheck, Lock } from 'lucide-react';
import ScanContext from './ScanContext';
import { scanContextData } from '@/data/scanContextData';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section - Style Agoria avec image de fond assombrie */}
      <section className="relative bg-black py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-compliance.png"
            alt="Compliance illustration"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Overlay gradient sombre */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>

        {/* Contenu */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Compliance Scan
              </h1>
              <div className="w-3 h-3 bg-[#1C32FF] flex-shrink-0"></div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
              Évaluez votre niveau de conformité en 5 minutes
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Un outil d'auto-évaluation gratuit pour identifier vos priorités en matière de cybersécurité, conformité réglementaire et RGPD.
            </p>
            <Link
              href="/compliance-scan"
              className="inline-flex items-center gap-2 bg-[#1C32FF] text-white font-semibold px-8 py-4 transition-all duration-200 hover:bg-[#0D1A99] hover:shadow-xl active:scale-[0.98] text-lg"
            >
              Démarrer l'évaluation
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Campagne "Agoria célèbre la conformité" */}
      <ScanContext
        title={scanContextData.title}
        intro={scanContextData.intro}
        insights={scanContextData.insights}
        themes={scanContextData.themes}
        event={scanContextData.event}
      />

      {/* Section Be Inspired - Style Agoria */}
      <section className="bg-[#F5F7FA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="heading-agoria-2">Évaluez votre conformité</h2>
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-agoria group">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1C32FF] p-4 group-hover:scale-110 transition-transform">
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
                <div className="bg-[#00D084] p-4 group-hover:scale-110 transition-transform">
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
                <div className="bg-[#FF6B35] p-4 group-hover:scale-110 transition-transform">
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
            <div className="w-3 h-3 bg-[#1C32FF]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Conseil stratégique', desc: 'Accompagnement personnalisé pour votre transformation' },
              { title: 'Formation & Academy', desc: 'Développez les compétences de vos équipes' },
              { title: 'Networking & Events', desc: 'Connectez-vous avec l\'écosystème technologique' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7FA] p-6 border border-gray-200 opacity-50 cursor-not-allowed hover:opacity-60 transition-opacity"
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
