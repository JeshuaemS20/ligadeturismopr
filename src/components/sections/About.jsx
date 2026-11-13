import { useState } from 'react';
import { ChevronDown, Users } from 'lucide-react';
import { LigaEmblem } from '../LigaLogo.jsx';
import { Reveal, SpotlightCard } from '../animations.jsx';
import { EMBLEM_SYMBOLS, MEMBERS_WE_UNITE } from '../../data/content.js';

export default function About() {
  const [openId, setOpenId] = useState('azul');

  return (
    <section id="quienes-somos" aria-labelledby="quienes-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Narrativa */}
        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-tropical">
              <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-gold" />
              Quiénes Somos
            </p>
            <h2 id="quienes-title" className="font-serif text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              Una sola voz para la industria turística de Puerto Rico
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-6 space-y-5 text-base leading-relaxed text-navy/85 sm:text-lg">
            <p>
              La <strong className="font-bold text-navy">Liga de Turismo de Puerto Rico, Inc.</strong> es una organización
              sin fines de lucro que agrupa a los distintos componentes de la industria turística de la isla para
              trabajar unidos por su crecimiento, su calidad y su sostenibilidad.
            </p>
            <p>
              Creemos que el turismo es mucho más que una actividad económica: es el puente a través del cual
              compartimos nuestra identidad, preservamos nuestro patrimonio y generamos oportunidades reales para
              familias, emprendedores y comunidades en cada región del país.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-8">
            <div className="rounded-2xl border border-navy/10 bg-cream p-6">
              <p className="mb-4 flex items-center gap-2 text-sm font-bold text-navy">
                <Users className="h-5 w-5 text-tropical" aria-hidden="true" />
                A quiénes unimos
              </p>
              <ul className="flex flex-wrap gap-2">
                {MEMBERS_WE_UNITE.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy sm:text-sm"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-8">
            <blockquote className="border-l-4 border-gold pl-5">
              <p className="font-serif text-lg italic leading-relaxed text-navy sm:text-xl">
                “Honramos la historia que nos define, protegemos la naturaleza que nos rodea y abrimos nuestras puertas
                al mundo con el calor humano que distingue a Puerto Rico.”
              </p>
              <footer className="mt-2 text-xs font-bold uppercase tracking-wider text-tropical">
                — Víctor A. González Vega, Presidente · Liga de Turismo de Puerto Rico, Inc.
              </footer>
            </blockquote>
          </Reveal>
        </div>

        {/* Simbología del emblema */}
        <Reveal delay={150} direction="left">
          <div className="rounded-3xl border border-navy/10 bg-cream p-6 shadow-xl shadow-navy/5 sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-navy/10">
                <LigaEmblem className="h-12 w-12" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy sm:text-2xl">Simbología del Emblema</h3>
                <p className="text-sm text-navy/75">Seleccione un color para conocer su significado</p>
              </div>
            </div>

            <ul className="space-y-4">
              {EMBLEM_SYMBOLS.map((s) => {
                const isOpen = openId === s.id;
                const panelId = `emblema-${s.id}`;
                return (
                  <li key={s.id}>
                    <SpotlightCard
                      spotlightColor={s.spotlight}
                      tiltMax={3}
                      className={`border bg-white transition-colors ${isOpen ? 'border-navy/25' : 'border-navy/10'}`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : s.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-center gap-4 rounded-2xl p-5 text-left"
                      >
                        <span
                          aria-hidden="true"
                          className={`h-11 w-11 shrink-0 rounded-xl ${s.swatch} shadow-inner ring-4 ${s.ring}`}
                        />
                        <span className="flex-1">
                          <span className="block text-xs font-bold uppercase tracking-wider text-navy/70">
                            {s.element}
                          </span>
                          <span className="mt-0.5 block font-serif text-lg font-bold text-navy">{s.name}</span>
                          <span className="block text-sm font-semibold text-tropical">{s.meaning}</span>
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 text-navy/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-label={s.name}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-navy/80 sm:pl-[5.25rem]">{s.detail}</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

