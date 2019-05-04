<template>
  <div>
    <div class="movie">
        <div class="trailer">
          <video controls src="video.ogv">Trailer Avengers</video>
        </div>
        <div class="presentation">
          <span class="note">4.3/5</span>
          <h2 class="title">Avengers</h2>
          <p class="genre">Action/Aventure</p>
          <p class="synopsis">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        </div>
    </div>
    <div>
      <vue-glide :bound="true" :perView="5" v-model="active">
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
          title: 'Avengers',
          note: '4,3',
          gender: 'Action/Aventure',
        },
        {
          id: 2,
          title: 'Batman',
          note: '4,3',
          gender: 'Action/Aventure',
        },
        {
          id: 3,
          title: 'Superman',
          note: '4,3',
          gender: 'Action/Aventure',
        },
        {
          id: 4,
          title: 'Iron man',
          note: '4,3',
          gender: 'Action/Aventure',
        },
        {
          id: 5,
          title: 'Kill bill',
          note: '4,3',
          gender: 'Action/Aventure',
        },
        {
          id: 6,
          title: 'Star wars',
          note: '4,3',
          gender: 'Action/Aventure',
        },
      ],
      active: 1,
    };
  },
  methods: {

    changeSlide(id) {
      // eslint-disable-next-line no-console
      console.log(this.active);
      // eslint-disable-next-line no-console
      console.log(id);
      this.active = id - 1;
    },

  },
};
</script>

