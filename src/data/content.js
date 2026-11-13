/**
 * ============================================================================
 * Contenido del sitio — edite aquí textos, cifras y datos de contacto.
 * ============================================================================
 */
import {
  Compass,
  Eye,
  Gem,
  Megaphone,
  GraduationCap,
  Sprout,
  Handshake,
  MapPin,
  Building2,
  CalendarCheck,
  Leaf,
} from 'lucide-react';

export const SITE = {
  name: 'Liga de Turismo de Puerto Rico, Inc.',
  shortName: 'Liga de Turismo',
  presidentName: 'Víctor A. González Vega',
  presidentRole: 'Presidente',
  presidentPhone: '(787) 463-2916',
  presidentPhoneTel: '+17874632916',
  email: 'liga.turismopr@gmail.com',
  instagramHandle: 'ligadeturismopr',
  instagramUrl: 'https://www.instagram.com/ligadeturismopr',
  location: 'San Juan, Puerto Rico',
  platformName: 'Destination Connect',
  platformUrl: 'https://desttination-connect.vercel.app/',
  platformDesc:
    'Plataforma oficial de inteligencia turística y conexión de destinos de Puerto Rico. Explora lugares, rutas escénicas, eventos e itinerarios en tiempo real en los 78 municipios de la Isla.',
};

export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'mision-vision', label: 'Misión y Visión' },
  { id: 'que-hacemos', label: 'Qué Hacemos' },
  { id: 'impacto', label: 'Impacto' },
];

export const MEMBERS_WE_UNITE = [
  'Hoteles y paradores',
  'Operadores y guías turísticos',
  'Restaurantes y gastronomía',
  'Artesanos y gestores culturales',
  'Municipios y comunidades',
  'Academia y estudiantes',
];

export const EMBLEM_SYMBOLS = [
  {
    id: 'azul',
    name: 'Azul Marino',
    element: 'El Globo',
    hex: '#032859',
    swatch: 'bg-navy',
    ring: 'ring-navy/20',
    spotlight: 'rgba(3, 40, 89, 0.14)',
    meaning: 'Alcance global y excelencia',
    detail:
      'El globo que enmarca nuestro emblema representa la proyección internacional de Puerto Rico y el estándar de excelencia con el que la Liga representa a su industria ante el mundo.',
  },
  {
    id: 'dorado',
    name: 'Dorado Garita',
    element: 'La Garita',
    hex: '#E5B822',
    swatch: 'bg-gold',
    ring: 'ring-gold/30',
    spotlight: 'rgba(229, 184, 34, 0.22)',
    meaning: 'Patrimonio histórico y hospitalidad',
    detail:
      'La garita, símbolo inconfundible del Viejo San Juan, honra nuestra herencia histórica y la calidez con la que cada puertorriqueño recibe a quien nos visita.',
  },
  {
    id: 'verde',
    name: 'Verde Tropical',
    element: 'Las Palmas y el Mar',
    hex: '#036B38',
    swatch: 'bg-tropical',
    ring: 'ring-tropical/20',
    spotlight: 'rgba(3, 107, 56, 0.16)',
    meaning: 'Sostenibilidad y naturaleza',
    detail:
      'Las palmas y las olas expresan la riqueza natural de nuestra isla y nuestro compromiso con un turismo que conserva costas, bosques y comunidades para las futuras generaciones.',
  },
];

export const PILLARS = [
  {
    title: 'Misión',
    eyebrow: 'Nuestro propósito',
    icon: Compass,
    iconBg: 'bg-navy text-white',
    spotlight: 'rgba(3, 40, 89, 0.14)',
    accent: 'bg-navy',
    body:
      'Unir, representar y fortalecer a todos los componentes de la industria turística de Puerto Rico, promoviendo su desarrollo sostenible, competitivo e inclusivo mediante la educación, la colaboración y la defensa de los intereses del sector.',
  },
  {
    title: 'Visión',
    eyebrow: 'Hacia dónde vamos',
    icon: Eye,
    iconBg: 'bg-tropical text-white',
    spotlight: 'rgba(3, 107, 56, 0.16)',
    accent: 'bg-tropical',
    body:
      'Ser la voz líder y el principal motor de colaboración del turismo puertorriqueño, posicionando a Puerto Rico como el destino más auténtico, sostenible y hospitalario del Caribe.',
  },
  {
    title: 'Valores Institucionales',
    eyebrow: 'Lo que nos define',
    icon: Gem,
    iconBg: 'bg-gold text-navy',
    spotlight: 'rgba(229, 184, 34, 0.22)',
    accent: 'bg-gold',
    values: [
      'Orgullo e identidad puertorriqueña',
      'Integridad y transparencia',
      'Hospitalidad auténtica',
      'Colaboración y solidaridad',
      'Sostenibilidad responsable',
      'Excelencia en el servicio',
    ],
  },
];

export const STRATEGIC_AREAS = [
  {
    title: 'Promoción y Mercadeo de Destino',
    tag: 'Proyección',
    icon: Megaphone,
    tone: 'navy',
    body:
      'Impulsamos campañas y presencia en ferias y foros que destacan la diversidad de experiencias de Puerto Rico: historia, cultura, gastronomía, naturaleza y aventura.',
    points: ['Campañas de destino y contenido', 'Ferias y misiones comerciales', 'Rutas turísticas regionales'],
  },
  {
    title: 'Educación y Capacitación Profesional',
    tag: 'Excelencia',
    icon: GraduationCap,
    tone: 'gold',
    body:
      'Desarrollamos talleres, seminarios y certificaciones que elevan la calidad del servicio y preparan a la próxima generación de profesionales del turismo.',
    points: ['Talleres de servicio y hospitalidad', 'Certificaciones profesionales', 'Alianzas con la academia'],
  },
  {
    title: 'Turismo Sostenible y Comunitario',
    tag: 'Sostenibilidad',
    icon: Sprout,
    tone: 'green',
    body:
      'Fomentamos prácticas responsables y proyectos de base comunitaria que distribuyen los beneficios del turismo y protegen nuestros recursos naturales y culturales.',
    points: ['Ecoturismo y agroturismo', 'Apoyo a PyMEs locales', 'Buenas prácticas ambientales'],
  },
  {
    title: 'Alianzas Público-Privadas y Representación',
    tag: 'Representación',
    icon: Handshake,
    tone: 'navy',
    body:
      'Somos la voz del sector ante el gobierno, organismos y aliados, promoviendo políticas públicas que fortalezcan la competitividad turística de la isla.',
    points: ['Diálogo con agencias de gobierno', 'Propuestas de política pública', 'Redes con aliados internacionales'],
  },
];

export const IMPACT_STATS = [
  { end: 78, prefix: '', suffix: '', label: 'Conectando con los 78 Municipios', note: 'De costa a montaña, toda la isla', icon: MapPin },
  { end: 100, prefix: '', suffix: '%', label: 'Enfoque Sostenible', note: 'En cada programa e iniciativa', icon: Leaf },
];

export const MEMBERSHIP_TYPES = [
  { value: '', label: 'Seleccione una opción' },
  { value: 'empresa', label: 'Membresía empresarial' },
  { value: 'profesional', label: 'Membresía profesional / individual' },
  { value: 'institucional', label: 'Alianza institucional o patrocinio' },
  { value: 'estudiante', label: 'Membresía estudiantil' },
  { value: 'otro', label: 'Otro / Información general' },
];

export const MEMBER_BENEFITS = [
  'Representación del sector ante entidades públicas y privadas',
  'Acceso a talleres, certificaciones y foros de la industria',
  'Visibilidad en iniciativas de promoción del destino',
  'Red de contactos con líderes y empresas del turismo',
];

