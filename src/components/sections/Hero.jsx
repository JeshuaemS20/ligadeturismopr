import { ArrowRight, ChevronDown, Globe, Landmark, TreePalm } from 'lucide-react';
import { LigaEmblem } from '../LigaLogo.jsx';
import { BlurText, Reveal, WaveDivider } from '../animations.jsx';

const HERO_TAGS = [
  { icon: Globe, label: 'Alcance Global', color: 'text-gold-light' },
  { icon: Landmark, label: 'Patrimonio', color: 'text-gold-light' },
  { icon: TreePalm, label: 'Turismo Sostenible', color: 'text-tropical-light' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy pb-32 pt-32 text-white sm:pb-40 sm:pt-40 lg:pb-48"
    >
      {/* Fondo decorativo: meridianos del globo + resplandores dorado/verde */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-tropical/40 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="96" height="96" patternUnits="userSpaceOnUse">
              <circle cx="48" cy="48" r="46" fill="none" stroke="#F2C94C" strokeWidth="1" />
              <path d="M48 2 C 24 20, 24 76, 48 94 M48 2 C 72 20, 72 76, 48 94 M2 48 H94" fill="none" stroke="#F2C94C" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Texto */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <Reveal delay={0}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-light backdrop-blur-sm sm:text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              Liga de Turismo de Puerto Rico, Inc.
            </p>
          </Reveal>

          <h1 id="hero-title" className="font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <BlurText
              text="Impulsando el futuro del turismo en Puerto Rico"
              highlight={['turismo', 'Puerto', 'Rico']}
              delay={150}
            />
          </h1>

          <Reveal delay={700}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
              Somos la alianza que une a líderes de la industria, empresas y comunidades para fortalecer un turismo
              competitivo, sostenible y orgullosamente puertorriqueño — desde el Viejo San Juan hasta el último rincón
              de nuestros 78 municipios.
            </p>
          </Reveal>

          <Reveal delay={850}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#unete"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-bold text-navy shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto"
              >
                Únete a la Liga
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#quienes-somos"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/40 px-7 py-4 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Conoce quiénes somos
              </a>
            </div>
          </Reveal>

          <Reveal delay={1000}>
            <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-8 lg:justify-start">
              {HERO_TAGS.map(({ icon: Icon, label, color }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Emblema */}
        <div className="flex justify-center lg:col-span-5">
          <Reveal delay={400} direction="left" className="relative">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full border border-dashed border-gold/30 animate-spin-slow" />
            <div aria-hidden="true" className="absolute -inset-16 hidden rounded-full border border-white/10 sm:block" />
            <div className="relative grid h-64 w-64 place-items-center rounded-full bg-white shadow-2xl shadow-black/30 ring-8 ring-white/10 sm:h-80 sm:w-80">
              <div className="animate-float">
                <LigaEmblem className="h-52 w-52 sm:h-64 sm:w-64" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#quienes-somos"
        aria-label="Desplazarse a Quiénes Somos"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-white/70 transition-colors hover:text-white sm:bottom-32 md:block lg:bottom-36"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}

