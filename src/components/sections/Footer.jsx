import { ArrowUp, ExternalLink, Mail, MapPin, Phone, UserCheck } from 'lucide-react';
import LigaLogo from '../LigaLogo.jsx';
import { NAV_LINKS, SITE } from '../../data/content.js';

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-gold bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <LigaLogo emblemClassName="h-12 w-12" tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              Organización sin fines de lucro que une, representa y fortalece a la industria turística de Puerto Rico
              para impulsar un destino sostenible, competitivo y auténtico.
            </p>
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <span className="h-2 w-8 rounded-full bg-[#0B3F80] ring-1 ring-white/20" />
              <span className="h-2 w-8 rounded-full bg-gold" />
              <span className="h-2 w-8 rounded-full bg-tropical" />
            </div>
          </div>

          <nav aria-label="Enlaces del pie de página" className="md:col-span-3">
            <h2 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-gold-light">Navegación</h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-white/80 transition-colors hover:text-gold-light">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#unete" className="text-white/80 transition-colors hover:text-gold-light">
                  Únete a la Liga
                </a>
              </li>
              <li>
                <a
                  href={SITE.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-gold-light transition-colors hover:text-white"
                >
                  {SITE.platformName}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
              Contacto Oficial
            </h2>
            <div className="mb-4 rounded-xl border border-white/15 bg-white/5 p-3.5 text-sm text-white/90">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-light">
                <UserCheck className="h-4 w-4 text-tropical-light" aria-hidden="true" />
                {SITE.presidentRole}
              </p>
              <p className="mt-1 font-serif text-base font-bold text-white">
                {SITE.presidentName}
              </p>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${SITE.presidentPhoneTel}`} className="flex items-center gap-3 text-white/80 hover:text-gold-light">
                  <Phone className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                  {SITE.presidentPhone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/80 hover:text-gold-light">
                  <Mail className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold-light"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-gold-light" />
                  <span>@{SITE.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-white/75 sm:flex-row">
          <p>© {year} Liga de Turismo de Puerto Rico, Inc. Todos los derechos reservados.</p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-semibold text-white/90 transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Volver arriba
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

