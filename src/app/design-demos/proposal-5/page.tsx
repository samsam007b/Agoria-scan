'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Zap, Search } from 'lucide-react';
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

export default function Proposal5Page() {
  const [mode, setMode] = useState<'decision' | 'explore'>('decision');
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

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
            Proposition 5: Split Decision
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
                Compliance Hub
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                6 domaines de conformité interconnectés
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
                onThemeClick={() => setMode('explore')}
              />
            </div>
          </div>

          {/* Côté droit - 2 modes */}
          <div className="relative py-12 bg-white flex items-center">
            <AnimatePresence mode="wait">
              {mode === 'decision' ? (
                // Mode A - Choix initial
                <motion.div
                  key="decision"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-8 md:px-12"
                >
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                    Par où commencer ?
                  </h2>
                  <p className="text-lg text-[#6B6B6B] mb-10">
                    Choisissez votre approche selon vos besoins
                  </p>

                  <div className="space-y-4">
                    {/* Option 1: Scan complet */}
                    <Link
                      href="/compliance-scan"
                      className="group block bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-white/20 flex items-center justify-center">
                              <Zap className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                              Scan complet
                            </h3>
                          </div>
                          <p className="text-white/90 mb-4">
                            Diagnostic global sur les 6 domaines en 5 minutes. Recommandé pour une vue d'ensemble.
                          </p>
                          <div className="flex items-center gap-6 text-sm text-white/80">
                            <div>
                              <span className="font-bold text-white text-lg">18</span> questions
                            </div>
                            <div>
                              <span className="font-bold text-white text-lg">5</span> minutes
                            </div>
                            <div>
                              <span className="font-bold text-white text-lg">6</span> domaines
                            </div>
                          </div>
                        </div>
                        <ArrowRight
                          size={32}
                          className="text-white flex-shrink-0 group-hover:translate-x-2 transition-transform"
                        />
                      </div>
                    </Link>

                    {/* Option 2: Explorer par thème */}
                    <button
                      onClick={() => setMode('explore')}
                      className="group block w-full bg-white border-2 border-[#1C32FF] p-8 transition-all duration-300 hover:bg-[#F5F7FA] hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-[#1C32FF]/10 flex items-center justify-center">
                              <Search className="text-[#1C32FF]" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1C32FF]">
                              Explorer par thème
                            </h3>
                          </div>
                          <p className="text-[#6B6B6B] mb-4">
                            Découvrez chaque domaine en détail avant de vous lancer. Idéal si vous ciblez un domaine spécifique.
                          </p>
                          <div className="text-sm font-semibold text-[#1C32FF]">
                            Voir les 6 thématiques →
                          </div>
                        </div>
                        <ArrowRight
                          size={32}
                          className="text-[#1C32FF] flex-shrink-0 group-hover:translate-x-2 transition-transform"
                        />
                      </div>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-[#1C32FF] mb-1">500+</div>
                        <div className="text-xs text-[#6B6B6B]">Entreprises scannées</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#1C32FF] mb-1">5 min</div>
                        <div className="text-xs text-[#6B6B6B]">Temps moyen</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#1C32FF] mb-1">4.8/5</div>
                        <div className="text-xs text-[#6B6B6B]">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Mode B - Exploration par thème
                <motion.div
                  key="explore"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-8 md:px-12"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#1A1A1A]">
                      6 thématiques
                    </h2>
                    <button
                      onClick={() => setMode('decision')}
                      className="text-sm font-semibold text-[#1C32FF] hover:underline"
                    >
                      ← Retour
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {complianceThemes.map((theme) => {
                      const IconComponent = themeIcons[theme.id];
                      return (
                        <Link
                          key={theme.id}
                          href="/compliance-scan"
                          className="group flex items-center gap-4 p-4 bg-white border-2 border-gray-200 hover:border-[#1C32FF] hover:shadow-md transition-all"
                        >
                          <div
                            className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: theme.color }}
                          >
                            <IconComponent className="text-white" size={24} strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#1C32FF] transition-colors">
                              {theme.title}
                            </h3>
                            <p className="text-sm text-[#6B6B6B] line-clamp-1">
                              {theme.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={20}
                            className="text-[#6B6B6B] group-hover:text-[#1C32FF] group-hover:translate-x-1 transition-all flex-shrink-0"
                          />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="bg-[#F5F7FA] p-6">
                    <div className="text-sm font-bold text-[#1A1A1A] mb-2">
                      💡 Conseil Agoria
                    </div>
                    <p className="text-sm text-[#6B6B6B]">
                      Pour une évaluation complète, nous recommandons le scan global qui couvre les 6 domaines et identifie vos priorités.
                    </p>
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
              <div className="font-bold text-[#1A1A1A]">Proposition 5: Split Decision</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Simplifie le choix • ✅ Parcours clairs • ✅ Développement rapide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
