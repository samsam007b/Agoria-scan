'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
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

const previewQuestions: Record<string, any> = {
  'data-protection': {
    question: 'Disposez-vous d\'un registre à jour de tous les traitements de données personnelles?',
    options: [
      { label: 'Oui, complet et à jour', score: 100, correct: true },
      { label: 'Partiellement documenté', score: 50, correct: false },
      { label: 'Non, pas de registre', score: 0, correct: false }
    ]
  },
  'environmental': {
    question: 'Avez-vous mesuré votre empreinte carbone au cours des 12 derniers mois?',
    options: [
      { label: 'Oui, avec méthodologie certifiée', score: 100, correct: true },
      { label: 'Estimation interne seulement', score: 50, correct: false },
      { label: 'Non, pas encore réalisé', score: 0, correct: false }
    ]
  },
  'social-hr': {
    question: 'Réalisez-vous des audits réguliers sur l\'égalité salariale femmes-hommes?',
    options: [
      { label: 'Oui, annuellement avec rapport', score: 100, correct: true },
      { label: 'Analyse ponctuelle', score: 50, correct: false },
      { label: 'Non, pas d\'audit', score: 0, correct: false }
    ]
  },
  'financial': {
    question: 'Votre entreprise dispose-t-elle de procédures anti-blanchiment (AML) documentées?',
    options: [
      { label: 'Oui, conformes et auditées', score: 100, correct: true },
      { label: 'Procédures basiques', score: 50, correct: false },
      { label: 'Non, pas de procédures', score: 0, correct: false }
    ]
  },
  'digital-ai': {
    question: 'Avez-vous une politique de gouvernance de l\'intelligence artificielle?',
    options: [
      { label: 'Oui, politique validée et appliquée', score: 100, correct: true },
      { label: 'En cours d\'élaboration', score: 50, correct: false },
      { label: 'Non, pas encore', score: 0, correct: false }
    ]
  },
  'industrial': {
    question: 'Vos équipements industriels sont-ils certifiés selon les normes ISO en vigueur?',
    options: [
      { label: 'Oui, certifications à jour', score: 100, correct: true },
      { label: 'Partiellement certifié', score: 50, correct: false },
      { label: 'Non, pas de certification', score: 0, correct: false }
    ]
  }
};

export default function Proposal6Page() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [hexagonSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('large');

  const handleThemeClick = (themeId: string) => {
    setSelectedTheme(themeId);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  const selectedThemeData = selectedTheme ? complianceThemes.find(t => t.id === selectedTheme) : null;
  const selectedQuestion = selectedTheme ? previewQuestions[selectedTheme] : null;
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
            Proposition 6: Gamified Preview
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
                Testez vos connaissances
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                1 question par domaine pour découvrir
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

          {/* Côté droit - Mini-quiz */}
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
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                      Goûtez au scan
                    </h2>
                    <p className="text-lg text-[#6B6B6B]">
                      Répondez à une question représentative de chaque domaine et découvrez où vous en êtes.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#1C32FF] to-[#0D1A99] p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Comment ça marche?</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-white text-[#1C32FF] flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                        <span>Cliquez sur un domaine de l'hexagone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-white text-[#1C32FF] flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                        <span>Répondez à la question de preview</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-white text-[#1C32FF] flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                        <span>Découvrez votre score et lancez le scan complet</span>
                      </li>
                    </ol>
                  </div>

                  <div className="mt-8 text-center">
                    <Link
                      href="/compliance-scan"
                      className="inline-flex items-center justify-center gap-2 bg-[#1C32FF] text-white font-bold px-8 py-4 transition-all duration-300 hover:bg-[#0D1A99] hover:shadow-lg group"
                    >
                      Ou lancez directement le scan complet
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                // Question de preview
                <motion.div
                  key={selectedTheme}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full px-8 md:px-12"
                >
                  {selectedThemeData && IconComponent && selectedQuestion && (
                    <>
                      {/* Theme header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div
                          className="w-16 h-16 flex items-center justify-center"
                          style={{ backgroundColor: selectedThemeData.color }}
                        >
                          <IconComponent className="text-white" size={32} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#6B6B6B] uppercase mb-1">
                            Question Preview
                          </div>
                          <h3 className="text-xl font-bold text-[#1A1A1A]">
                            {selectedThemeData.title}
                          </h3>
                        </div>
                      </div>

                      {/* Question */}
                      <div className="bg-[#F5F7FA] p-6 mb-6">
                        <p className="text-lg font-semibold text-[#1A1A1A]">
                          {selectedQuestion.question}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-3 mb-8">
                        {selectedQuestion.options.map((option: any, index: number) => (
                          <motion.button
                            key={index}
                            onClick={() => !showResult && handleAnswer(index)}
                            disabled={showResult}
                            className={`w-full p-4 text-left border-2 transition-all font-medium ${
                              selectedAnswer === index
                                ? showResult && option.correct
                                  ? 'border-[#00D084] bg-green-50'
                                  : showResult && !option.correct
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-[#1C32FF] bg-blue-50'
                                : 'border-gray-200 hover:border-[#1C32FF] hover:bg-[#F5F7FA]'
                            } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            whileHover={!showResult ? { scale: 1.02 } : {}}
                            whileTap={!showResult ? { scale: 0.98 } : {}}
                          >
                            <div className="flex items-center justify-between">
                              <span className={selectedAnswer === index && showResult ? (option.correct ? 'text-[#00D084]' : 'text-red-600') : 'text-[#1A1A1A]'}>
                                {option.label}
                              </span>
                              {selectedAnswer === index && showResult && (
                                option.correct ? (
                                  <CheckCircle size={20} className="text-[#00D084]" />
                                ) : (
                                  <XCircle size={20} className="text-red-500" />
                                )
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* Result */}
                      <AnimatePresence>
                        {showResult && selectedAnswer !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className={`p-6 mb-6 ${
                              selectedQuestion.options[selectedAnswer].correct
                                ? 'bg-green-50 border-l-4 border-[#00D084]'
                                : 'bg-orange-50 border-l-4 border-orange-500'
                            }`}>
                              <div className="font-bold text-lg text-[#1A1A1A] mb-2">
                                {selectedQuestion.options[selectedAnswer].correct
                                  ? '✓ Excellente réponse!'
                                  : '⚠️ Il y a des opportunités d\'amélioration'}
                              </div>
                              <p className="text-sm text-[#6B6B6B]">
                                Le scan complet évalue 18 aspects critiques comme celui-ci pour vous donner un diagnostic précis.
                              </p>
                            </div>

                            <Link
                              href="/compliance-scan"
                              className="block w-full text-center bg-[#1C32FF] text-white font-bold px-6 py-4 hover:bg-[#0D1A99] transition-colors"
                            >
                              Découvrez votre score complet →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
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
              <div className="font-bold text-[#1A1A1A]">Proposition 6: Gamified Preview</div>
              <div className="text-sm text-[#6B6B6B]">
                ✅ Engagement immédiat • ✅ Gamification • ✅ Taux de conversion élevé
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
