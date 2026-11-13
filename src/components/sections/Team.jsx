import { LigaEmblem } from '../LigaLogo.jsx';
import { Reveal, SpotlightCard } from '../animations.jsx';
import SectionHeading from './SectionHeading.jsx';
import { TEAM_MEMBERS } from '../../data/content.js';

export default function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="equipo-title"
          eyebrow="Liderazgo Institucional"
          title="Miembros de la Liga de Turismo de Puerto Rico"
          description="Un equipo multidisciplinario de especialistas comprometidos con la investigación, la innovación y el desarrollo turístico sostenible de nuestra Isla."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal as="li" key={member.name} delay={(i % 4) * 100}>
              <SpotlightCard
                spotlightColor="rgba(229, 184, 34, 0.20)"
                className="group h-full border border-navy/10 bg-cream shadow-md shadow-navy/5"
              >
                <div className="flex h-full flex-col">
                  {/* Foto o avatar institucional */}
                  <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-gradient-to-br from-navy via-navy to-tropical">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        style={{ objectPosition: member.objectPosition || 'center' }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <div className="grid h-28 w-28 place-items-center rounded-full bg-white p-2 shadow-xl ring-4 ring-gold/50">
                          <LigaEmblem className="h-22 w-22" />
                        </div>
                        <span className="mt-3 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-gold-light">
                          Dirección Ejecutiva
                        </span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/60 to-transparent"
                    />
                  </div>

                  {/* Nombre y cargo */}
                  <div className="flex flex-1 flex-col justify-between border-t-2 border-gold p-5">
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-snug text-navy">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-tropical">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

