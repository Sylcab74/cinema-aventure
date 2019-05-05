import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import HelloWorld from '@/components/HelloWorld';
import Movies from '@/pages/Movies';
import Events from '@/pages/Events';
import VueGlide from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';

Vue.use(Router);
Vue.use(VueGlide);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
  ],
  mode: 'history',
});
