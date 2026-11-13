import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import LigaLogo from '../LigaLogo.jsx';
import { NAV_LINKS } from '../../data/content.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  // Fondo sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta la sección visible
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Cerrar menú móvil con Escape o al pasar a escritorio
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 py-2.5 shadow-lg shadow-navy/5 backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="rounded-lg" aria-label="Liga de Turismo de Puerto Rico — Inicio">
          <LigaLogo emblemClassName="h-10 w-10 sm:h-11 sm:w-11" tone={solid ? 'dark' : 'light'} compact />
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    solid
                      ? isActive
                        ? 'text-tropical'
                        : 'text-navy/85 hover:text-tropical'
                      : isActive
                        ? 'text-gold-light'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#unete"
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-md shadow-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gold-light lg:inline-flex"
        >
          Únete a la Liga
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className={`rounded-xl p-2.5 transition-colors lg:hidden ${
            solid ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-navy/10 bg-white px-4 pb-6 pt-3 shadow-xl sm:px-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-navy/5 py-3.5 text-base font-semibold ${
                  active === id ? 'text-tropical' : 'text-navy'
                }`}
              >
                {label}
                {active === id && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#unete"
          onClick={() => setOpen(false)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-navy"
        >
          Únete a la Liga
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

