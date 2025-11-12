'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Depth3DVariantPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/design-demos/proposal-3-variants" className="inline-flex items-center gap-2 text-[#1C32FF] hover:text-[#0D1A99] font-semibold">
            <ArrowLeft size={20} />
            Retour aux variantes
          </Link>
          <div className="text-sm font-bold text-[#6B6B6B]">
            Variante E: 3D / Depth Effect
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Variante E en cours de développement</h2>
          <p className="text-[#6B6B6B] mb-6">Cette variante sera bientôt disponible</p>
          <Link href="/design-demos/proposal-3-variants/gradient-glass" className="inline-block bg-[#1C32FF] text-white px-6 py-3 font-bold hover:bg-[#0D1A99]">
            Voir la Variante A (disponible)
          </Link>
        </div>
      </div>
    </div>
  );
}
