'use client';

import Link from 'next/link';
import { ArrowRight, Users, Shield, FileCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Bannière Événement */}
      <div className="bg-gradient-to-r from-[#003E7E] to-[#0073CF] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base font-semibold">
            🎯 Journée de la Conformité - Édition spéciale 2025
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003E7E] via-[#0073CF] to-[#003E7E] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Journée de la Conformité 2025
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Évaluez votre niveau de conformité en 5 minutes
            </p>
            <p className="text-base md:text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Un outil d'auto-évaluation gratuit pour identifier vos priorités en matière de
              cybersécurité, conformité réglementaire et RGPD.
            </p>

            {/* Stats Counter */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Users className="text-blue-200" size={20} />
                <span className="text-sm font-semibold">
                  Déjà <span className="text-[#7CB342] font-bold">127 entreprises</span> ont fait le test
                </span>
              </div>
            </div>

            {/* CTA Principal */}
            <Link
              href="/compliance-scan"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff5520] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              LANCER LE COMPLIANCE SCAN
              <ArrowRight size={24} />
            </Link>

            {/* Features Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#0073CF] p-4 rounded-full">
                    <Shield className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Cybersécurité</h3>
                <p className="text-sm text-blue-100">
                  Évaluez vos mesures de protection digitale et votre conformité NIS2
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#7CB342] p-4 rounded-full">
                    <FileCheck className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Conformité Sociale</h3>
                <p className="text-sm text-blue-100">
                  Vérifiez votre conformité aux obligations légales et sociales belges
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#FF6B35] p-4 rounded-full">
                    <svg
                      className="text-white"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">RGPD & Données</h3>
                <p className="text-sm text-blue-100">
                  Contrôlez votre conformité RGPD et votre gouvernance des données
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section factice - Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003E7E] text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Conseil stratégique', desc: 'Accompagnement personnalisé pour votre transformation' },
              { title: 'Formation & Academy', desc: 'Développez les compétences de vos équipes' },
              { title: 'Networking & Events', desc: 'Connectez-vous avec l\'écosystème technologique' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 opacity-60 cursor-not-allowed"
                title="Section non disponible dans la démo"
              >
                <h3 className="text-xl font-bold text-[#003E7E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button disabled className="text-[#0073CF] font-semibold text-sm">
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
