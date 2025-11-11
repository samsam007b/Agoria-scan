import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

export default function ConformityDayPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1C32FF] hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Journée de la conformité
          </h1>
          <div className="w-3 h-3 bg-[#1C32FF]"></div>
        </div>

        <p className="text-xl text-[#6B6B6B] mb-12">
          Un rendez-vous pour passer de l'intention à l'exécution
        </p>

        {/* Event Info */}
        <div className="bg-[#F5F7FA] p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="text-[#1C32FF] flex-shrink-0" size={24} />
              <div>
                <div className="font-semibold text-[#1A1A1A]">Date</div>
                <div className="text-[#6B6B6B]">À confirmer</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-[#1C32FF] flex-shrink-0" size={24} />
              <div>
                <div className="font-semibold text-[#1A1A1A]">Lieu</div>
                <div className="text-[#6B6B6B]">À confirmer</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-[#1C32FF] flex-shrink-0" size={24} />
              <div>
                <div className="font-semibold text-[#1A1A1A]">Format</div>
                <div className="text-[#6B6B6B]">Hybride (présentiel + en ligne)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Program */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
            Au programme
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-[#1C32FF] pl-6 py-4">
              <h3 className="font-bold text-[#1A1A1A] mb-2">
                Ateliers pratiques NIS2 & RGPD
              </h3>
              <p className="text-[#6B6B6B]">
                Sessions interactives pour comprendre et mettre en œuvre les exigences NIS2 et RGPD dans votre PME.
              </p>
            </div>
            <div className="border-l-4 border-[#00D084] pl-6 py-4">
              <h3 className="font-bold text-[#1A1A1A] mb-2">
                Cliniques individuelles
              </h3>
              <p className="text-[#6B6B6B]">
                Consultations personnalisées avec des experts pour analyser votre situation spécifique.
              </p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-6 py-4">
              <h3 className="font-bold text-[#1A1A1A] mb-2">
                Rencontres avec des experts
              </h3>
              <p className="text-[#6B6B6B]">
                Networking et échange d'expériences avec d'autres PME et des spécialistes de la conformité.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Inscriptions bientôt disponibles
          </h3>
          <p className="text-white/90 mb-6">
            Les détails complets et le formulaire d'inscription seront disponibles prochainement.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#1C32FF] font-semibold px-6 py-3 hover:bg-gray-50 transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
