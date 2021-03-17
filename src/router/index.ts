import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Overlay from '../views/Overlay.vue';

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  }
];

const router = new VueRouter({
  // base: '/suihei-Overlay',
  routes
});

export default router;
