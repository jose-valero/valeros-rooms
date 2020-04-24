import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAIIIgZ7mmpA93Hbu4v0qCkYzLIzU8rmcQ',
  authDomain: 'valeros-rooms.firebaseapp.com',
  databaseURL: 'https://valeros-rooms.firebaseio.com',
  projectId: 'valeros-rooms',
  storageBucket: 'valeros-rooms.appspot.com',
  messagingSenderId: '631628204179',
  appId: '1:631628204179:web:f0ee0581a978957160a566',
  measurementId: 'G-QJWLB7MK8V',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
