export interface MainService {
  id: string;
  title: string;
  description: string;
  icon: string;
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

