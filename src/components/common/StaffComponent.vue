<template>
  <div class="staff">
        <div class="actors">
          <h3>Acteurs : </h3>
          <hr>
          <div v-for="actor in filterActorsByMovie(movie)" :key="actor.id" class="actor">
            <img :src="actor.photo" alt="actor.prenom">
            <p class="firstname">{{actor.firstname}}</p>
            <p class="lastname">{{actor.lastname}}</p>
          </div>
        </div>
        <div class="filmmakers">
          <h3>Réalisateurs : </h3>
          <hr>
          <div v-for="filmmaker in filterFilmMakerByMovie(movie)" :key="filmmaker.id" class="filmmaker">
            <img :src="filmmaker.photo" alt="filmmaker.prenom">
            <p class="firstname">{{filmmaker.firstname}}</p>
            <p class="lastname">{{filmmaker.lastname}}</p>
          </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'StaffComponent',
  props: {
    movie: [Number, String],
  },
  data() {
    return {
      actors: [
        {
          id: 1,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 2,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 3,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 4,
          idMovie: 2,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 5,
          idMovie: 3,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 6,
          idMovie: 4,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 7,
          idMovie: 5,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 8,
          idMovie: 6,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
      ],
      filmmakers: [
        {
          id: 1,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 2,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 3,
          idMovie: 1,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 4,
          idMovie: 2,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 5,
          idMovie: 3,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 6,
          idMovie: 4,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 7,
          idMovie: 5,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
        {
          id: 8,
          idMovie: 6,
          photo: '/static/images/index.jpg',
          firstname: 'Robert',
          lastname: 'Downey',
        },
      ],
    };
  },
  methods: {
    filterActorsByMovie(idMovie) {
      /* eslint-disable */
      return this.actors.filter(actors => actors.idMovie == idMovie);
    },
    filterFilmMakerByMovie(idMovie) {
      /* eslint-disable */
      return this.filmmakers.filter(filmmakers => filmmakers.idMovie == idMovie);
      /* eslint-enable */
    },
  },
};
</script>

