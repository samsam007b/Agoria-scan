'use client';

import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Lock, Calendar, Leaf, Cpu, GraduationCap, CircleDollarSign } from 'lucide-react';

type Insight = {
  label: string;
  value: string;
  source_label: string;
  source_url: string;
};

type ThemeItem = {
  id: string;
  title: string;
  color: string;
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
  'conformite-reglementation': FileCheck,
  'rse-gouvernance': Leaf,
  'digitalisation-ia': Cpu,
  'securite-cybersecurite': Shield,
  'competences-formation': GraduationCap,
  'financement-gouvernance': CircleDollarSign,
};

export default function ScanContext({
  title,
  intro,
  insights,
  themes,
  event,
}: ScanContextProps) {
  return (
    <section id="campagne-conformite" className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            {title}
          </h2>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1C32FF] flex-shrink-0"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] max-w-4xl leading-relaxed">
          {intro}
        </p>

        {/* Insights clés - statistiques */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="bg-[#F5F7FA] border-l-4 border-[#1C32FF] p-4 sm:p-5 md:p-6 transition-all duration-200 hover:shadow-lg active:shadow-xl"
            >
              <div className="text-xs uppercase font-semibold text-[#6B6B6B] tracking-wide mb-2 sm:mb-3">
                {insight.label}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                {insight.value}
              </div>
              <a
                href={insight.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C32FF] text-xs sm:text-sm font-medium hover:underline transition-all active:scale-95"
              >
                {insight.source_label}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Nos thématiques prioritaires */}
        <div id="thematiques-prioritaires" className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 scroll-mt-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Nos thématiques prioritaires
            </h3>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1C32FF] flex-shrink-0"></div>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => {
              const IconComponent = themeIcons[theme.id] || Shield;
              return (
                <div
                  key={theme.id}
                  className="bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl active:shadow-2xl group hover:border-opacity-100"
                  style={{
                    borderLeftColor: 'var(--hover-color)',
                    borderLeftWidth: '4px',
                    '--hover-color': theme.color,
                  } as React.CSSProperties & { '--hover-color': string }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = theme.color;
                    e.currentTarget.style.backgroundColor = `${theme.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-[#1C32FF] group-hover:scale-110 transition-transform flex-shrink-0">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1A1A1A] flex-1">
                      {theme.title}
                    </h4>
                  </div>
                  <p className="text-[#6B6B6B] mb-3 sm:mb-4 text-sm leading-relaxed">
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
        <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-[#1C32FF] to-[#0D1A99] p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Évaluez votre niveau de conformité maintenant
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Recevez un rapport personnalisé avec des pistes d'actions concrètes et des ressources officielles
          </p>
          <Link
            href="/compliance-scan"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#1C32FF] font-bold px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-50 active:scale-95 transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto"
          >
            Lancer le Compliance Scan
            <ArrowRight size={20} className="sm:w-6 sm:h-6" />
          </Link>
        </div>

      </div>
    </section>
  );
}
