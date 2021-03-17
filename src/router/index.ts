import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Overlay from '../views/Overlay.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Overlay',
    component: Overlay
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
];

const router = new VueRouter({
  routes
});

export default router;
