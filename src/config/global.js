export default {
  global: {
    componenteFormativo: 'Habilidades para desarrollar en el siglo XXI',
    descripcionCurso:
      'La formación de capacidades y habilidades es una tarea urgente, en un mundo cada vez más interconectado y con altos niveles de interacción entre distintos espacios mundiales. El proceso de alfabetización tecnológica cobra cada vez más importancia, para incorporar de manera rápida y efectiva a los ciudadanos a las nuevas formas de empleo, estudio y relaciones sociales con la ayuda de los sistemas de información y comunicación TIC.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Capital humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación del capital humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Identificación y cierre de brechas para el capital humano',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Educación para el siglo XXI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Definición del nuevo entorno mundial y la supervivencia humana',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contexto social y cultural y el nuevo entorno mundial',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Nuevos ambientes de aprendizaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'La tecnología y las habilidades para la sociedad del conocimiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos básicos: ¿qué es la tecnología?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La tecnología y la informática',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Competencias para educación en tecnología',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: ' La alfabetización en tecnología',
            hash: 't_3_4',
          },

          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: ' El sentido de alfabetizar en tecnología para la innovación y la creatividad',
            hash: 'AAA',
          },          

        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Andrade L., Lotero A. (1993). Una propuesta de estructura curricular para el desarrollo del área de tecnología e informática. Revista Educación en Tecnología Vol. 3 No. 3. Universidad Pedagógica Nacional.',
    },
    {
      referencia:
        'Botero, J. E. (2018). Educación STEM: introducción a una nueva forma de enseñar y aprender. STEM Colombia.',
    },
    {
      referencia:
        'Bybee, R. (2013). El caso de la educación STEM: desafíos y oportunidades. Prensa NSTA., 75.',
    },
    {
      referencia:
        'Consejo Nacional, D. I. (2012). Investigación en educación basada en disciplinas: comprensión y mejora del aprendizaje en ciencias e ingeniería de pregrado.<em> National Research Council of the National Academies.</em>',
    },
    {
      referencia:
        'Ferrer, R. (2005). Diseño de páginas web en educación. Tendencias pedagógicas, (10), 199-222.',
    },
    {
      referencia:
        'Katzenmeyer, C. Y. (2006). Perspectivas de la Fundación Nacional de Ciencias sobre la naturaleza de la evaluación del programa STEM. Nuevas direcciones para la evaluación, 109, 7-18.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (2008), Guía 30 ¡Ser Competente en Tecnología: una necesidad para el desarrollo! Estas Orientaciones para la Educación en Tecnología forman parte del Proyecto Ministerio de Educación Nacional (MEN) - Ascofade (Asociación Colombiana de Facultades de Educación).',
    },
    {
      referencia:
        'Purzer, Ş. S. (2014). Ingeniería en entornos preuniversitarios: síntesis de investigación, políticas y prácticas. Prensa de la Universidad de Purdue, ME (Eds.).',
    },
    {
      referencia:
        'Stagnaro, A. A. (1993). La antropología en la comunidad científica: entre el origen del hombre y la caza de cráneos-trofeo (1870-1910). Alteridades, 3(6), 53-65.',
    },
    {
      referencia:
        'Stevenson, H. (2014). Mitos y motivos detrás de la educación STEM (ciencia, tecnología, ingeniería y matemáticas) y la narrativa sobre la escasez de trabajadores STEM, Problemas en la formación del profesorado, 23 (1), 133-146.',
    },
    {
      referencia:
        'Toma, R. B. (2016). Modelo interdisciplinar de educación STEM para la etapa de Educación Primaria. I. M.',
    },
    {
      referencia:
        'Traig, J.  (2015).<em> STEM to Story: Enthralling and Effective Lesson Plans for Grades 5-8.</em> Jossey-Bass. (Ed.).',
    },
    {
      referencia:
        'Vasquez, J. A.; Comer, M. & Sneider C. (2013). <em>STEM lesson essentials, grades 3-8: Integrating science, technology, engineering, and mathematics. Portsmouth, NH: Heinemann. 58-76.</em>',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'Son aquellas habilidades, capacidades y conocimientos que una persona tiene para cumplir eficientemente determinada tarea. Las competencias son características que capacitan a alguien en un determinado campo.',
    },
    {
      termino: 'Capital humano',
      significado:
        'Es una medida del valor económico de las habilidades profesionales de una persona.',
    },
    {
      termino: 'Innovación',
      significado:
        'Consiste en utilizar conocimiento para construir un nuevo camino que lleve a una determinada meta.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Consiste básicamente en llegar a establecer conexiones nuevas entre ideas ya existentes.',
    },
  ],
  complementario: [
    {
      texto:
        'MEN. (2008). ¡Ser competente en tecnología: una necesidad para el desarrollo!',
      tipo: 'Cartilla',
      descarga: '/downloads/articles-160915_archivo.pdf',
    },
    {
      texto:
        'Netflix. (2021). <em> Breaking Boundaries: The Science of Our Planet | Official Trailer |</em> Netflix. [Video]. Youtube.',
      tipo: 'Documental',
      link: 'https://youtu.be/Gb6wQtNjblk ',
    },
    {
      texto:
        'Canal Salesianos S.S.M. (2012). Educación en el siglo XXI. Nuevas necesidades ¿nuevos retos? [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/L6MNTXi82GM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Iván M. González',
        cargo: 'Instructor',
        centro:
          'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },

      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta temática',
        centro:
          'Centro de Diseño Tecnológico Industrial (DCTI) - Regional Valle',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja – Regional Tolima',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios -  Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
