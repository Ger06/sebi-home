export interface MainService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AdvisoryService {
  id: string;
  title: string;
  description: string;
}

export const mainServices: MainService[] = [
  {
    id: 'proyectos',
    title: 'Proyectos',
    description:
      'Diseño arquitectónico integral desde la idea inicial hasta la documentación ejecutiva. Trabajamos en viviendas, comercios y desarrollos a medida.',
    icon: 'pencil-ruler',
  },
  {
    id: 'construccion',
    title: 'Construcción',
    description:
      'Dirección y ejecución de obra con equipos propios. Control de calidad, plazos y presupuesto en cada etapa del proceso constructivo.',
    icon: 'hard-hat',
  },
  {
    id: 'remodelaciones',
    title: 'Remodelaciones',
    description:
      'Intervenciones sobre lo existente: renovaciones, ampliaciones y cambios de uso. Soluciones técnicas y estéticas con mínima afectación a la estructura.',
    icon: 'wrench',
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo Inmobiliario',
    description:
      'Acompañamos inversores desde la selección del terreno hasta la comercialización. Análisis de rentabilidad, diseño y gestión completa del proyecto.',
    icon: 'building-2',
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento',
    description:
      'Consultoría profesional en diseño, materiales, costos y gestión de trámites. Una mirada experta para tomar mejores decisiones en cada etapa.',
    icon: 'lightbulb',
  },
];

export const advisoryServices: AdvisoryService[] = [
  {
    id: 'visita',
    title: 'Visita de Asesoría Profesional',
    description:
      'Evaluación in situ de su espacio. Recomendaciones sobre diseño, distribución, materiales, colores e iluminación con estimaciones de costo orientativas.',
  },
  {
    id: 'precompra',
    title: 'Asesoría Precompra',
    description:
      'Análisis técnico y estructural de propiedades antes de concretar la compra. Informe detallado con observaciones, potencial de reforma y estimación de inversión.',
  },
  {
    id: 'computo',
    title: 'Cómputo, Desarrollo y Costeo',
    description:
      'Presupuesto integral que abarca materiales, traslado, colocación, mano de obra y detalles finales. Herramienta clave para planificar y financiar su proyecto.',
  },
  {
    id: 'estructural',
    title: 'Asesoría Estructural',
    description:
      'Diagnóstico de patologías edilicias: grietas, fisuras, asentamientos y desprendimientos. Determinación de causas y plan de reparación con respaldo técnico.',
  },
  {
    id: 'legal',
    title: 'Asesoría Legal y Linderal',
    description:
      'Resolución de conflictos sobre medianeras, servidumbres, humedades y derechos de copropiedad. Acompañamiento técnico en procesos administrativos y judiciales.',
  },
  {
    id: 'humedad',
    title: 'Asesoría por Humedad',
    description:
      'Diagnóstico personalizado de problemas de humedad ascendente, filtraciones y condensación. Informe técnico con soluciones eficientes y presupuesto de obra.',
  },
];
