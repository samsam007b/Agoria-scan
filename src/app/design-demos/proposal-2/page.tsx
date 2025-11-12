'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
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

const themeContent: Record<string, any> = {
  'data-protection': {
    stat: '63%',
    statLabel: 'Non-conformes RGPD',
    benefits: ['Protection des données', 'Confiance clients', 'Éviter les amendes'],
  },
  'environmental': {
    stat: '78%',
    statLabel: 'Investisseurs exigent ESG',
    benefits: ['Réduction d\'impact', 'Attractivité', 'Reporting conforme'],
  },
  'social-hr': {
    stat: '85%',
    statLabel: 'Talents privilégient RSE',
    benefits: ['Bien-être', 'Rétention', 'Image employeur'],
  },
  'financial': {
    stat: '+23%',
    statLabel: 'Contrôles fiscaux 2024',
    benefits: ['Transparence', 'Optimisation', 'Conformité audit'],
  },
  'digital-ai': {
    stat: '1/3',
    statLabel: 'Victimes cyberattaque',
    benefits: ['Cybersécurité', 'Gouvernance IA', 'Protection données'],
  },
  'industrial': {
    stat: '+15%',
    statLabel: 'Productivité avec certif',
    benefits: ['Qualité', 'Sécurité', 'Certifications ISO'],
  }
};

export default function Proposal2Page() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

  const handleThemeClick = (themeId: string) => {
    setSelectedTheme(selectedTheme === themeId ? null : themeId);
  };

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
            Proposition 2: Card Flip & Expand
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
                La carte correspondante s'agrandira
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

          {/* Côté droit - Grid de cartes */}
          <div className="relative py-12 bg-white px-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
              6 domaines de conformité
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {complianceThemes.map((theme) => {
                const IconComponent = themeIcons[theme.id];
                const content = themeContent[theme.id];
                const isSelected = selectedTheme === theme.id;

                return (
                  <motion.button
                    key={theme.id}
                    layout
                    onClick={() => handleThemeClick(theme.id)}
                    className={`relative bg-white border-2 transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? 'col-span-2 row-span-2 border-[#1C32FF] shadow-xl z-10'
                        : 'border-gray-200 hover:border-[#1C32FF] hover:shadow-md'
                    }`}
                    style={{
                      gridColumn: isSelected ? 'span 2' : 'span 1',
                      gridRow: isSelected ? 'span 2' : 'span 1'
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {!isSelected ? (
                        // Vue compacte
                        <motion.div
                          key="compact"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-4 text-center"
                        >
                          <div
                            className="w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                            style={{ backgroundColor: theme.color }}
                          >
                            <IconComponent className="text-white" size={24} strokeWidth={2} />
                          </div>
                          <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight">
                            {theme.shortTitle}
                          </h3>
                        </motion.div>
                      ) : (
                        // Vue étendue
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, rotateY: -90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          exit={{ opacity: 0, rotateY: 90 }}
                          transition={{ duration: 0.4 }}
                          className="p-6 text-left h-full flex flex-col"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: theme.color }}
                            >
                              <IconComponent className="text-white" size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A]">
                              {theme.title}
                            </h3>
                          </div>

                          {/* Stat */}
                          <div className="bg-[#F5F7FA] p-4 mb-4">
                            <div className="text-3xl font-bold text-[#1C32FF] mb-1">
                              {content.stat}
                            </div>
                            <div className="text-xs text-[#6B6B6B]">
                              {content.statLabel}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="flex-1 mb-4">
                            <div className="text-xs font-bold text-[#6B6B6B] mb-2 uppercase">
                              Points clés
                            </div>
                            <ul className="space-y-2">
                              {content.benefits.map((benefit: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle size={14} className="text-[#00D084] flex-shrink-0" />
                                  <span className="text-[#6B6B6B]">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <Link
                            href="/compliance-scan"
                            className="block w-full text-center bg-[#1C32FF] text-white font-bold px-4 py-3 text-sm hover:bg-[#0D1A99] transition-colors"
                          >
                            Tester ma maturité
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA global */}
            {!selectedTheme && (
              <div className="text-center">
                <Link
                  href="/compliance-scan"
                  className="inline-flex items-center justify-center gap-2 bg-[#1C32FF] text-white font-bold px-8 py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-lg group"
                >
                  Scanner tous les domaines
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info banner */}
      <div className="bg-blue-50 border-t border-blue-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <TrendingUp size={24} className="text-[#1C32FF]" />
            <div>
              <div className="font-bold text-[#1A1A1A]">Proposition 2: Card Flip & Expand</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Vue d'ensemble immédiate • ✅ Animation satisfaisante • ✅ CTA par thème
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
