'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScanContext from './ScanContext';
import { scanContextData } from '@/data/scanContextData';
import HexagonThemes from '@/components/campaign/HexagonThemes';
import { complianceThemes } from '@/data/complianceThemes';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section - Design hexagonal avec l'hexagone interactif */}
      <section className="relative bg-[#0A0A0A] py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Gradient bleu Agoria animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C32FF]/40 via-[#0D1A99]/30 to-[#1C32FF]/40"></div>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(28, 50, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(28, 50, 255, 0.2) 0%, transparent 50%)',
          }}></div>
        </div>

        {/* Grille tech style */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(28, 50, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 50, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Contenu */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Agoria célèbre la conformité
                </h1>
                <div className="w-3 h-3 bg-[#00D084] flex-shrink-0 animate-pulse"></div>
              </div>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                6 domaines pour piloter votre conformité
              </p>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                Évaluez votre maturité sur 18 questions concrètes et obtenez un diagnostic personnalisé avec des actions prioritaires.
              </p>
              <Link
                href="/compliance-scan"
                className="inline-flex items-center gap-2 bg-white text-[#1C32FF] font-bold px-8 py-4 transition-all duration-300 hover:bg-[#1C32FF] hover:text-white hover:shadow-[0_0_30px_rgba(28,50,255,0.5)] active:scale-[0.98] text-lg group"
              >
                Lancer le Compliance Scan
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Statistique clé sous le CTA */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm border-l-4 border-[#00D084]">
                <div className="text-sm font-semibold text-white/70 mb-1">Temps moyen</div>
                <div className="text-2xl font-bold text-white">5 minutes</div>
                <div className="text-sm text-white/80 mt-1">pour un diagnostic complet</div>
              </div>
            </div>

            {/* Hexagone interactif à droite */}
            <div className="flex justify-center lg:justify-end">
              <div className="transform scale-90 sm:scale-100">
                <HexagonThemes
                  themes={complianceThemes.map(t => ({
                    id: t.id,
                    position: t.position,
                    title: t.title,
                    shortTitle: t.shortTitle,
                    icon: t.icon,
                    color: t.color,
                    description: t.description
                  }))}
                  interactive={true}
                  size="large"
                />
              </div>
            </div>
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
