<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p La formación de capacidades y habilidades es una tarea urgente, en un mundo cada vez más interconectado y con altos niveles de interacción entre distintos espacios mundiales. Ahora el desafío se desplazó hacia los terrenos de la creatividad y la innovación en lo cotidiano, a la capacidad de saber buscar, seleccionar, gestionar, analizar, comparar, seleccionar la información adecuada y a la necesidad de la generación de conocimiento. 

    p.mb-5 A continuación, se invita a ver el siguiente video: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U0qHb-6CHwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)









</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
