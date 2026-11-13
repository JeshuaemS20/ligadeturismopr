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
  presidentRole: 'Director Ejecutivo',
  presidentPhone: '(787) 463-2916',
  presidentPhoneTel: '+17874632916',
  email: 'liga.turismopr@gmail.com',
  instagramHandle: 'ligadeturismopr',
  instagramUrl: 'https://www.instagram.com/ligadeturismopr',
  location: 'San Juan, Puerto Rico',
  platformName: 'Destination Connect',
  platformDesc:
    'Destination Connect es nuestra plataforma oficial de inteligencia turística y conexión de destinos de Puerto Rico. Conecta en tiempo real a visitantes y municipios con lugares, playas, gastronomía, rutas escénicas, eventos e indicadores turísticos en los 78 municipios de la Isla.',
  platformAccessNote:
    'El acceso a la plataforma requiere suscripción o membresía activa. Contáctanos para solicitar tu acceso o conocer los planes disponibles.',
};

export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'mision-vision', label: 'Misión y Visión' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'que-hacemos', label: 'Qué Hacemos' },
  { id: 'impacto', label: 'Impacto' },
];

export const TEAM_MEMBERS = [
  {
    name: 'Víctor A. González Vega',
    role: 'Director Ejecutivo',
    photo: '/team/victor-gonzalez.jpg',
    initials: 'VG',
    objectPosition: 'center 55%',
  },
  {
    name: 'Jeshuaem Sepúlveda',
    role: 'Oficial de Programación',
    photo: '/team/jeshuaem-sepulveda.jpg',
    initials: 'JS',
    objectPosition: 'center 60%',
  },
  {
    name: 'Osvaldo Gelabert Toro, M.T.',
    role: 'Enlace Académico de la UN Tourism',
    photo: '/team/osvaldo-gelabert.jpg',
    initials: 'OG',
    objectPosition: 'center 25%',
  },
  {
    name: 'Milagros Donato Cintrón, M.S.',
    role: 'Consultora en Asuntos Tecnológicos',
    photo: '/team/milagros-donato.jpg',
    initials: 'MD',
    objectPosition: 'center 20%',
  },
  {
    name: 'Michael Colón Santiago',
    role: 'Especialista en Acceso Aéreo y Conectividad',
    photo: '/team/michael-colon.jpg',
    initials: 'MC',
    objectPosition: 'center 20%',
  },
  {
    name: 'Jan Manuel Cubero Jiménez',
    role: 'Gobierno, Política Pública y Relaciones Internacionales',
    photo: '/team/jan-manuel-cubero.jpg',
    initials: 'JC',
    objectPosition: 'center 20%',
  },
  {
    name: 'Lcda. Carla Araiza',
    role: 'Alojamiento y Hospitalidad',
    photo: '/team/carla-araiza.jpg',
    initials: 'CA',
    objectPosition: 'center 20%',
  },
  {
    name: 'Jorge A. Lacén Aponte',
    role: 'Turismo Deportivo',
    photo: '/team/jorge-lacen.jpg',
    initials: 'JL',
    objectPosition: 'center 25%',
  },
];

export const MEMBERS_WE_UNITE = [
  'Hoteles y paradores',
  'Operadores y guías turísticos',
  'Restaurantes y gastronomía',
  'Artesanos y gestores culturales',
  'Municipios y comunidades',
  'Profesores y estudiantes',
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
    meaning: 'Alcance Global y Excelencia',
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
    paragraphs: [
      'En la Liga de Turismo de Puerto Rico, Inc., transformamos el conocimiento en soluciones que contribuyan al desarrollo integral del turismo en Puerto Rico.',
      'A través de la investigación, análisis, innovación y la planificación estratégica, promovemos una gestión turística fundamentada en evidencia, capaz de fortalecer la competitividad, sostenibilidad y el desarrollo económico de nuestros destinos.',
      'Creemos en el valor de conectar a los profesores y estudiantes, gobierno, empresa privada y las comunidades receptoras para convertir el conocimiento en oportunidades y construir, juntos, un futuro turístico más competitivo, sostenible y beneficioso para las presentes y futuras generaciones.',
    ],
  },
  {
    title: 'Visión',
    eyebrow: 'Hacia dónde vamos',
    icon: Eye,
    iconBg: 'bg-tropical text-white',
    spotlight: 'rgba(3, 107, 56, 0.16)',
    accent: 'bg-tropical',
    paragraphs: [
      'Convertirnos en el principal centro de pensamiento, investigación y generación de conocimiento turístico de Puerto Rico, reconocido por nuestra excelencia, independencia técnica y aportación al desarrollo sostenible y competitivo de nuestros destinos.',
      'Aspiramos a ser una institución de referencia que, mediante la investigación, análisis y la planificación estratégica, contribuya a la toma de decisiones fundamentadas en evidencia y al desarrollo de políticas y soluciones innovadoras para fortalecer el turismo.',
      'Creemos en el poder de las alianzas entre los profesores y estudiantes, gobierno, empresa privada, comunidades y los organismos internacionales para compartir conocimientos, formar líderes y contribuir al posicionamiento de Puerto Rico como un destino turístico de clase mundial.',
    ],
  },
  {
    title: 'Objetivos',
    eyebrow: 'Nuestro compromiso',
    icon: Gem,
    iconBg: 'bg-gold text-navy',
    spotlight: 'rgba(229, 184, 34, 0.22)',
    accent: 'bg-gold',
    paragraphs: [
      'En la Liga de Turismo de Puerto Rico, Inc., trabajamos para fortalecer el desarrollo turístico mediante la investigación, análisis, planificación estratégica y la innovación, promoviendo iniciativas que contribuyan al crecimiento económico, competitividad y la sostenibilidad de Puerto Rico como destino turístico.',
      'Nuestros esfuerzos están dirigidos a generar conocimiento especializado mediante estudios, diagnósticos, indicadores y publicaciones que permitan comprender la evolución del sector y fomentar decisiones fundamentadas en evidencia, impulsando propuestas, proyectos y modelos de gestión a largo plazo.',
      'Fomentamos la educación y capacitación de estudiantes, profesores, profesionales, empresarios, servidores públicos y comunidades, creando espacios para el intercambio de conocimientos y contribuyendo al desarrollo de políticas públicas, soluciones innovadoras y buenas prácticas de gestión.',
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
    points: ['Talleres de servicio y hospitalidad', 'Certificaciones Profesionales', 'Alianzas con profesores y estudiantes'],
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
  { value: 'destination-connect', label: 'Suscripción / Acceso a Destination Connect' },
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

