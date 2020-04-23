<template>
  <div class="default-layout">
    <header-partial></header-partial>
    <section class="section__hero py-6 bg-black bg-cover bg-center">
      <div class="container">
        <div class="section__form bg-white p-4 w-1/2 shadow-md">
          <h1 class="mb-2 text-4xl font-light text-grey-darkest">Find homes on Valero's Rooms</h1>
          <h2 class="mb-6 text-base text-grey-dark font-normal">
            Discover entire homes and private rooms perfect for any trip.
          </h2>
          <form class="form__search">
            <div class="mb-4">
              <label class="input__label" for="where">Where</label>
              <div class="form__field relative">
                <i class="input-icon material-icons absolute text-grey-darker">search</i>
                <input
                  class="input__search"
                  id="where"
                  type="text"
                  placeholder="PLC, Venezuela"
                />
              </div>
            </div>
            <button
              class="px-2 py-4 bg-yellow-dark font-semibold w-full rounded text-yellow-darker"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
    <main class="main">
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
    <!-- Modals -->
    <!-- Modals LOGIN -->
    <modal :show="modals.login" @close-modal="closeModal">
      <h2 class="text-gray-darkest font-semibold text-center mb-6">
        Welcome to
        <span class="valero">valero</span>
        <span class="text-blue">'</span>
        <span class="valero">s</span> Room
      </h2>
      <form>
        <div class="mb-4">
          <label class="input__label">Email</label>
          <div class="form__field relative">
            <input
              v-model="formLogin.email"
              class="input__field"
              type="text"
              placeholder="bruce.wayne@imnotbatman.org"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label">Password</label>
          <div class="form__field relative">
            <input
              v-model="formLogin.password"
              class="input__field"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div class="mb-4">
          <toggle-input v-model="formLogin.rememberMe"></toggle-input>
          <label class="rememberMe">remember me</label>
        </div>
        <div class="mb-4">
          <button class="btn btn-primary w-full mr-3">Login</button>
        </div>
      </form>
    </modal>
    <!-- Modals REGISTER -->
    <modal :show="modals.register" @close-modal="closeModalRegister">
      <h2 class="text-gray-darkest font-semibold text-center mb-6">Join US</h2>
      <form class="from" @submit.prevent="registerHandlerSubmit">
        <div class="mb-4">
          <label class="input__label" for="name">Name</label>
          <div class="form__field relative">
            <input
              v-model="formRegister.name"
              id="name"
              class="input__field"
              type="text"
              placeholder="Bruce"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label" for="email">Email</label>
          <div class="form__field relative">
            <input
              v-model="formRegister.email"
              id="email"
              class="input__field"
              type="text"
              placeholder="bruce.wayne@imnotbatman.org"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label" for="password">Password</label>
          <div class="form__field relative">
            <input
              v-model="formRegister.password"
              class="input__field"
              id="oasswird"
              type="password"
              placeholder="create a password"
            />
          </div>
        </div>
        <div class="mb-4">
          <button class="btn btn-primary w-full mr-3">Register</button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import HeaderPartial from '@/partials/HeaderPartial.vue';

import FooterPartial from '@/partials/FooterPartial.vue';

import Modal from '@/components/Modal.vue';

import ToggleInput from '@/components/ToggleInput.vue';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
        rememberMe: false,
      },
      formRegister: {
        name: '',
        email: '',
        password: '',
      },
    };
  },

  computed: {
    ...mapGetters(['modals']),
  },
  components: {
    HeaderPartial,
    FooterPartial,
    Modal,
    ToggleInput,
  },
  methods: {
    closeModal() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: false,
      });
    },
    closeModalRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'register',
        value: false,
      });
    },
    registerHandlerSubmit() {
      this.$store.dispatch('CREATE_USER', this.formRegister).then(() => {
        this.closeModalRegister();
      });
    },
  },
};
</script>

<style>
.section__hero {
  min-height: 450px;
  background-image: url('https://images.unsplash.com/photo-1504202302068-15fc2055f7f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80');
}

.form__field .input-icon {
  top: 7px;
  left: 9px;
}

.form__field > .input__search {
  @apply pl-10;
}

@media (max-width: 576px) {
  .section__hero {
    min-height: 250px;
  }

  .section__form {
    @apply w-full;
  }
}
.valero {
  color: #4a5568;
}
.btn:hover {
  background-color: #f2d024;
}
.rememberMe {
  position: relative;
  bottom: 5px;
}
</style>
