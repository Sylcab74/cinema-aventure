<template>
  <div style="position:relative">
    <div v-if="!single" class="backgroundTest" v-bind:style="{ backgroundImage: 'url(' + movies[id].images + ')' }"></div>
    <div v-else class="backgroundTest" v-bind:style="{ backgroundImage: 'url(' + movies[active].images + ')' }"></div>
    <div v-if="!single" class="movie">
        <div class="trailer" >
          <iframe
            width="700"
            height="394"
            :src="movies[id].trailer"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="presentation">
          <span class="note">{{movies[id].note}}/5</span>
          <h2 class="title">{{movies[id].title}}</h2>
          <p class="genre">{{movies[id].gender}}</p>
          <p class="synopsis">{{movies[id].synopsis}}</p>
          <a :href="movieLink" v-if="showMore">En savoir plus</a>
          <button v-if="like">J'aime</button>
        </div>
    </div>
    <div v-else class="movie single">
        <div class="trailer" >
          <iframe
            width="700"
            height="394"
            :src="movies[id].trailer"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="presentation">
          <span class="note">{{movies[active].note}}/5</span>
          <h2 class="title">{{movies[active].title}}</h2>
          <p class="genre">{{movies[active].gender}}</p>
          <p class="synopsis">{{movies[active].synopsis}}</p>
          <a :href="movieLink" v-if="showMore">En savoir plus</a>
          <button v-if="like" @click="popinLike" :disabled="disabled">J'aime</button>
        </div>
        <div class="modal" v-if="show">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" @click="hidePopin">&times;</span>
              <h2>Merci de votre avis</h2>
            </div>
            <div class="modal-body">
              <p>Votre like a bien été pris en compte.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import Vuex from 'vuex';
import store from './MovieStore';

export default {
  name: 'MovieComponent',
  store: { store },
  ...Vuex.mapGetters([
    'movieId',
    'movieLink',
  ]),
  props: {
    showMore: Boolean,
    like: Boolean,
    single: {
      type: Boolean,
      default: false,
    },
    active: {
      type: [Number, String],
      default: store.getters.movieId,
    },
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          trailer: 'http://www.youtube.com/embed/oKStYmMgNRA?autoplay=1&controls=0',
          title: 'Avengers',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/imgDesktop.jpg',
        },
        {
          id: 2,
          trailer: 'https://www.youtube.com/embed/GokKUqLcvD8?autoplay=1&controls=0',
          title: 'Batman',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/batman.jpg',
        },
        {
          id: 3,
          trailer: 'https://www.youtube.com/embed/T6DJcgm3wNY?autoplay=1&controls=0',
          title: 'Superman',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/superman.jpg',

        },
        {
          id: 4,
          trailer: '/static/video/video.ovg',
          title: 'Iron man',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/affiche.jpg',

        },
        {
          id: 5,
          trailer: '/static/video/video.ovg',
          title: 'Kill bill',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/affiche.jpg',

        },
        {
          id: 6,
          trailer: '/static/video/video.ovg',
          title: 'Star wars',
          note: '4,3',
          gender: 'Action/Aventure',
          synopsis: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          images: './static/images/affiche.jpg',

        },
      ],
      disabled: false,
      show: false,
      link: store.getters.movieLink,
    };
  },
  methods: {
    popinLike() {
      this.disabled = true;
      this.show = true;
    },
    hidePopin() {
      this.show = false;
    },
  },
  computed: {
    id() {
      return store.getters.movieId;
    },
    movieLink() {
      return store.getters.movieLink;
    },
  },
};
</script>

