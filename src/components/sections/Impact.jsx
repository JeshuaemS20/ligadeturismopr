import { AnimatedCounter, Reveal } from '../animations.jsx';
import SectionHeading from './SectionHeading.jsx';
import { IMPACT_STATS } from '../../data/content.js';

export default function Impact() {
  return (
    <section id="impacto" aria-labelledby="impacto-title" className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-tropical/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="38" fill="none" stroke="#F2C94C" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#impact-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="impacto-title"
          tone="light"
          eyebrow="Impacto en Números"
          title="Trabajando por toda la isla"
          description="De la mano de comunidades, empresas y aliados, fortalecemos el turismo en cada rincón de Puerto Rico."
        />

        <ul className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:gap-8">
          {IMPACT_STATS.map((s, i) => {
            const Icon = s.icon;
            const goldNumber = i % 2 === 0;
            return (
              <Reveal as="li" key={s.label} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/15 bg-white/[0.04] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-light/60 hover:bg-white/[0.07]">
                  <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gold-light/15 text-gold-light">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className={`font-serif text-5xl font-bold leading-none sm:text-6xl ${goldNumber ? 'text-gold-light' : 'text-white'}`}>
                    <AnimatedCounter end={s.end} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className={`mt-4 text-sm font-bold uppercase tracking-wider ${goldNumber ? 'text-white' : 'text-gold-light'}`}>
                    {s.label}
                  </p>
                  <p className="mt-2 text-sm text-white/75">{s.note}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

