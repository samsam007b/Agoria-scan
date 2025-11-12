'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Info, HelpCircle, Award } from 'lucide-react';
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

const themeTabsContent: Record<string, any> = {
  'data-protection': {
    enjeux: {
      title: 'Enjeux critiques',
      points: ['Amendes RGPD jusqu\'à 4% du CA', 'Perte de confiance client', 'Sanctions pénales possibles']
    },
    questions: {
      title: 'Questions types du scan',
      points: ['Cartographie des données personnelles', 'Procédures de consentement', 'Plan de gestion des violations']
    },
    benefices: {
      title: 'Bénéfices de la conformité',
      points: ['Confiance client renforcée', 'Avantage concurrentiel', 'Réduction des risques juridiques']
    }
  },
  // Simplifié pour la démo - même structure pour les autres thèmes
};

export default function Proposal4Page() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'enjeux' | 'questions' | 'benefices'>('enjeux');
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

  const handleThemeClick = (themeId: string) => {
    setSelectedTheme(themeId);
    setActiveTab('enjeux');
  };

  const selectedThemeData = selectedTheme ? complianceThemes.find(t => t.id === selectedTheme) : null;
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
            Proposition 4: Progressive Disclosure
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
                Explorez en profondeur
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                3 niveaux d'information par domaine
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

          {/* Côté droit - Progressive disclosure with tabs */}
          <div className="relative py-12 bg-white">
            <AnimatePresence mode="wait">
              {!selectedTheme ? (
                // Niveau 0 - Vue par défaut
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-8 md:px-12 flex flex-col justify-center h-full"
                >
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-5">
                    6 domaines, 1 diagnostic
                  </h2>
                  <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                    Découvrez chaque domaine en profondeur avec 3 niveaux d'information progressifs.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Info size={20} className="text-[#1C32FF]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1A1A1A] mb-1">Niveau 1: Enjeux</div>
                        <div className="text-sm text-[#6B6B6B]">Comprenez les risques et obligations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <HelpCircle size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1A1A1A] mb-1">Niveau 2: Questions types</div>
                        <div className="text-sm text-[#6B6B6B]">Découvrez ce que nous évaluons</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Award size={20} className="text-[#00D084]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1A1A1A] mb-1">Niveau 3: Bénéfices</div>
                        <div className="text-sm text-[#6B6B6B]">Voyez les opportunités de conformité</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/compliance-scan"
                    className="inline-flex items-center justify-center gap-2 bg-[#1C32FF] text-white font-bold px-8 py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-lg text-lg group w-full sm:w-auto"
                  >
                    Lancer le scan complet
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                // Vue détaillée avec tabs
                <motion.div
                  key={selectedTheme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col"
                >
                  {/* Theme header */}
                  {selectedThemeData && IconComponent && (
                    <div className="px-8 md:px-12 py-6 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 flex items-center justify-center"
                          style={{ backgroundColor: selectedThemeData.color }}
                        >
                          <IconComponent className="text-white" size={32} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">
                          {selectedThemeData.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 px-8 md:px-12">
                    <button
                      onClick={() => setActiveTab('enjeux')}
                      className={`flex-1 py-4 text-sm font-bold transition-colors border-b-2 ${
                        activeTab === 'enjeux'
                          ? 'border-[#1C32FF] text-[#1C32FF]'
                          : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
                      }`}
                    >
                      <Info size={16} className="inline mr-2" />
                      Enjeux
                    </button>
                    <button
                      onClick={() => setActiveTab('questions')}
                      className={`flex-1 py-4 text-sm font-bold transition-colors border-b-2 ${
                        activeTab === 'questions'
                          ? 'border-[#1C32FF] text-[#1C32FF]'
                          : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
                      }`}
                    >
                      <HelpCircle size={16} className="inline mr-2" />
                      Questions
                    </button>
                    <button
                      onClick={() => setActiveTab('benefices')}
                      className={`flex-1 py-4 text-sm font-bold transition-colors border-b-2 ${
                        activeTab === 'benefices'
                          ? 'border-[#1C32FF] text-[#1C32FF]'
                          : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
                      }`}
                    >
                      <Award size={16} className="inline mr-2" />
                      Bénéfices
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="flex-1 px-8 md:px-12 py-6 overflow-y-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeTab === 'enjeux' && (
                          <div>
                            <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Enjeux critiques</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3 p-4 bg-red-50">
                                <span className="text-red-600">⚠️</span>
                                <span className="text-[#6B6B6B]">Amendes et sanctions financières importantes</span>
                              </li>
                              <li className="flex items-start gap-3 p-4 bg-orange-50">
                                <span className="text-orange-600">⚠️</span>
                                <span className="text-[#6B6B6B]">Risques réputationnels et perte de confiance</span>
                              </li>
                              <li className="flex items-start gap-3 p-4 bg-yellow-50">
                                <span className="text-yellow-600">⚠️</span>
                                <span className="text-[#6B6B6B]">Obligations légales en constante évolution</span>
                              </li>
                            </ul>
                          </div>
                        )}

                        {activeTab === 'questions' && (
                          <div>
                            <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Ce que nous évaluons</h4>
                            <div className="space-y-4">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="border-l-4 border-[#1C32FF] pl-4 py-2">
                                  <div className="font-semibold text-[#1A1A1A] mb-1">Question exemple {i}</div>
                                  <div className="text-sm text-[#6B6B6B]">
                                    Évaluation de votre maturité sur cet aspect spécifique...
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'benefices' && (
                          <div>
                            <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Opportunités de conformité</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3 p-4 bg-green-50">
                                <span className="text-[#00D084]">✓</span>
                                <span className="text-[#6B6B6B]">Avantage concurrentiel et différenciation</span>
                              </li>
                              <li className="flex items-start gap-3 p-4 bg-blue-50">
                                <span className="text-[#1C32FF]">✓</span>
                                <span className="text-[#6B6B6B]">Optimisation des processus internes</span>
                              </li>
                              <li className="flex items-start gap-3 p-4 bg-purple-50">
                                <span className="text-purple-600">✓</span>
                                <span className="text-[#6B6B6B]">Confiance renforcée des parties prenantes</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* CTA */}
                  <div className="px-8 md:px-12 py-6 border-t border-gray-200">
                    <Link
                      href="/compliance-scan"
                      className="block w-full text-center bg-[#1C32FF] text-white font-bold px-6 py-4 hover:bg-[#0D1A99] transition-colors"
                    >
                      Lancer le scan sur ce thème
                    </Link>
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
              <div className="font-bold text-[#1A1A1A]">Proposition 4: Progressive Disclosure</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Très informatif • ✅ UX progressive • ✅ Valorise l'expertise
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
