'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AnimatedBackgroundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/design-demos/proposal-3-variants" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour aux variantes
          </Link>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <div className="text-6xl mb-6">⚡</div>
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">Variante C: Animation de fond</h1>
          <p className="text-lg text-[#6B6B6B] mb-8">
            Cette variante utilisera des animations CSS/SVG subtiles pour créer un fond dynamique et engageant.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 text-left">
            <h3 className="font-bold text-[#1A1A1A] mb-3">Concept de design:</h3>
            <ul className="space-y-2 text-sm text-[#6B6B6B]">
              <li>• Vagues ou particules animées en arrière-plan</li>
              <li>• Gradient bleu Agoria vers violet dynamique</li>
              <li>• Hexagone avec effet de lueur/glow</li>
              <li>• Micro-interactions au hover</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link href="/design-demos/proposal-3-variants/gradient-glass" className="bg-[#1C32FF] text-white px-6 py-3 font-bold hover:bg-[#0D1A99]">
              Voir Variante A (disponible)
            </Link>
            <Link href="/design-demos/proposal-3-variants" className="border-2 border-[#1C32FF] text-[#1C32FF] px-6 py-3 font-bold hover:bg-blue-50">
              Toutes les variantes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
