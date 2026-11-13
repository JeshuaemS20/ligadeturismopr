import { useId } from 'react';

/**
 * ============================================================================
 * LOGO OFICIAL — Liga de Turismo de Puerto Rico, Inc.
 * ============================================================================
 * Recreación vectorial del emblema: globo azul marino, garita dorada al centro,
 * palmeras verdes a ambos lados y olas azul/verde en la base.
 *
 * 👉 PARA USAR EL ARCHIVO OFICIAL (PNG/SVG):
 *    Los originales ya están en /public/brand/:
 *      - /brand/emblema-liga-turismo.png          (solo emblema)
 *      - /brand/logo-liga-turismo-horizontal.png  (emblema + nombre)
 *    Asigne la ruta deseada a OFFICIAL_EMBLEM_SRC y el componente mostrará
 *    el archivo oficial en lugar del SVG. Ejemplo:
 *      const OFFICIAL_EMBLEM_SRC = '/brand/emblema-liga-turismo.png';
 * ============================================================================
 */
const OFFICIAL_EMBLEM_SRC = null;

export function LigaEmblem({ className = 'h-16 w-16', title = 'Emblema de la Liga de Turismo de Puerto Rico, Inc.' }) {
  // IDs únicos por instancia para que los degradados no colisionen
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const gold = `gold-${uid}`;
  const navy = `navy-${uid}`;
  const palm = `palm-${uid}`;

  if (OFFICIAL_EMBLEM_SRC) {
    return <img src={OFFICIAL_EMBLEM_SRC} alt={title} className={`${className} shrink-0 object-contain`} />;
  }

  return (
    <svg
      viewBox="0 0 240 240"
      className={`${className} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gold} x1="85" y1="30" x2="155" y2="205" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5D04C" />
          <stop offset="50%" stopColor="#E5B822" />
          <stop offset="100%" stopColor="#C99A12" />
        </linearGradient>
        <linearGradient id={navy} x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#043370" />
          <stop offset="100%" stopColor="#021D42" />
        </linearGradient>
        <linearGradient id={palm} x1="30" y1="80" x2="210" y2="225" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#058245" />
          <stop offset="100%" stopColor="#02542B" />
        </linearGradient>
      </defs>

      {/* Globo terráqueo */}
      <g stroke={`url(#${navy})`} strokeWidth="6.5" strokeLinecap="round">
        <circle cx="120" cy="115" r="96" />
        <line x1="120" y1="19" x2="120" y2="40" />
        <path d="M120 19 C 75 40, 62 95, 72 155" />
        <path d="M120 19 C 165 40, 178 95, 168 155" />
        <path d="M44 58 Q 120 96 196 58" />
        <line x1="24" y1="115" x2="55" y2="115" />
        <line x1="185" y1="115" x2="216" y2="115" />
        <path d="M48 175 Q 75 162 92 155" />
      </g>

      {/* Palmera izquierda */}
      <g fill={`url(#${palm})`} stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M92 195 C 76 172, 74 142, 82 115 L 90 116 C 84 142, 87 168, 102 190 Z" />
        <path d="M84 116 C 65 98, 42 102, 32 115 C 48 112, 66 114, 80 122 Z" />
        <path d="M84 115 C 62 112, 36 122, 26 142 C 44 132, 64 126, 81 124 Z" />
        <path d="M85 117 C 66 128, 52 146, 48 168 C 58 152, 71 138, 84 126 Z" />
        <path d="M86 114 C 75 92, 82 74, 98 66 C 92 80, 90 96, 88 113 Z" />
        <path d="M88 115 C 96 96, 110 86, 122 86 C 110 95, 100 104, 91 117 Z" />
      </g>

      {/* Garita dorada */}
      <g stroke="#FFFFFF">
        <path
          d="M84 184 L 156 184 C 158 190, 150 198, 144 202 L 96 202 C 90 198, 82 190, 84 184 Z"
          fill={`url(#${gold})`}
          strokeWidth="2"
        />
        <rect x="88" y="176" width="64" height="7" rx="3" fill={`url(#${gold})`} strokeWidth="1.5" />
        <path d="M93 92 L 147 92 L 147 176 L 93 176 Z" fill={`url(#${gold})`} strokeWidth="2" />
        <path d="M111 154 L 111 126 C 111 119, 129 119, 129 126 L 129 154 Z" fill="#FFFFFF" stroke="none" />
        <rect x="139" y="98" width="4" height="68" rx="2" fill="#FFF7D6" opacity="0.7" stroke="none" />
        <path
          d="M84 85 C 84 79, 156 79, 156 85 L 152 93 C 132 89, 108 89, 88 93 Z"
          fill={`url(#${gold})`}
          strokeWidth="2"
        />
        <path
          d="M91 81 C 91 52, 110 42, 120 42 C 130 42, 149 52, 149 81 C 130 78, 110 78, 91 81 Z"
          fill={`url(#${gold})`}
          strokeWidth="2"
        />
        <path d="M128 48 C 138 53, 143 64, 144 75" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M111 41 C 111 37, 116 36, 116 33 C 114 32, 114 30, 117 29 C 114 27, 113 22, 120 22 C 127 22, 126 27, 123 29 C 126 30, 126 32, 124 33 C 124 36, 129 37, 129 41 Z"
          fill={`url(#${gold})`}
          strokeWidth="1.5"
        />
      </g>

      {/* Palmera derecha */}
      <g fill={`url(#${palm})`} stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M155 186 C 172 162, 174 132, 165 104 L 157 106 C 164 132, 160 158, 145 180 Z" />
        <path d="M163 105 C 182 86, 206 90, 218 104 C 202 100, 184 103, 168 111 Z" />
        <path d="M164 104 C 188 100, 214 112, 224 132 C 205 121, 185 115, 167 113 Z" />
        <path d="M162 106 C 182 118, 196 138, 198 160 C 188 143, 176 128, 163 115 Z" />
        <path d="M161 103 C 172 80, 164 62, 148 54 C 154 68, 157 85, 159 102 Z" />
        <path d="M159 104 C 148 86, 132 78, 118 80 C 132 88, 144 96, 155 107 Z" />
      </g>

      {/* Olas */}
      <path
        d="M42 186 C 72 212, 105 204, 134 184 C 164 164, 194 166, 214 186 C 192 178, 166 182, 140 200 C 110 220, 74 222, 42 186 Z"
        fill="#032859"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path
        d="M62 198 C 92 222, 124 214, 152 195 C 178 178, 202 180, 220 198 C 198 190, 174 195, 150 212 C 120 233, 88 234, 62 198 Z"
        fill="#036B38"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * Logotipo completo (emblema + nombre institucional).
 * `tone="light"` para usar sobre fondos azul marino.
 */
export default function LigaLogo({ emblemClassName = 'h-12 w-12', tone = 'dark', compact = false }) {
  const light = tone === 'light';
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span className="grid place-items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-navy/10">
        <LigaEmblem className={emblemClassName} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif font-extrabold tracking-tight ${compact ? 'text-base' : 'text-lg sm:text-xl'} ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          LIGA DE TURISMO
        </span>
        <span
          className={`mt-1 font-serif text-[10px] font-bold tracking-[0.18em] sm:text-[11px] ${
            light ? 'text-gold-light' : 'text-tropical'
          }`}
        >
          DE PUERTO RICO, INC.
        </span>
      </span>
    </span>
  );
}

