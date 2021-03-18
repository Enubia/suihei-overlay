import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/styles/base.scss';

// uncomment this for development
// import { testData } from './helper/config';

// testData();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
