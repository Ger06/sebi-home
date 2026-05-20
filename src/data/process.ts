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
      'Nos comunicamos para conocer su proyecto, necesidades y expectativas. Una primera charla sin compromiso que sienta las bases del trabajo conjunto.',
  },
  {
    number: '02',
    title: 'Visita al terreno o propiedad',
    description:
      'Relevamos el espacio en persona: medidas, orientación, entorno, condicionantes y potencial constructivo del lote o unidad existente.',
  },
  {
    number: '03',
    title: 'Diagnóstico y propuesta',
    description:
      'Elaboramos un diagnóstico técnico y presentamos una propuesta conceptual con alternativas de diseño, organización de ambientes y primeras referencias de materialidad.',
  },
  {
    number: '04',
    title: 'Anteproyecto',
    description:
      'Desarrollamos plantas, cortes y vistas del proyecto con una estimación de superficie y costo de obra. El cliente aprueba la dirección antes de avanzar.',
  },
  {
    number: '05',
    title: 'Proyecto ejecutivo',
    description:
      'Documentación técnica completa: planos de arquitectura, estructura, instalaciones y memorias descriptivas necesarias para tramitar permisos y ejecutar la obra.',
  },
  {
    number: '06',
    title: 'Gestión de permisos',
    description:
      'Tramitamos la documentación ante el Gobierno de la Ciudad o municipio correspondiente. Acompañamos cada paso del proceso administrativo.',
  },
  {
    number: '07',
    title: 'Licitación y contratación',
    description:
      'Solicitamos presupuestos a empresas constructoras seleccionadas, comparamos ofertas y asesoramos al cliente en la elección del contratista más conveniente.',
  },
  {
    number: '08',
    title: 'Inicio de obra',
    description:
      'Coordinamos el inicio de los trabajos, definimos el cronograma con el constructor y establecemos los canales de comunicación para el seguimiento semanal.',
  },
  {
    number: '09',
    title: 'Dirección de obra',
    description:
      'Supervisamos el avance con visitas periódicas a la obra. Controlamos calidad de ejecución, materiales y cumplimiento del proyecto, resolviendo imprevistos con agilidad.',
  },
  {
    number: '10',
    title: 'Entrega y post-obra',
    description:
      'Verificamos el cierre de todos los ítems y entregamos la obra terminada en el plazo indicado. Brindamos acompañamiento post-entrega para garantizar su satisfacción.',
  },
];
