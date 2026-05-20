export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'cor4287',
    title: 'COR4287',
    category: 'Residencial',
    year: '2024',
    location: 'Buenos Aires, CABA',
    description:
      'Vivienda unifamiliar de diseño moderno y minimalista. Espacios amplios, materiales nobles y una paleta neutra que dialoga con la luz natural.',
    coverImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
    ],
  },
  {
    slug: 'esmeralda-inv',
    title: 'Esmeralda — INV',
    category: 'Inversión',
    year: '2023',
    location: 'Buenos Aires, CABA',
    description:
      'Proyecto de inversión inmobiliaria con unidades de alto estándar. Diseño orientado a la eficiencia de planta y calidad de terminaciones.',
    coverImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
    ],
  },
  {
    slug: 'lagos-34',
    title: 'Lagos 34',
    category: 'Residencial',
    year: '2023',
    location: 'Buenos Aires, CABA',
    description:
      'Remodelación integral de vivienda. Intervención sobre estructura existente con nuevas circulaciones y apertura de espacios de planta baja.',
    coverImage:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80',
    ],
  },
  {
    slug: 'cabildo-336-ii',
    title: 'Cabildo 336 II',
    category: 'Residencial',
    year: '2023',
    location: 'Buenos Aires, CABA',
    description:
      'Segunda etapa del desarrollo en Cabildo. Unidades en planta alta con terraza privada y vistas abiertas al entorno urbano.',
    coverImage:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
    ],
  },
  {
    slug: 'cabildo-336-i',
    title: 'Cabildo 336 I',
    category: 'Residencial',
    year: '2022',
    location: 'Buenos Aires, CABA',
    description:
      'Primera etapa del desarrollo. Planta baja y primer piso con jardín privado, diseño bioclimático y materiales de construcción durables.',
    coverImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80',
    ],
  },
  {
    slug: 'ame2900-inv',
    title: 'Ame2900 — INV',
    category: 'Inversión',
    year: '2022',
    location: 'Buenos Aires, CABA',
    description:
      'Desarrollo de inversión de alta rentabilidad. Unidades compactas y eficientes con terminaciones premium para el mercado de alquiler temporario.',
    coverImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
  },
  {
    slug: 'ambrosetti-42',
    title: 'Ambrosetti 42',
    category: 'Residencial',
    year: '2022',
    location: 'Buenos Aires, CABA',
    description:
      'Casa de autor en tres niveles. Fachada racionalista con juego de voladizos, cubierta verde y doble altura en living.',
    coverImage:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
    ],
  },
  {
    slug: '460',
    title: '460',
    category: 'Comercial',
    year: '2021',
    location: 'Buenos Aires, CABA',
    description:
      'Local comercial y oficinas en planta alta. Diseño flexible con divisiones removibles, iluminación técnica y materialidad industrial refinada.',
    coverImage:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80',
    ],
  },
  {
    slug: 'caldas',
    title: 'Caldas',
    category: 'Residencial',
    year: '2021',
    location: 'Buenos Aires, CABA',
    description:
      'Vivienda en lote angosto con patio central. La luz como protagonista: celosías, patios interiores y materiales naturales que regulan temperatura y privacidad.',
    coverImage:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80',
    ],
  },
];
