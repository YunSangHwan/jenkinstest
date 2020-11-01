import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Weather from '@/views/Weather.vue';
import Map from '@/views/Map.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/test',
    name: 'Weather',
    components: {
      content: Weather,
    },
  },
  {
    path: '/map',
    name: 'Map',
    components: {
      content: Map,
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
