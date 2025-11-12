'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
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

export default function GradientGlassVariantPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

  const handleThemeClick = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const selectedThemeData = selectedTheme ? complianceThemes.find(t => t.id === selectedTheme) : null;
  const selectedStory = selectedTheme ? themeStories[selectedTheme] : null;
  const IconComponent = selectedTheme ? themeIcons[selectedTheme] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/design-demos/proposal-3-variants" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour aux variantes
          </Link>
          <div className="text-sm font-bold text-[#6B6B6B]">
            Variante D: Split coloré
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Côté gauche - Hexagone avec gradient + glassmorphism */}
          <div className="relative py-12 bg-gradient-to-br from-[#E8E6FF] via-[#F0EEFF] to-[#E1EFFF] flex items-center justify-center lg:border-r-2 lg:border-gray-200 overflow-hidden">
            {/* Motifs géométriques en arrière-plan */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#1C32FF] rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#7B68EE] rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#4169E1] rounded-full blur-2xl"></div>
            </div>

            {/* Particules flottantes */}
            <motion.div
              className="absolute top-20 left-20 w-2 h-2 bg-[#1C32FF] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-32 right-32 w-2 h-2 bg-[#7B68EE] rounded-full"
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#4169E1] rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            <div className="relative text-center z-10">
              {/* Container glassmorphism pour l'hexagone */}
              <motion.div
                className="inline-block p-8 backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2 drop-shadow-sm">
                  Découvrez les enjeux
                </h2>
                <p className="text-sm text-[#6B6B6B] mb-8">
                  Cliquez pour révéler l'histoire de chaque domaine
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
              </motion.div>
            </div>
          </div>

          {/* Côté droit - Storytelling avec design amélioré */}
          <div className="relative py-12 bg-white flex items-center">
            <AnimatePresence mode="wait">
              {!selectedTheme ? (
                // Vue par défaut avec style amélioré
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full px-8 md:px-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb size={32} className="text-[#FFB800]" />
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">
                      La conformité, c'est une histoire
                    </h2>
                  </div>
                  <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                    Chaque domaine de conformité cache des enjeux business critiques, des opportunités de croissance, et des risques à maîtriser.
                  </p>
                  <p className="text-lg font-semibold text-[#1A1A1A] mb-8">
                    👈 Cliquez sur un domaine pour découvrir son histoire et comprendre pourquoi elle vous concerne.
                  </p>
                  <Link
                    href="/compliance-scan"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] text-white font-bold px-8 py-4 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-lg group"
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
                  className="w-full px-8 md:px-12"
                >
                  {selectedThemeData && IconComponent && selectedStory && (
                    <>
                      {/* Theme header with icon animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="flex items-center gap-4 mb-6"
                      >
                        <div
                          className="w-16 h-16 flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: selectedThemeData.color }}
                        >
                          <IconComponent className="text-white" size={32} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">
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
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#FF5722] p-5 shadow-md">
                          <div className="flex items-start gap-3">
                            <AlertTriangle size={24} className="text-[#FF5722] flex-shrink-0 mt-1" />
                            <div>
                              <div className="text-4xl font-bold text-[#FF5722] mb-2">
                                {selectedStory.stat}
                              </div>
                              <div className="text-[#1A1A1A] font-medium">
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
                        className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 mb-6 italic text-[#6B6B6B] border-l-2 border-[#1C32FF] shadow-sm"
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
                              className="flex items-start gap-3"
                            >
                              <div className="w-6 h-6 bg-gradient-to-br from-[#1C32FF] to-[#0D1A99] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 rounded-full mt-0.5 shadow">
                                {idx + 1}
                              </div>
                              <span className="text-[#6B6B6B]">{question}</span>
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
                        <div className="text-xl font-bold text-[#1A1A1A] mb-4">
                          {selectedStory.cta}
                        </div>
                        <Link
                          href="/compliance-scan"
                          className="block w-full text-center bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] text-white font-bold px-6 py-4 transition-all duration-500 hover:shadow-2xl hover:scale-105"
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

      {/* Info banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-blue-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <TrendingUp size={24} className="text-[#1C32FF]" />
            <div>
              <div className="font-bold text-[#1A1A1A]">Variante D: Split coloré</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Moderne et tech-forward • ✅ Effet glassmorphism tendance • ✅ Particules animées • ✅ Gradients subtils
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
