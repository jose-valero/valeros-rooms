<template>
  <div class="slider-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';

import 'tiny-slider/dist/tiny-slider.css';

export default {
  name: 'TinySlider',

  data() {
    return {
      // eslint-disable-next-line max-len
      // cuando indicamos un dolar dentro dela variable indicamos que no vamos a aplicar reactividad a este elemento de esta forma se anula y los observables no se aplican a esta variable
      $slider: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const settings = {
        container: this.$el,
        mode: 'gallery',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
      };
      this.$slider = tns(settings);
    },
  },
  // eslint-disable-next-line max-len
  // metodo para cuando se vaya a destruir dicho componente, ahora le indicamos que si el componente de slider ya fue definido entonces vamos a adentrarnos en el motodo de slider y aplicamos el metodo de destruir, de esta forma lo que vamos a hacer es liberar memoria una vez que el componente sea destruido y el virtual dom tambien va a liberar espacio, en total menos carga para renderiado de codigo
  beforeDestroy() {
    if (this.$slider) {
      this.$slider.destroy();
    }
  },
};
</script>
