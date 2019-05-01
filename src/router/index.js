import Vue from 'vue';
import Router from 'vue-router';
import VueGlide from 'vue-glide-js';
import Vuex from 'vuex';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import Movie from '@/pages/Movie';
import 'vue-glide-js/dist/vue-glide.css';

Vue.use(Router);
Vue.use(VueGlide);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
  ],
  mode: 'history',
});
