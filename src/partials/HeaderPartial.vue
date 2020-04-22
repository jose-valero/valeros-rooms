<template>
  <header class="bg-white py-3 shadow">
    <div class="container">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-no-shrink mr-6">
          <icon v-show="true"></icon>
          <a
            class="text-black hover:text-grey-darkest no-underline font-semibold text-lg"
            href="#"
          >Rooms</a>
        </div>
        <div class="flex items-center w-auto">
          <div class="items__controls">
            <div class="flex" v-if="user">
              <button class="mr-2 flex items-center">
                <i class="material-icons">add</i>
              </button>
              <button class="mr-4 flex items-center">
                <i class="material-icons">notifications</i>
              </button>
              <div class="flex items-center">
                <img
                  class="w-8 h-8 rounded-full mr-2"
                  src="https://avatars2.githubusercontent.com/u/1901273?s=460&v=4"
                  alt="Avatar of Javier Diaz"
                />
                <div class="text-sm">
                  <p class="text-black leading-none">{{ user.name }}</p>
                  <p class="text-grey-dark">Online</p>
                </div>
              </div>
            </div>
            <div v-else>
              <button
                class="btn__outline btn__outline--teal rounded mr-2"
                @click.prevent="getLogin"
              >Login</button>
              <button
                class="bg-yellow-dark text-yellow-darker font-semibold py-2 px-4 rounded"
                @click.prevent="signUp"
              >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import { mapGetters } from 'vuex';

import icon from '@/components/icon.vue';

export default {
  name: 'HeaderPartial',
  components: { icon },
  data() {
    return {
      isAuthenticated: true,
    };
  },
  methods: {
    getLogin() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: true,
      });
    },
    signUp() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'register',
        value: true,
      });
    },
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
  },
};
</script>
