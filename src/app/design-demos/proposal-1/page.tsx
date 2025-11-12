'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HexagonThemes from '@/components/campaign/HexagonThemes';
import { complianceThemes } from '@/data/complianceThemes';
import { Shield, Leaf, Users, DollarSign, Cpu, Settings } from 'lucide-react';

const themeIcons: Record<string, any> = {
  'data-protection': Shield,
  'environmental': Leaf,
  'social-hr': Users,
  'financial': DollarSign,
  'digital-ai': Cpu,
  'industrial': Settings,
};

// Contenu détaillé pour chaque thème
const themeDetails: Record<string, any> = {
  'data-protection': {
    description: 'Protégez les données personnelles et respectez le RGPD',
    keyPoints: [
      'Cartographie des données personnelles',
      'Processus de consentement conformes',
      'Procédures de gestion des violations'
    ],
    riskLevel: 'high',
    riskText: 'Risque élevé: Amendes jusqu\'à 4% du CA mondial',
    stats: '63% des entreprises belges non-conformes RGPD'
  },
  'environmental': {
    description: 'Réduisez votre impact environnemental et respectez les normes',
    keyPoints: [
      'Bilan carbone et stratégie de réduction',
      'Gestion des déchets et économie circulaire',
      'Reporting ESG et taxonomie européenne'
    ],
    riskLevel: 'medium',
    riskText: 'Risque moyen: Obligations de reporting croissantes',
    stats: '78% des investisseurs privilégient les entreprises durables'
  },
  'social-hr': {
    description: 'Assurez le bien-être et les droits de vos collaborateurs',
    keyPoints: [
      'Égalité salariale et non-discrimination',
      'Santé et sécurité au travail',
      'Formation et développement des compétences'
    ],
    riskLevel: 'medium',
    riskText: 'Risque moyen: Image de marque et rétention',
    stats: '85% des talents recherchent des employeurs responsables'
  },
  'financial': {
    description: 'Garantissez la transparence financière et fiscale',
    keyPoints: [
      'Conformité comptable et audit',
      'Optimisation fiscale légale',
      'Lutte contre le blanchiment (AML)'
    ],
    riskLevel: 'high',
    riskText: 'Risque élevé: Sanctions pénales possibles',
    stats: 'Contrôles fiscaux en hausse de 23% en 2024'
  },
  'digital-ai': {
    description: 'Maîtrisez les enjeux de l\'IA et de la cybersécurité',
    keyPoints: [
      'Sécurité des systèmes d\'information',
      'Gouvernance de l\'IA et éthique',
      'Protection contre les cyberattaques'
    ],
    riskLevel: 'high',
    riskText: 'Risque élevé: 1 entreprise sur 3 victime en 2023',
    stats: 'Coût moyen d\'une cyberattaque: 4.35M€'
  },
  'industrial': {
    description: 'Respectez les normes de qualité et de sécurité industrielle',
    keyPoints: [
      'Certifications ISO et normes sectorielles',
      'Sécurité des équipements et machines',
      'Traçabilité et gestion de la qualité'
    ],
    riskLevel: 'medium',
    riskText: 'Risque moyen: Arrêts de production possibles',
    stats: 'Les certifications augmentent la productivité de 15%'
  }
};

export default function Proposal1Page() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

  const handleThemeClick = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const selectedThemeData = selectedTheme ? complianceThemes.find(t => t.id === selectedTheme) : null;
  const selectedThemeDetails = selectedTheme ? themeDetails[selectedTheme] : null;
  const IconComponent = selectedTheme ? themeIcons[selectedTheme] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/design-demos" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour aux démos
          </Link>
          <div className="text-sm font-bold text-[#6B6B6B]">
            Proposition 1: Interactive Panel Slide
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Côté gauche - Hexagone */}
          <div className="relative py-12 bg-[#F5F7FA] flex items-center justify-center lg:border-r-2 lg:border-gray-300">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Cliquez sur un domaine
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Pour découvrir les détails et enjeux
              </p>
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

          {/* Côté droit - Contenu par défaut ou panneau détaillé */}
          <div className="relative py-12 bg-white flex items-center">
            <AnimatePresence mode="wait">
              {!selectedTheme ? (
                // Vue par défaut
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-8 md:px-12"
                >
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-5">
                    Explorez les 6 domaines de conformité
                  </h2>
                  <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                    Évaluez votre maturité sur 18 questions concrètes et obtenez un diagnostic personnalisé avec des actions prioritaires.
                  </p>
                  <Link
                    href="/compliance-scan"
                    className="inline-flex items-center justify-center gap-2 bg-[#1C32FF] text-white font-bold px-8 py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-lg text-lg group"
                  >
                    Lancer le Compliance Scan
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="mt-10 grid grid-cols-2 gap-4">
                    <div className="bg-[#F5F7FA] p-4">
                      <div className="text-3xl font-bold text-[#1C32FF] mb-1">5 min</div>
                      <div className="text-sm text-[#6B6B6B]">Durée moyenne</div>
                    </div>
                    <div className="bg-[#F5F7FA] p-4">
                      <div className="text-3xl font-bold text-[#1C32FF] mb-1">18</div>
                      <div className="text-sm text-[#6B6B6B]">Questions ciblées</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Panneau détaillé du thème sélectionné
                <motion.div
                  key={selectedTheme}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute inset-0 bg-white shadow-2xl overflow-y-auto"
                >
                  <div className="p-8 md:p-12">
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedTheme(null)}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <X size={24} className="text-[#6B6B6B]" />
                    </button>

                    {/* Theme header */}
                    {selectedThemeData && IconComponent && (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-16 h-16 flex items-center justify-center"
                            style={{ backgroundColor: selectedThemeData.color }}
                          >
                            <IconComponent className="text-white" size={32} strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#1A1A1A]">
                              {selectedThemeData.title}
                            </h3>
                            <p className="text-sm text-[#6B6B6B]">
                              {selectedThemeDetails?.description}
                            </p>
                          </div>
                        </div>

                        {/* Risk indicator */}
                        {selectedThemeDetails && (
                          <div className={`flex items-start gap-3 p-4 mb-6 ${
                            selectedThemeDetails.riskLevel === 'high'
                              ? 'bg-red-50 border-l-4 border-red-500'
                              : 'bg-yellow-50 border-l-4 border-yellow-500'
                          }`}>
                            <AlertCircle
                              size={20}
                              className={selectedThemeDetails.riskLevel === 'high' ? 'text-red-500' : 'text-yellow-600'}
                            />
                            <div>
                              <div className="font-bold text-sm text-[#1A1A1A] mb-1">
                                {selectedThemeDetails.riskText}
                              </div>
                              <div className="text-xs text-[#6B6B6B]">
                                {selectedThemeDetails.stats}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Key points */}
                        <div className="mb-8">
                          <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <CheckCircle size={20} className="text-[#00D084]" />
                            Points clés de conformité
                          </h4>
                          <ul className="space-y-3">
                            {selectedThemeDetails?.keyPoints.map((point: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-[#1C32FF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                  {idx + 1}
                                </div>
                                <span className="text-[#6B6B6B]">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="space-y-3">
                          <Link
                            href="/compliance-scan"
                            className="block w-full text-center bg-[#1C32FF] text-white font-bold px-6 py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-lg"
                          >
                            Évaluer ce domaine
                          </Link>
                          <Link
                            href="/compliance-scan"
                            className="block w-full text-center border-2 border-[#1C32FF] text-[#1C32FF] font-bold px-6 py-4 transition-all duration-300 hover:bg-[#1C32FF] hover:text-white"
                          >
                            Scanner tous les domaines
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <div className="bg-blue-50 border-t border-blue-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <TrendingUp size={24} className="text-[#1C32FF]" />
            <div>
              <div className="font-bold text-[#1A1A1A]">Proposition 1: Interactive Panel Slide</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Moderne et fluide • ✅ Mobile-friendly • ✅ Garde l'hexagone visible
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
