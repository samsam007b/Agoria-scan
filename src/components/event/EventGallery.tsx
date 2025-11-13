'use client';

import Image from 'next/image';
import { Calendar, Users, Lightbulb, Network } from 'lucide-react';

export default function EventGallery() {
  const eventPhotos = [
    {
      src: '/event/auditorium.jpg',
      alt: 'Auditorium - Journée wallonne de la conformité',
      caption: 'Vue d\'ensemble de l\'auditorium principal',
      category: 'conference'
    },
    {
      src: '/event/compliance-scan-stand.jpg',
      alt: 'Stand Compliance Scan interactif',
      caption: 'Le stand Compliance Scan avec QR code',
      category: 'interactive'
    },
    {
      src: '/event/networking-1.jpg',
      alt: 'Networking - Célébrons la conformité',
      caption: 'Moments de networking et d\'échanges',
      category: 'networking'
    },
    {
      src: '/event/networking-2.jpg',
      alt: 'Discussions professionnelles',
      caption: 'Échanges d\'expertise entre participants',
      category: 'networking'
    }
  ];

  const eventHighlights = [
    {
      icon: Users,
      title: 'Plus de 300 participants',
      description: 'Dirigeants, compliance officers et experts réunis'
    },
    {
      icon: Lightbulb,
      title: '6 thématiques clés',
      description: 'Conformité réglementaire, RSE, Digital, Cybersécurité, Formation, Financement'
    },
    {
      icon: Network,
      title: 'Networking premium',
      description: 'Échanges de bonnes pratiques et opportunités de collaboration'
    }
  ];

  return (
    <section id="evenement-conformite" className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero de l'événement */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Calendar className="text-[#1C32FF]" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              La Journée de la conformité
            </h2>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1C32FF] flex-shrink-0"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] max-w-4xl leading-relaxed mb-4">
            Un événement unique pour passer de l'intention à l'exécution en matière de conformité.
          </p>
          <p className="text-base sm:text-lg text-[#6B6B6B] max-w-4xl leading-relaxed">
            Le <span className="font-bold text-[#1C32FF]">20 mars</span>, rejoignez-nous pour une journée d'échanges, de découvertes et de networking avec les meilleurs experts de la conformité en Belgique.
          </p>
        </div>

        {/* Photo Hero - Auditorium */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-10 sm:mb-12 md:mb-16 overflow-hidden shadow-2xl">
          <Image
            src={eventPhotos[0].src}
            alt={eventPhotos[0].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow-lg">
              {eventPhotos[0].caption}
            </p>
          </div>
        </div>

        {/* Highlights de l'événement */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-10 sm:mb-12 md:mb-16">
          {eventHighlights.map((highlight, i) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={i}
                className="bg-[#F5F7FA] border-l-4 border-[#1C32FF] p-5 sm:p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className="p-2.5 bg-[#1C32FF] flex-shrink-0">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6B6B6B]">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Le Compliance Scan en action */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Le Compliance Scan en action
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden shadow-xl">
              <Image
                src={eventPhotos[1].src}
                alt={eventPhotos[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg text-[#6B6B6B] mb-4 leading-relaxed">
                Les participants ont découvert notre outil innovant de diagnostic de conformité :
                <span className="font-bold text-[#1C32FF]"> le Compliance Scan</span>.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Diagnostic instantané via QR code',
                  'Analyse personnalisée sur 6 domaines',
                  'Rapport détaillé avec recommandations',
                  'Accompagnement par nos experts'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-[#1A1A1A]">
                    <span className="text-[#00C48C] mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Networking et échanges */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Networking & Échanges
          </h3>
          <p className="text-base sm:text-lg text-[#6B6B6B] mb-6 sm:mb-8 max-w-3xl">
            Des moments privilégiés pour échanger des bonnes pratiques, partager des retours d'expérience
            et créer des opportunités de collaboration entre professionnels de la conformité.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {eventPhotos.slice(2).map((photo, i) => (
              <div key={i} className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden shadow-xl group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Prochaine édition */}
        <div className="bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ne manquez pas la prochaine édition !
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Inscrivez-vous pour être informé de la prochaine Journée de la conformité et commencez dès maintenant
            votre diagnostic avec le Compliance Scan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/compliance-scan"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1C32FF] font-bold px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-50 transition-all shadow-xl text-base sm:text-lg w-full sm:w-auto"
            >
              Lancer le Compliance Scan
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 hover:bg-white/10 transition-all text-base sm:text-lg w-full sm:w-auto"
            >
              Rester informé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
