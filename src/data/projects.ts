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
    coverImage: '/images/projects/COR4287.webp',
    images: [
      '/images/projects/COR4287.webp',
      '/images/projects/COR4287-1.webp',
      '/images/projects/COR4287-2.webp',
      '/images/projects/COR4287-3.webp',
      '/images/projects/cor4287-4.webp',
      '/images/projects/cor4287-5.jpeg',
      '/images/projects/cor4287-6.webp',
      '/images/projects/cor4287-7.webp',
      '/images/projects/cor4287-8.webp',
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
    coverImage: '/images/projects/esmeralda-inv.webp',
    images: [
      '/images/projects/esmeralda-inv.webp',
      '/images/projects/esmeralda-inv-1.webp',
      '/images/projects/esmeralda-inv-2.webp',
      '/images/projects/esmeralda-inv-3.webp',
      '/images/projects/esmeralda-inv-4.webp',
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
    coverImage: '/images/projects/lagos-34.webp',
    images: [
      '/images/projects/lagos-34.webp',
      '/images/projects/lagos-34-1.webp',
      '/images/projects/lagos-34-2.webp',
      '/images/projects/lagos-34-3.webp',
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
    coverImage: '/images/projects/cabildo336II.webp',
    images: [
      '/images/projects/cabildo336II.webp',
      '/images/projects/cabildo336II-1.webp',
      '/images/projects/cabildo336II-2.webp',
      '/images/projects/cabildo336II-3.webp',
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
    coverImage: '/images/projects/cabildo336I.webp',
    images: [
      '/images/projects/cabildo336I.webp',
      '/images/projects/cabildo336I-1.webp',
      '/images/projects/cabildo336I-2.webp',
      '/images/projects/cabildo336I-3.webp',
      '/images/projects/cabildo336I-4.webp',
      '/images/projects/cabildo336I-5.webp',
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
    coverImage: '/images/projects/ame2900-inv.webp',
    images: [
      '/images/projects/ame2900-inv.webp',
      '/images/projects/ame2900-inv-1.webp',
      '/images/projects/ame2900-inv-2.webp',
      '/images/projects/ame2900-inv-3.webp',
      '/images/projects/ame2900-inv-4.webp',
      '/images/projects/ame2900-inv-5.webp',
      '/images/projects/ame2900-inv-6.webp',
      '/images/projects/ame2900-inv-7.webp',
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
    coverImage: '/images/projects/ambrosetti-42.webp',
    images: [
      '/images/projects/ambrosetti-42.webp',
      '/images/projects/ambrosetti-42-1.webp',
      '/images/projects/ambrosetti-42-2.webp',
      '/images/projects/ambrosetti-42-3.webp',
      '/images/projects/ambrosetti-42-4.webp',
      '/images/projects/ambrosetti-42-5.webp',
      '/images/projects/ambrosetti-42-6.webp',
      '/images/projects/ambrosetti-42-7.webp',
      '/images/projects/ambrosetti-42-8.webp',
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
    coverImage: '/images/projects/460.webp',
    images: [
      '/images/projects/460.webp',
      '/images/projects/460-1.webp',
      '/images/projects/460-2.webp',
      '/images/projects/460-3.webp',
      '/images/projects/460-4.webp',
      '/images/projects/460-6.webp',
      '/images/projects/460-7.webp',
      '/images/projects/460-8.webp',
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
    coverImage: '/images/projects/caldas.webp',
    images: [
      '/images/projects/caldas.webp',
      '/images/projects/caldas-1.webp',
      '/images/projects/caldas-2.webp',
      '/images/projects/caldas-3.webp',
      '/images/projects/caldas-4.webp',
      '/images/projects/caldas-5.webp',
      '/images/projects/caldas-6.webp',
      '/images/projects/caldas-7.webp',
      '/images/projects/caldas-8.webp',
      '/images/projects/caldas-9.webp',
      '/images/projects/caldas-10.webp',
      '/images/projects/caldas-11.webp',
      '/images/projects/caldas-12.webp',
    ],
  },
];
