<template>
  <default-layout>
    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Recomendations</h1>
      <div class="section grid-container mb-8">
        <tiny-slider>
          <div class="slider-item" >
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #1</h2>
            <p class="card_description">CABA, Argentina</p>
          </div>
          <div class="slider-item">
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1522107177-01884fcfa2bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #2</h2>
            <p class="card_description">PLC, Venezuela</p>
          </div>
          <div class="slider-item">
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1566064282945-7d97dc617a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #3</h2>
            <p class="card_description">Caracas, Venezuela</p>
          </div>
          <div class="slider-item">
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1532794801295-575d878162a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #4</h2>
            <p class="card_description">Bogota, Colombia</p>
          </div>
          <div class="slider-item">
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #5</h2>
            <p class="card_description">Mar de Plata, Argentina</p>
          </div>
          <div class="slider-item">
            <img
              class="img_size"
              src="https://images.unsplash.com/photo-1582571450693-1147f1d457d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=" Foto de casa en Argentina"
            />
            <h2>Recomendation #6</h2>
            <p class="card_description">Barranquilla, Colombia</p>
          </div>
        </tiny-slider>
      </div>
    </section>

    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Explore</h1>
      <div class="section__explore grid-container mb-8">
        <div class="house__card mb-3" v-for="room in rooms" :key="room['.key']">
          <div class="house__thumbnail relative overflow-hidden">
            <img class="house__image absolute w-full" width="250" :src="room.featured_image" />
          </div>
          <div class="house__content bg-white p-3 border rounded">
            <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
              {{ room.type }}
            </div>
            <div class="house__title font-bold mb-2">{{ room.title }}</div>
            <div class="house__price text-xs">
              <span class="font-bold">${{ room.price }}</span> per night
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link
          :to="{ name: 'SearchPage' }"
          class="py-3 px-12 bg-yellow-dark no-underline text-yellow-darker text-lg rounded"
          >Show all</router-link
        >
      </div>
    </section>
  </default-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TinySlider from '@/components/TinySlider.vue';

export default {
  name: 'HomePage',
  beforeCreate() {
    this.$store.dispatch('FETCH_ROOMS', 12);
  },
  computed: {
    ...mapGetters(['rooms']),
  },
  components: {
    DefaultLayout,
    TinySlider,
  },
};
</script>

<style lang="css">
.section__explore {
  grid-template-columns: repeat(4, 1fr);
}

.house__card > .house__thumbnail {
  height: 170px;
}

.house__thumbnail > .house__image {
  width: 100%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 992px) {
  .house__card > .house__thumbnail {
    height: 150px;
  }
  .section__explore {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 576px) {
  .section__explore {
    grid-template-columns: repeat(1, 1fr);
  }

  .house__card > .house__thumbnail {
    height: 120px;
  }
}
.img_size {
  width: 230px;
  height:230px;
}
</style>
