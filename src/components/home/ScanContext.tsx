'use client';

import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Lock, Calendar } from 'lucide-react';

type Insight = {
  label: string;
  value: string;
  source_label: string;
  source_url: string;
};

type ThemeItem = {
  id: string;
  title: string;
  why: string;
  help: string[];
  sources: { label: string; url: string }[];
};

type EventBox = {
  title: string;
  bullets: string[];
  cta_label: string;
  cta_url: string;
};

interface ScanContextProps {
  title: string;
  intro: string;
  insights: Insight[];
  themes: ThemeItem[];
  event: EventBox;
}

const themeIcons: Record<string, any> = {
  'reg-social': FileCheck,
  'rgpd': Lock,
  'digital-sec': Shield,
};

export default function ScanContext({
  title,
  intro,
  insights,
  themes,
  event,
}: ScanContextProps) {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            {title}
          </h2>
          <div className="w-3 h-3 bg-[#1C32FF] flex-shrink-0"></div>
        </div>
        <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-4xl leading-relaxed">
          {intro}
        </p>

        {/* Insights clés - statistiques */}
        <div className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="bg-[#F5F7FA] border-l-4 border-[#1C32FF] p-6 transition-all duration-200 hover:shadow-lg"
            >
              <div className="text-xs sm:text-sm uppercase font-semibold text-[#6B6B6B] tracking-wide mb-3">
                {insight.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                {insight.value}
              </div>
              <a
                href={insight.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C32FF] text-sm font-medium hover:underline transition-all"
              >
                {insight.source_label}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Nos thématiques prioritaires */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Nos thématiques prioritaires
            </h3>
            <div className="w-3 h-3 bg-[#1C32FF] flex-shrink-0"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {themes.map((theme) => {
              const IconComponent = themeIcons[theme.id] || Shield;
              return (
                <div
                  key={theme.id}
                  className="bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-200 hover:shadow-xl group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#1C32FF] group-hover:scale-110 transition-transform">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-[#1A1A1A] flex-1">
                      {theme.title}
                    </h4>
                  </div>
                  <p className="text-[#6B6B6B] mb-4 text-sm sm:text-base leading-relaxed">
                    {theme.why}
                  </p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#1A1A1A] mb-2">
                      Ce que nous aidons :
                    </div>
                    <ul className="space-y-1">
                      {theme.help.map((help, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[#6B6B6B]"
                        >
                          <span className="text-[#00C48C] mt-1">✓</span>
                          <span>{help}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {theme.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#1C32FF] text-xs hover:underline transition-all"
                      >
                        <ArrowRight size={12} />
                        {source.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Scan */}
        <div className="mt-16 bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] p-8 sm:p-10 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Évaluez votre niveau de conformité maintenant
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Recevez un rapport personnalisé avec des pistes d'actions concrètes et des ressources officielles
          </p>
          <Link
            href="/compliance-scan"
            className="inline-flex items-center gap-3 bg-white text-[#1C32FF] font-bold px-8 py-4 hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl text-lg"
          >
            Lancer le Compliance Scan
            <ArrowRight size={24} />
          </Link>
        </div>

        {/* Événement - Journée de la conformité */}
        <div className="mt-16 bg-[#F5F7FA] p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-[#1C32FF]" size={32} />
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {event.title}
              </h3>
            </div>
            <p className="text-[#6B6B6B] mb-4">
              Un rendez-vous pour passer de l'intention à l'exécution
            </p>
            <ul className="space-y-2">
              {event.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[#1A1A1A] font-medium"
                >
                  <span className="text-[#1C32FF] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={event.cta_url}
              className="inline-flex items-center gap-2 bg-[#1C32FF] px-6 py-3 text-white font-semibold hover:bg-[#0D1A99] transition-all shadow-lg hover:shadow-xl"
            >
              {event.cta_label}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
