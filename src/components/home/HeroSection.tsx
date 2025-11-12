'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lock, Leaf, Users, CircleDollarSign, Cpu, Settings } from 'lucide-react';
import ScanContext from './ScanContext';
import { scanContextData } from '@/data/scanContextData';
import HexagonThemes from '@/components/campaign/HexagonThemes';
import { complianceThemes } from '@/data/complianceThemes';

// Mapping des icônes Lucide pour les thèmes
const themeIcons: Record<string, any> = {
  'data-protection': Lock,
  'environmental': Leaf,
  'social-hr': Users,
  'financial': CircleDollarSign,
  'digital-ai': Cpu,
  'industrial': Settings,
};

export default function HeroSection() {
  const [hexagonSize, setHexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('xlarge');

  // Détection responsive pour la taille de l'hexagone
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setHexagonSize('medium'); // Mobile: 300px
      } else if (window.innerWidth < 1024) {
        setHexagonSize('large'); // Tablet: 400px
      } else {
        setHexagonSize('xlarge'); // Desktop: 550px
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleThemeClick = (themeId: string) => {
    // Scroll vers la section des thématiques prioritaires
    const thematicSection = document.getElementById('thematiques-prioritaires');
    if (thematicSection) {
      thematicSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Banner Section avec image */}
      <section className="relative bg-black py-8 sm:py-10 md:py-12 overflow-hidden">
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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 sm:mb-3">
            Agoria célèbre la conformité
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
            6 domaines pour piloter votre conformité
          </p>
        </div>
      </section>

      {/* Hero Section - Split Design : Hexagone bleu + CTA blanc */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Côté gauche - Hexagone sur fond bleu mat Agoria */}
          <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-[#060D4D] flex items-center justify-center order-2 lg:order-1">
            <div className="flex justify-center">
              <HexagonThemes
                themes={complianceThemes.map(t => ({
                  id: t.id,
                  position: t.position,
                  title: t.title,
                  shortTitle: t.shortTitle,
                  icon: themeIcons[t.id],
                  color: t.color,
                  description: t.description
                }))}
                interactive={true}
                size={hexagonSize}
                onThemeClick={handleThemeClick}
              />
            </div>
          </div>

          {/* Côté droit - CTA sur fond blanc */}
          <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white flex items-center order-1 lg:order-2">
            <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 leading-tight">
                Explorez les 6 domaines de conformité
              </h2>
              <p className="text-base sm:text-lg text-[#6B6B6B] mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Évaluez votre maturité sur 18 questions concrètes et obtenez un diagnostic personnalisé avec des actions prioritaires.
              </p>
              <Link
                href="/compliance-scan"
                className="inline-flex items-center justify-center gap-2 bg-[#1C32FF] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-[0_8px_30px_rgba(28,50,255,0.3)] active:scale-[0.98] text-base sm:text-lg group w-full sm:w-auto shadow-lg"
              >
                Lancer le Compliance Scan
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Statistique clé sous le CTA */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-[#F5F7FA] border-l-4 border-[#00D084] max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-semibold text-[#6B6B6B] mb-1">Temps moyen</div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">5 minutes</div>
                    <div className="text-xs sm:text-sm text-[#6B6B6B] mt-1">pour un diagnostic complet</div>
                  </div>
                  <div className="text-4xl">⚡</div>
                </div>
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
