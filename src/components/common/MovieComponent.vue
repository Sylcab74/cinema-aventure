<template>
  <div>
    <div class="movie">
        <div class="trailer">
          <video controls :src="trailer">Trailer {{movies[active].title}}</video>
        </div>
        <div class="presentation">
          <span class="note">{{movies[active].note}}/5</span>
          <h2 class="title">{{movies[active].title}}</h2>
          <p class="genre">{{movies[active].gender}}</p>
          <p class="synopsis">{{movies[active].synopsis}}</p>
          <a :href="link">En savoir plus</a>
        </div>
    </div>
    <div>
      <vue-glide :perView="5" v-model="active">
        <vue-glide-slide v-for="movie in movies" :key="movie.id">
          <div @click="changeSlide(movie.id)">
            <span class="note">{{movie.note}}</span>
            <h2 class="title">{{movie.title}}</h2>
            <p class="genre">{{movie.gender}}</p>
          </div>
        </vue-glide-slide>
        <template slot="control">
            <button data-glide-dir="<">&lt;</button>
            <button data-glide-dir=">">&gt;</button>
        </template>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';

export default {
  name: 'MovieComponent',
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
      active: 0,
      link: '/movie/1',
    };
  },
  methods: {

    changeSlide(id) {
      this.active = id - 1;
      this.link = /movie/ + id;
    },

  },
};
</script>

