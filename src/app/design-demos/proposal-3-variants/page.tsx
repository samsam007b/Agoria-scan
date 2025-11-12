'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye } from 'lucide-react';

const variants = [
  {
    id: 'gradient-glass',
    title: 'Gradient + Glassmorphism',
    description: 'Fond gradient bleu/violet + hexagone glassmorphism',
    badge: 'RECOMMANDÉ',
    href: '/design-demos/proposal-3-variants/gradient-glass'
  },
  {
    id: 'photo-overlay',
    title: 'Photo + Overlay',
    description: 'Photo business/tech en arrière-plan + overlay gradient',
    badge: 'CORPORATE CHIC',
    href: '/design-demos/proposal-3-variants/photo-overlay'
  },
  {
    id: 'animated-background',
    title: 'Animation de fond',
    description: 'Fond animé avec particules/vagues + hexagone lumineux',
    badge: 'AUDACIEUX',
    href: '/design-demos/proposal-3-variants/animated-background'
  },
  {
    id: 'split-colored',
    title: 'Split coloré',
    description: 'Fond bleu Agoria full + hexagone blanc inversé',
    badge: 'ÉNERGIQUE',
    href: '/design-demos/proposal-3-variants/split-colored'
  },
  {
    id: 'depth-3d',
    title: '3D / Depth Effect',
    description: 'Hexagone avec effet 3D et perspective subtile',
    badge: 'PREMIUM',
    href: '/design-demos/proposal-3-variants/depth-3d'
  }
];

export default function Proposal3VariantsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/design-demos" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour aux démos
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Proposition 3 - Variantes Visuelles
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto mb-6">
            5 styles modernes et smooth pour la Proposition 3 (Storytelling Flow).
            Même concept UX, différentes esthétiques visuelles.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1C32FF] px-4 py-2 text-sm font-semibold">
            <Eye size={16} />
            Cliquez sur une variante pour voir la démo complète
          </div>
        </div>

        {/* Grid of variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {variants.map((variant, index) => (
            <Link
              key={variant.id}
              href={variant.href}
              className="group bg-white border-2 border-gray-200 hover:border-[#1C32FF] transition-all duration-300 overflow-hidden hover:shadow-xl"
            >
              <div className="p-6">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#1C32FF] text-white font-bold flex items-center justify-center text-lg">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 ${
                    variant.badge === 'RECOMMANDÉ'
                      ? 'bg-[#00D084] text-white'
                      : variant.badge === 'CORPORATE CHIC'
                      ? 'bg-purple-100 text-purple-700'
                      : variant.badge === 'AUDACIEUX'
                      ? 'bg-orange-100 text-orange-700'
                      : variant.badge === 'ÉNERGIQUE'
                      ? 'bg-pink-100 text-pink-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {variant.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1C32FF] transition-colors">
                  {variant.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] mb-6 leading-relaxed">
                  {variant.description}
                </p>

                {/* Preview placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4">
                  <Eye size={32} className="text-gray-400" />
                </div>

                {/* CTA */}
                <div className="text-sm font-bold text-[#1C32FF] group-hover:underline">
                  Voir la démo →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison info */}
        <div className="bg-white border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
            📊 Comparaison des variantes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-[#1A1A1A]">Variante</th>
                  <th className="text-left py-3 px-4 font-bold text-[#1A1A1A]">Modernité</th>
                  <th className="text-left py-3 px-4 font-bold text-[#1A1A1A]">Sophistication</th>
                  <th className="text-left py-3 px-4 font-bold text-[#1A1A1A]">Audace</th>
                  <th className="text-left py-3 px-4 font-bold text-[#1A1A1A]">Dev Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-semibold">A. Gradient + Glass</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-[#00D084]">Moyen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-semibold">B. Photo + Overlay</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐</td>
                  <td className="py-3 px-4 text-[#00D084]">Rapide</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-semibold">C. Animated Background</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-orange-600">Long</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-semibold">D. Split Colored</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-[#00D084]">Rapide</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">E. 3D / Depth</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-orange-600">Long</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] text-white p-8">
          <h3 className="text-2xl font-bold mb-4">💡 Ma recommandation</h3>
          <p className="text-lg mb-4">
            <strong>Variante A (Gradient + Glassmorphism)</strong> offre le meilleur équilibre entre modernité, sophistication et faisabilité.
          </p>
          <p className="text-white/90">
            Elle donne un look premium et tech-forward sans être trop audacieuse. Le glassmorphism est très tendance en 2024 et apporte une touche de légèreté et d'élégance.
          </p>
        </div>
      </main>
    </div>
  );
}
