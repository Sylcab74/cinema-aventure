<template>
  <div>
    <vue-glide :perView="5" v-model="active">
      <vue-glide-slide v-for="movie in movies" :key="movie.id">
        <div @click="changeMovie(movie.id - 1)">
          <span class="note">{{movie.note}}</span>
          <h2 class="title">{{movie.title}}</h2>
          <p class="genre">{{movie.gender}}</p>
        </div>
      </vue-glide-slide>
      <template slot="control">
          <button @click="decrement(active)" data-glide-dir="<">&lt;</button>
          <button @click="increment(active)" data-glide-dir=">">&gt;</button>
      </template>
    </vue-glide>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
import Vuex from 'vuex';
import store from './MovieStore';

export default {
  name: 'SliderComponent',
  store: { store },
  ...Vuex.mapGetters([
    'movieId',
    'movieLink',
  ]),
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          trailer: '/static/video/video.ovg',
          title: 'Avengers',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
        {
          id: 2,
          trailer: '/static/video/video.ovg',
          title: 'Batman',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
        {
          id: 3,
          trailer: '/static/video/video.ovg',
          title: 'Superman',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
        {
          id: 4,
          trailer: '/static/video/video.ovg',
          title: 'Iron man',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
        {
          id: 5,
          trailer: '/static/video/video.ovg',
          title: 'Kill bill',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
        {
          id: 6,
          trailer: '/static/video/video.ovg',
          title: 'Star wars',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        },
      ],
      active: store.getters.movieId,
      link: store.getters.link,
    };
  },
  methods: {

    ...Vuex.mapActions([
      'change',
      'increment',
      'decrement',
    ]),
    changeMovie(id) {
      store.dispatch('change', id);
      this.active = store.getters.movieId;
      this.link = store.getters.movieLink;
    },
    increment(id) {
      store.dispatch('increment', id);
      this.active = store.getters.movieId;
      this.link = store.getters.movieLink;
      if (this.active === this.movies.length) {
        store.dispatch('change', 0);
        this.active = store.getters.movieId;
        this.link = store.getters.movieLink;
      }
    },
    decrement(id) {
      store.dispatch('decrement', id);
      this.active = store.getters.movieId;
      this.link = store.getters.movieLink;
      if (this.active === -1) {
        store.dispatch('change', this.movies.length - 1);
        this.active = store.getters.movieId;
        this.link = store.getters.movieLink;
      }
    },
  },
};
</script>

