'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const proposals = [
  {
    id: 1,
    title: 'Interactive Panel Slide',
    description: 'Un panneau coulisse depuis la droite avec détails du thème au clic',
    pros: ['Moderne et fluide', 'Mobile-friendly', 'Garde l\'hexagone visible'],
    href: '/design-demos/proposal-1'
  },
  {
    id: 2,
    title: 'Card Flip & Expand',
    description: '6 mini-cartes à droite qui s\'agrandissent et flip au clic',
    pros: ['Vue d\'ensemble immédiate', 'Animation satisfaisante', 'CTA par thème'],
    href: '/design-demos/proposal-2'
  },
  {
    id: 3,
    title: 'Storytelling Flow',
    description: 'Zone narrative qui se transforme en mini-story par thème',
    pros: ['Crée de la curiosité', 'Éducatif', 'Différenciant'],
    href: '/design-demos/proposal-3'
  },
  {
    id: 4,
    title: 'Progressive Disclosure',
    description: '3 niveaux de détails qui se révèlent progressivement avec tabs',
    pros: ['Très informatif', 'UX progressive', 'Valorise l\'expertise'],
    href: '/design-demos/proposal-4'
  },
  {
    id: 5,
    title: 'Split Decision',
    description: '2 modes: Scan complet ou Explorer par thème avec grid de cartes',
    pros: ['Simplifie le choix', 'Parcours clairs', 'Développement rapide'],
    href: '/design-demos/proposal-5'
  },
  {
    id: 6,
    title: 'Gamified Preview',
    description: 'Mini-quiz avec 1 question représentative par thème',
    pros: ['Engagement immédiat', 'Gamification', 'Taux de conversion élevé'],
    href: '/design-demos/proposal-6'
  }
];

export default function DesignDemosPage() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Design Demos - Section Hero
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
            Explorez 6 propositions créatives pour améliorer la section hero avec l'hexagone interactif.
            Cliquez sur une proposition pour voir la démo en action.
          </p>
        </div>

        {/* Grid of proposals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposals.map((proposal) => (
            <Link
              key={proposal.id}
              href={proposal.href}
              className="group bg-white border-2 border-gray-200 hover:border-[#1C32FF] transition-all duration-300 overflow-hidden"
              onClick={() => setSelectedProposal(proposal.id)}
            >
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-[#1C32FF] text-white font-bold flex items-center justify-center text-sm">
                    {proposal.id}
                  </div>
                  {proposal.id === 1 && (
                    <span className="text-xs font-bold text-[#00D084] bg-[#00D084]/10 px-2 py-1">
                      RECOMMANDÉ
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1C32FF] transition-colors">
                  {proposal.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
                  {proposal.description}
                </p>

                {/* Pros */}
                <div className="space-y-2">
                  {proposal.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#00D084] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#6B6B6B]">{pro}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-[#1C32FF] group-hover:underline">
                    Voir la démo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-12 bg-blue-50 border-l-4 border-[#1C32FF] p-6">
          <h3 className="font-bold text-[#1A1A1A] mb-2">
            💡 Comment choisir ?
          </h3>
          <ul className="text-sm text-[#6B6B6B] space-y-1">
            <li>• <strong>Proposition 1</strong> : Meilleur équilibre moderne/simple</li>
            <li>• <strong>Proposition 5</strong> : Plus safe, développement rapide</li>
            <li>• <strong>Proposition 6</strong> : Plus innovant, fort engagement</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
