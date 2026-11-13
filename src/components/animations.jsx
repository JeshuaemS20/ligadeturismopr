/**
 * ============================================================================
 * Primitivas de animación estilo React Bits
 * Ligeras: solo hooks de React + transiciones CSS (sin dependencias externas).
 * Todas respetan `prefers-reduced-motion`.
 * ============================================================================
 */
import { useEffect, useRef, useState } from 'react';

/* ---------------------------------------------------------------------------
 * Hooks
 * ------------------------------------------------------------------------- */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function useInView({ threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

/* ---------------------------------------------------------------------------
 * Reveal — aparición suave al entrar en pantalla
 * ------------------------------------------------------------------------- */
const OFFSETS = {
  up: 'translate3d(0, 28px, 0)',
  down: 'translate3d(0, -28px, 0)',
  left: 'translate3d(28px, 0, 0)',
  right: 'translate3d(-28px, 0, 0)',
  none: 'none',
};

export function Reveal({ as: Tag = 'div', children, className = '', delay = 0, direction = 'up', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : OFFSETS[direction],
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
 * BlurText — revelación palabra por palabra con desenfoque (SplitText/BlurText)
 * `animateOn="mount"` anima al cargar; `"view"` al entrar en pantalla.
 * ------------------------------------------------------------------------- */
export function BlurText({ text, as: Tag = 'span', className = '', wordClassName = '', delay = 0, stagger = 90, animateOn = 'mount', highlight = [] }) {
  const [viewRef, inView] = useInView({ threshold: 0.2 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (animateOn !== 'mount') return undefined;
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [animateOn]);

  const active = animateOn === 'mount' ? mounted : inView;
  const words = text.split(' ');

  return (
    <Tag ref={viewRef} className={className} aria-label={text}>
      {words.map((word, i) => {
        const isHighlighted = highlight.includes(word.replace(/[.,]/g, ''));
        return (
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className={`inline-block will-change-[transform,filter,opacity] ${isHighlighted ? 'text-gold-light' : ''} ${wordClassName}`}
            style={{
              opacity: active ? 1 : 0,
              filter: active ? 'blur(0px)' : 'blur(12px)',
              transform: active ? 'translateY(0)' : 'translateY(0.45em)',
              transition: `opacity 800ms ease-out, filter 800ms ease-out, transform 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        );
      })}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
 * SpotlightCard — brillo radial que sigue el cursor + inclinación 3D sutil.
 * Usa variables CSS (sin re-renders) — ver estilos `.spotlight-card` en index.css
 * ------------------------------------------------------------------------- */
export function SpotlightCard({ as: Tag = 'div', children, className = '', spotlightColor = 'rgba(229, 184, 34, 0.20)', tiltMax = 5, style, ...rest }) {
  const ref = useRef(null);
  const frame = useRef(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--spot-x', `${x}px`);
      el.style.setProperty('--spot-y', `${y}px`);
      if (!reduced) {
        el.style.setProperty('--rx', `${(y / rect.height - 0.5) * -2 * tiltMax}deg`);
        el.style.setProperty('--ry', `${(x / rect.width - 0.5) * 2 * tiltMax}deg`);
      }
      el.dataset.active = 'true';
    });
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.dataset.active = 'false';
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`spotlight-card relative overflow-hidden rounded-2xl ${className}`}
      style={{ '--spot-color': spotlightColor, ...style }}
      {...rest}
    >
      <div aria-hidden="true" className="spotlight-card__glow pointer-events-none absolute inset-0" />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
 * AnimatedCounter — cuenta progresiva al entrar en pantalla
 * ------------------------------------------------------------------------- */
export function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2200 }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setValue(end);
      return undefined;
    }
    let raf = 0;
    let start = null;
    const tick = (now) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {prefix}
        {value.toLocaleString('es-PR')}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {end}
        {suffix}
      </span>
    </span>
  );
}

/* ---------------------------------------------------------------------------
 * WaveDivider — transición de olas animadas en dos tonos (azul y verde)
 * `fill` = color de la sección siguiente.
 * ------------------------------------------------------------------------- */
export function WaveDivider({ fill = '#FFFFFF', className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-none ${className}`}>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-16 w-[calc(100%+96px)] -ml-12 sm:h-24 lg:h-28">
        <path
          className="animate-wave-slow"
          d="M-100,62 C180,128 420,10 760,58 C1060,102 1250,22 1540,46 L1540,140 L-100,140 Z"
          fill="#0B3F80"
          fillOpacity="0.85"
        />
        <path
          className="animate-wave-fast"
          d="M-100,84 C240,36 560,128 900,74 C1170,32 1340,92 1540,78 L1540,140 L-100,140 Z"
          fill="#036B38"
        />
        <path d="M-100,108 C380,78 860,134 1540,98 L1540,140 L-100,140 Z" fill={fill} />
      </svg>
    </div>
  );
}
