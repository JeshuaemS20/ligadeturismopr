import { ArrowRight, BarChart3, Lock, MapPin, Route, Sparkles } from 'lucide-react';
import { Reveal, SpotlightCard } from '../animations.jsx';
import SectionHeading from './SectionHeading.jsx';
import { SITE, STRATEGIC_AREAS } from '../../data/content.js';

const TONES = {
  navy: {
    bar: 'bg-navy',
    icon: 'bg-navy/10 text-navy',
    dot: 'bg-navy',
    spotlight: 'rgba(3, 40, 89, 0.12)',
  },
  green: {
    bar: 'bg-tropical',
    icon: 'bg-tropical/10 text-tropical',
    dot: 'bg-tropical',
    spotlight: 'rgba(3, 107, 56, 0.14)',
  },
  gold: {
    bar: 'bg-gold',
    icon: 'bg-gold/20 text-gold-ink',
    dot: 'bg-gold',
    spotlight: 'rgba(229, 184, 34, 0.22)',
  },
};

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" aria-labelledby="hacemos-title" className="border-t border-navy/10 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="hacemos-title"
          eyebrow="Pilares Estratégicos"
          title="¿Qué hacemos por el turismo en Puerto Rico?"
          description="Cuatro áreas de trabajo que fortalecen la competitividad, la identidad y la sostenibilidad de nuestra industria."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {STRATEGIC_AREAS.map((area, i) => {
            const Icon = area.icon;
            const t = TONES[area.tone];
            return (
              <Reveal key={area.title} delay={(i % 2) * 120}>
                <SpotlightCard
                  as="article"
                  spotlightColor={t.spotlight}
                  className="group h-full border border-navy/10 bg-white shadow-md shadow-navy/5"
                >
                  <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1.5 ${t.bar}`} />
                  <div className="flex h-full flex-col p-7 sm:p-9">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl ${t.icon} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                        {String(i + 1).padStart(2, '0')} · {area.tag}
                      </span>
                    </div>

                    <h3 className="mb-3 font-serif text-xl font-bold text-navy sm:text-2xl">{area.title}</h3>
                    <p className="mb-6 text-base leading-relaxed text-navy/80">{area.body}</p>

                    <ul className="mt-auto flex flex-wrap gap-2 border-t border-navy/10 pt-5">
                      {area.points.map((pt) => (
                        <li
                          key={pt}
                          className="inline-flex items-center gap-2 rounded-lg border border-navy/10 bg-cream px-3 py-1.5 text-xs font-semibold text-navy sm:text-sm"
                        >
                          <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Sección informativa sobre Destination Connect (sin enlace externo directo, acceso por suscripción) */}
        <Reveal delay={200} className="mt-12">
          <div className="relative isolate overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-navy via-navy to-tropical p-8 text-white shadow-xl shadow-navy/10 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-light">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Plataforma Oficial de la Liga
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold-light">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    Acceso mediante suscripción
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                  ¿Qué es {SITE.platformName}?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  {SITE.platformDesc}
                </p>
                <p className="mt-2.5 text-sm font-medium text-gold-light/95">
                  {SITE.platformAccessNote}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-white/90 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                    <MapPin className="h-4 w-4 text-gold-light" aria-hidden="true" />
                    Lugares, playas y gastronomía
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                    <Route className="h-4 w-4 text-gold-light" aria-hidden="true" />
                    Rutas escénicas e itinerarios en tiempo real
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                    <BarChart3 className="h-4 w-4 text-gold-light" aria-hidden="true" />
                    Inteligencia e indicadores municipales
                  </span>
                </div>
              </div>

              <a
                href="#unete"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-bold text-navy shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Solicitar Suscripción
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

