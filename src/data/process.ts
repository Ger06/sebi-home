export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Primer contacto',
    description:
      'Nos comunicamos para conocernos y entender su proyecto, necesidades y expectativas.',
  },
  {
    number: '02',
    title: 'Visita al espacio',
    description:
      'Visitamos el espacio, conversamos sobre sus inquietudes y brindamos una opinión basada en nuestra experiencia profesional.',
  },
  {
    number: '03',
    title: 'Presupuesto de honorarios',
    description:
      'Elaboramos un presupuesto de honorarios profesionales para iniciar el proceso de desarrollo del proyecto.',
  },
  {
    number: '04',
    title: 'Inicio del proyecto',
    description:
      'Aceptado el presupuesto, iniciamos el proceso de proyecto con plantas, cortes y vistas preliminares.',
  },
  {
    number: '05',
    title: 'Diseño colaborativo',
    description:
      'Creamos junto a usted un proyecto que reúna sus deseos, inquietudes y propuestas con nivel profesional.',
  },
  {
    number: '06',
    title: 'Proyecto ejecutivo',
    description:
      'El proyecto detallado minuciosamente nos permite llegar a un presupuesto de obra preciso.',
  },
  {
    number: '07',
    title: 'Trámites y licencias',
    description:
      'Lo ayudamos con los trámites de licencia de obra ante el organismo municipal correspondiente.',
  },
  {
    number: '08',
    title: 'Selección de materiales',
    description:
      'Seleccionamos los materiales junto a usted y comenzamos la obra con el equipo de construcción.',
  },
  {
    number: '09',
    title: 'Dirección de obra',
    description:
      'Visitamos semanalmente la obra junto a usted para supervisar el avance y resolver imprevistos.',
  },
  {
    number: '10',
    title: 'Entrega y post-obra',
    description:
      'Entregamos la obra finalizada en el plazo indicado y brindamos acompañamiento post-entrega.',
  },
];
