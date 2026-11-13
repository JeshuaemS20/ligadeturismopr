import { Reveal } from '../animations.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'dark', id }) {
  const centered = align === 'center';
  const light = tone === 'light';
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} mb-12 max-w-3xl sm:mb-14`}>
      <p
        className={`mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] ${
          light ? 'text-gold-light' : 'text-tropical'
        }`}
      >
        <span aria-hidden="true" className={`h-0.5 w-6 rounded-full ${light ? 'bg-gold-light' : 'bg-gold'}`} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/85' : 'text-navy/80'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

