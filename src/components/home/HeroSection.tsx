'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Leaf, Users, DollarSign, Cpu, Settings, Zap, AlertTriangle, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Données de storytelling pour chaque thème
const themeStories: Record<string, any> = {
  'data-protection': {
    hook: 'Saviez-vous que...',
    stat: '63%',
    statText: 'des entreprises belges risquent des amendes RGPD jusqu\'à 4% de leur CA mondial',
    insight: 'Une simple fuite de données peut coûter des millions et détruire la confiance de vos clients en quelques heures.',
    questions: [
      'Avez-vous cartographié toutes vos données personnelles?',
      'Vos processus de consentement sont-ils conformes?',
      'Avez-vous un plan de gestion des violations?'
    ],
    cta: 'Où en êtes-vous sur la protection des données?'
  },
  'environmental': {
    hook: 'Le saviez-vous?',
    stat: '78%',
    statText: 'des investisseurs privilégient désormais les entreprises avec une stratégie ESG claire',
    insight: 'D\'ici 2025, le reporting ESG devient obligatoire pour toutes les moyennes et grandes entreprises européennes.',
    questions: [
      'Connaissez-vous votre empreinte carbone?',
      'Avez-vous une stratégie de réduction validée?',
      'Êtes-vous prêt pour le reporting CSRD?'
    ],
    cta: 'Évaluez votre maturité environnementale'
  },
  'social-hr': {
    hook: 'Attention...',
    stat: '85%',
    statText: 'des talents recherchent activement des employeurs socialement responsables',
    insight: 'La guerre des talents se gagne aussi sur votre engagement social et le bien-être de vos équipes.',
    questions: [
      'Garantissez-vous l\'égalité salariale?',
      'La santé mentale est-elle une priorité?',
      'Investissez-vous dans la formation continue?'
    ],
    cta: 'Testez votre attractivité RH'
  },
  'financial': {
    hook: 'Tendance 2024...',
    stat: '+23%',
    statText: 'de hausse des contrôles fiscaux en Belgique cette année',
    insight: 'Les autorités fiscales utilisent désormais l\'IA pour détecter les anomalies comptables et les optimisations abusives.',
    questions: [
      'Vos comptes sont-ils audit-ready?',
      'Votre optimisation fiscale est-elle défendable?',
      'Avez-vous des procédures anti-blanchiment?'
    ],
    cta: 'Vérifiez votre conformité financière'
  },
  'digital-ai': {
    hook: 'Alerte cyber...',
    stat: '1/3',
    statText: 'des entreprises ont été victimes d\'une cyberattaque en 2023',
    insight: 'Le coût moyen d\'une cyberattaque atteint 4.35M€. Et avec l\'IA, les attaques deviennent encore plus sophistiquées.',
    questions: [
      'Vos systèmes sont-ils cyber-résilients?',
      'Comment gouvernez-vous l\'utilisation de l\'IA?',
      'Avez-vous un plan de réponse aux incidents?'
    ],
    cta: 'Évaluez vos risques cyber et IA'
  },
  'industrial': {
    hook: 'Fait prouvé...',
    stat: '+15%',
    statText: 'de productivité en moyenne pour les entreprises certifiées ISO',
    insight: 'Les certifications ne sont pas qu\'une contrainte : elles optimisent vos processus et rassurent vos clients.',
    questions: [
      'Disposez-vous des certifications sectorielles?',
      'La sécurité machine est-elle à jour?',
      'Assurez-vous la traçabilité complète?'
    ],
    cta: 'Auditez vos normes industrielles'
  }
};

export default function HeroSection() {
  const [hexagonSize, setHexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('medium');
  const [activeSection, setActiveSection] = useState('scan');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

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
    setSelectedTheme(themeId);
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

  const selectedThemeData = selectedTheme ? complianceThemes.find(t => t.id === selectedTheme) : null;
  const selectedStory = selectedTheme ? themeStories[selectedTheme] : null;
  const IconComponent = selectedTheme ? themeIcons[selectedTheme] : null;

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

        {/* Voile transparent pour ajouter de l'ombre */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

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

      {/* Banner événement */}
      <section className="bg-gradient-to-b from-gray-300 to-gray-200 py-6 sm:py-8 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Zap className="text-[#1C32FF]" size={20} />
                <span className="text-sm font-bold text-[#1C32FF] uppercase tracking-wider">
                  Événement du 20 mars
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-800 font-semibold">
                Rejoignez-nous pour célébrer la conformité avec Agoria
              </p>
            </div>
            <button
              onClick={() => scrollToSection('evenement-conformite')}
              className="inline-flex items-center gap-2 bg-[#1C32FF] text-white font-bold px-6 py-3 hover:bg-[#0D1A99] transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              En savoir plus
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section - Variante B: Photo + Overlay with Storytelling Flow */}
      <section id="compliance-scan" className="relative overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[600px]">
          {/* Côté gauche - Hexagone avec photo + overlay */}
          <div className="relative py-8 sm:py-10 lg:py-12 flex items-center justify-center lg:border-r-2 lg:border-gray-200 overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Photo d'arrière-plan */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/compliance-celebration.jpg"
                alt="Business background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay gradient bleu foncé */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C32FF]/85 via-[#0D1A99]/80 to-[#060D4D]/90 z-10"></div>

            <div className="relative text-center z-20 px-4">
              {/* Titre au-dessus de l'hexagone */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg uppercase tracking-wider">
                  Compliance HUB
                </h2>
                <p className="text-sm sm:text-base text-white/90 drop-shadow-md">
                  Cliquez pour révéler l'histoire de chaque domaine
                </p>
              </div>

              {/* Hexagone directement sur le fond - uniquement avec les icônes */}
              <motion.div
                className="inline-block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
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
                  glassEffect={true}
                />
              </motion.div>
            </div>
          </div>

          {/* Côté droit - Storytelling avec design amélioré */}
          <div className="relative py-8 sm:py-10 lg:py-12 bg-white flex items-center">
            <AnimatePresence mode="wait">
              {!selectedTheme ? (
                // Vue par défaut avec style amélioré
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-6 sm:px-8 md:px-12"
                >
                  <div className="flex items-start sm:items-center gap-3 mb-6">
                    <Lightbulb size={28} className="text-[#FFB800] flex-shrink-0 sm:w-8 sm:h-8" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                      La conformité, c'est une histoire
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#6B6B6B] mb-6 sm:mb-8 leading-relaxed">
                    Chaque domaine de conformité cache des enjeux business critiques, des opportunités de croissance, et des risques à maîtriser.
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-6 sm:mb-8">
                    Cliquez sur un domaine pour découvrir son histoire et comprendre pourquoi elle vous concerne.
                  </p>
                  <Link
                    href="/compliance-scan"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-base sm:text-lg group w-full sm:w-auto"
                  >
                    Lancer le diagnostic complet
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                // Story du thème sélectionné
                <motion.div
                  key={selectedTheme}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full px-6 sm:px-8 md:px-12"
                >
                  {selectedThemeData && IconComponent && selectedStory && (
                    <>
                      {/* Theme header with icon animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="flex items-center gap-3 sm:gap-4 mb-6"
                      >
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg flex-shrink-0"
                          style={{ backgroundColor: selectedThemeData.color }}
                        >
                          <IconComponent className="text-white" size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                          {selectedThemeData.title}
                        </h3>
                      </motion.div>

                      {/* Hook */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                      >
                        <div className="text-sm font-bold text-[#1C32FF] mb-2 uppercase">
                          {selectedStory.hook}
                        </div>
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#FF5722] p-4 sm:p-5 shadow-md">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <AlertTriangle size={20} className="text-[#FF5722] flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                            <div>
                              <div className="text-3xl sm:text-4xl font-bold text-[#FF5722] mb-2">
                                {selectedStory.stat}
                              </div>
                              <div className="text-sm sm:text-base text-[#1A1A1A] font-medium">
                                {selectedStory.statText}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Insight */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-5 mb-6 italic text-sm sm:text-base text-[#6B6B6B] border-l-2 border-[#1C32FF] shadow-sm"
                      >
                        "{selectedStory.insight}"
                      </motion.div>

                      {/* Questions */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-8"
                      >
                        <div className="text-sm font-bold text-[#1A1A1A] mb-3 uppercase">
                          3 questions clés :
                        </div>
                        <ul className="space-y-3">
                          {selectedStory.questions.map((question: string, idx: number) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + idx * 0.1 }}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#1C32FF] to-[#0D1A99] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 rounded-full mt-0.5 shadow">
                                {idx + 1}
                              </div>
                              <span className="text-sm sm:text-base text-[#6B6B6B]">{question}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4">
                          {selectedStory.cta}
                        </div>
                        <Link
                          href="/compliance-scan"
                          className="block w-full text-center bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] text-white font-bold px-6 py-3 sm:py-4 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-base sm:text-lg"
                        >
                          Lancer le Compliance Scan
                        </Link>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
