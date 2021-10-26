<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 La Tecnología y las habilidades para la sociedad del conocimiento

    .row
          
      .col-md-6

        p En Colombia en el año 2008 el Ministerio de Educación Nacional estableció una serie de guías para la educación inicial, básica y media, para el caso de las habilidades Digitales, presenta la guía No. 30 Ser competente en Tecnología ¡Una necesidad para el desarrollo!, la cual presenta una serie de orientaciones a los maestros y maestras que busca motivar a los estudiantes en la comprensión y apropiación de la tecnología, desde las relaciones que establecen los seres humanos, para enfrentar los problemas y desde sus capacidades resolverlos a través de la invención y con el fin de estimular su creatividad. Esta es una de muchas otras acciones que se están realizando en el país y en la región.


      .col-md-6.mb-4.mb-md-5
        figure
        img.img-300(src='@/assets/tema1/img-23.svg')


    .titulo-segundo
      h2 2.3  Nuevos ambientes de aprendizaje.

    .row.mb-5.justify-content-around.fnd-1
      .col-lg-4      
        figure
          img.img-380(src='@/assets/tema1/img-24.svg')
      .col-lg-8.align-self-center.px-2.tt1

        p La tecnología busca resolver problemas y satisfacer necesidades individuales y sociales, transformando el entorno y la naturaleza mediante la utilización racional, crítica y creativa de recursos y conocimientos. Según afirma la Organización para la Cooperación y el Desarrollo Económico – OECD y su Consejo Nacional de Investigación en el año 2002, la mayoría de la gente suele asociar la tecnología simplemente con artefactos como computadoras y software, aviones, pesticidas, plantas de tratamiento de agua, píldoras anticonceptivas y hornos microondas, por mencionar unos pocos ejemplos. Sin embargo, la tecnología es mucho más que sus productos tangibles. Otros aspectos igualmente importantes son el conocimiento y los procesos necesarios para crear y operar esos productos, tales como la ingeniería del saber cómo y el pensamiento de diseño, la experticia de la manufactura y las diversas habilidades técnicas

        p National Research Council. Technically speaking: why all Americans need to know more about technology, 2002.


    .row.mb-5
      .col-md-6.mb-5.mb-md-0

        p.mb-3 La tecnología incluye, tanto los artefactos tangibles del entorno artificial diseñados por los humanos e intangibles como las organizaciones o los programas de computador. También involucra a las personas, la infraestructura y los procesos requeridos para diseñar, manufacturar, operar y reparar los artefactos.


    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Los artefactos") Son dispositivos, herramientas, aparatos, instrumentos y máquinas que potencian la acción humana. Se trata entonces, de productos manufacturados percibidos como bienes materiales por la sociedad.

          
          p.text-small(numero="2" titulo="Los procesos") Son fases sucesivas de operaciones que permiten la transformación de recursos y situaciones para lograr objetivos y desarrollar productos y servicios esperados. En particular, los procesos tecnológicos contemplan decisiones asociadas a complejas correlaciones entre propósitos, recursos y procedimientos para la obtención de un producto o servicio. Por lo tanto, involucran actividades de diseño, planificación, logística, manufactura, mantenimiento, metrología, evaluación, calidad y control. Los procesos pueden ilustrarse en áreas y grados de complejidad tan diversos como la confección de prendas de vestir y la industria petroquímica.
          
          p.text-small(numero="3" titulo="Los sistemas ") Son conjuntos o grupos de elementos ligados entre sí por relaciones estructurales o funcionales, diseñados para lograr colectivamente un objetivo. En particular, los sistemas tecnológicos involucran componentes, procesos, relaciones, interacciones y flujos de energía e información, y se manifiestan en diferentes contextos: la salud, el transporte, el hábitat, la comunicación, la industria y el comercio, entre otros. La generación y distribución de la energía eléctrica, las redes de transporte, las tecnologías de la información y la comunicación, el suministro de alimentos y las organizaciones, son ejemplos de sistemas tecnológicos.    

    separador

    .titulo-segundo
      h2 3.2  La Tecnología y la Informática

    figure.mb-5 
      img.img-380(src='@/assets/tema1/img-26.png')

    p.mb-5 La informática se refiere al conjunto de conocimientos científicos y tecnológicos que hacen posible el acceso, la búsqueda y el manejo de la información por medio de procesadores. La informática hace parte de un campo más amplio denominado Tecnologías de la Información y la Comunicación (TIC), entre cuyas manifestaciones cotidianas encontramos la radio, el televisor, el celular, los computadores, las redes y la Internet.

    figure.mb-5 
      img.img-300(src='@/assets/tema1/img-27.svg')
      
    p.mb-5 La informática constituye uno de los sistemas tecnológicos de mayor incidencia en la transformación de la cultura contemporánea debido a que atraviesa la mayor parte de las actividades humanas. En las instituciones educativas, por ejemplo, a raíz del confinamiento ocasionado por la Covid-19, la informática gano terreno como área del conocimiento y se ha constituido en una gran oportunidad para la modernización y el mejoramiento de los procesos pedagógicos. 

    p.mb-5 Para la educación en tecnología, la informática se configura como herramienta que permite desarrollar proyectos y actividades tales como la búsqueda, la selección, la organización, el almacenamiento, la recuperación y la visualización de información. Así mismo, la simulación, el diseño asistido, la manufactura y el trabajo colaborativo son otras de sus múltiples posibilidades.
    
    separador


    .titulo-segundo
      h2 3.3 Competencias para educación en Tecnología

    p.mb-5 aqui falta, no lo hize 

    .row
          
      .col-md-6

        p Naturaleza y evolución de la Tecnología

        p Se refiere a las características y objetivos de la tecnología, a sus conceptos fundamentales (sistema, componente, estructura, función, recurso, optimización, proceso, etc.), a sus relaciones con otras disciplinas y al reconocimiento de su evolución a través de la historia y la cultura.



      .col-md-6.mb-4.mb-md-0
        figure
        img.img-300(src='@/assets/tema1/img-28.svg')    




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
