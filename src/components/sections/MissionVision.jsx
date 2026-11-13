import { CircleCheck } from 'lucide-react';
import { Reveal, SpotlightCard } from '../animations.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PILLARS } from '../../data/content.js';

export default function MissionVision() {
  return (
    <section id="mision-vision" aria-labelledby="mision-title" className="border-y border-navy/10 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="mision-title"
          eyebrow="Filosofía Institucional"
          title="Misión, Visión y Valores"
          description="Los principios que guían cada programa, alianza e iniciativa de la Liga de Turismo de Puerto Rico, Inc."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 140} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <SpotlightCard
                  as="article"
                  spotlightColor={p.spotlight}
                  className="h-full border border-navy/10 bg-white shadow-lg shadow-navy/5"
                >
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${p.accent}`} />
                  <div className="flex h-full flex-col p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl shadow-md ${p.iconBg}`}>
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy">{p.eyebrow}</span>
                    </div>
                    <h3 className="mb-4 font-serif text-2xl font-bold text-navy">{p.title}</h3>

                    {p.body && <p className="text-base leading-relaxed text-navy/80">{p.body}</p>}

                    {p.values && (
                      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {p.values.map((v) => (
                          <li key={v} className="flex items-start gap-2.5 text-sm font-semibold text-navy/90">
                            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" aria-hidden="true" />
                            {v}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

