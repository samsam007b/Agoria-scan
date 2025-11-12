'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Leaf, Users, DollarSign, Cpu, Settings, Zap } from 'lucide-react';
import ScanContext from './ScanContext';
import { scanContextData } from '@/data/scanContextData';
import HexagonThemes from '@/components/campaign/HexagonThemes';
import { complianceThemes } from '@/data/complianceThemes';

// Mapping des icônes Lucide pour les thèmes
const themeIcons: Record<string, any> = {
  'data-protection': Shield,
  'environmental': Leaf,
  'social-hr': Users,
  'financial': DollarSign,
  'digital-ai': Cpu,
  'industrial': Settings,
};

export default function HeroSection() {
  const [hexagonSize, setHexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('xlarge');
  const [activeSection, setActiveSection] = useState('scan');

  // Détection responsive pour la taille de l'hexagone
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setHexagonSize('medium'); // Mobile: 350px
      } else if (window.innerWidth < 1024) {
        setHexagonSize('large'); // Tablet: 500px
      } else {
        setHexagonSize('large'); // Desktop: 500px (réduit pour proportions)
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset pour le header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Banner Section - Style Agoria.be avec gradient vibrant */}
      <section className="relative bg-gradient-to-br from-[#7B68EE] via-[#FF69B4] to-[#4169E1] overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-compliance.png"
            alt="Compliance illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 sm:py-24 md:py-28 lg:py-32 text-center">
            <div className="inline-block mb-4">
              <div className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
                · AGORIA
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Agoria célèbre la conformité
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium max-w-4xl mx-auto">
              6 domaines pour piloter votre conformité
            </p>
          </div>

          {/* Navigation Tabs - Style Agoria.be */}
          <div className="pb-0">
            <div className="flex justify-end gap-0">
              <button
                onClick={() => scrollToSection('compliance-scan')}
                className={`px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition-all duration-200 ${
                  activeSection === 'scan'
                    ? 'bg-[#4169E1] text-white'
                    : 'bg-[#1C32FF] text-white hover:bg-[#4169E1]'
                }`}
              >
                Compliance Scan
              </button>
              <button
                onClick={() => scrollToSection('campagne-conformite')}
                className={`px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition-all duration-200 ${
                  activeSection === 'campagne'
                    ? 'bg-[#4169E1] text-white'
                    : 'bg-[#1C32FF] text-white hover:bg-[#4169E1]'
                }`}
              >
                Campagne
              </button>
              <button
                onClick={() => scrollToSection('thematiques-prioritaires')}
                className={`px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition-all duration-200 ${
                  activeSection === 'themes'
                    ? 'bg-[#4169E1] text-white'
                    : 'bg-[#1C32FF] text-white hover:bg-[#4169E1]'
                }`}
              >
                Thématiques
              </button>
              <button
                onClick={() => scrollToSection('evenement-conformite')}
                className={`px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition-all duration-200 ${
                  activeSection === 'evenement'
                    ? 'bg-[#4169E1] text-white'
                    : 'bg-[#1C32FF] text-white hover:bg-[#4169E1]'
                }`}
              >
                Événement
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Split Design : Hexagone bleu + CTA blanc */}
      <section id="compliance-scan" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Côté gauche - Hexagone sur fond gris clair */}
          <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#F5F7FA] flex items-center justify-center order-2 lg:order-1 lg:border-r-2 lg:border-gray-300">
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
          <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white flex items-center order-1 lg:order-2">
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
                  <div className="w-12 h-12 bg-[#00D084] flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
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
