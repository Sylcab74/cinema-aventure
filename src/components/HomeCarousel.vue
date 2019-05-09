<template>
  <section class="sliderContainer" id="filmCarousel">
    <div class="backgroundImage">
      <img src="../assets/imgDesktop.jpg" alt="Background">
    </div>
    <div class="blockChoice">
      <h2>{{subtitle}}</h2>
      <ul class="listFilms">
        <li class="item" v-for="movie in movies.slice(0,6)" :key="movie.id">
          <div class="note">
            <p>{{ movie.rate }}/5</p>
          </div>
          <div>
            <h3>{{ movie.title }}</h3>
            <h4>{{ movie.category }}</h4>
          </div>
        </li>
      </ul>
    </div>
    <div class="blockView">
      <iframe 
        width="700"
        height="394"
        :src="movie.trailer"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
        <div class="filmDescription">
          <div class="filmTitleNote">
            <div class="note">
              <p>{{ movie.rate }}/5</p>
            </div>
            <h3>{{ movie.title }}</h3>
          </div>
          <h4>{{ movie.title }}</h4>
          <p>{{ movie.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 2,
          title: 'Ta mère le retour',
          rate: 5,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 3,
          title: '7 grosse pute',
          rate: 2,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 4,
          title: 'un test',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 5,
          title: 'Objectif expedition',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 6,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 6,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 7,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 8,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
        },
        {
          id: 8,
          title: 'Ta mère',
          rate: 4,
          category: 'Action / Aventure / Science Fiction',
          description: `Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié
            toutes les pierres du Gant de l'infini , les Avengers et les Gardiens de la Galaxie
            ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme
            de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War
            Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour
            ramener leurs coéquipiers disparus et vaincre Thanos en se
            faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.`,
          trailer: 'http://www.youtube.com/embed/oKStYmMgNRA?autoplay=1&controls=0',
        },
      ],
      movie: {
        id: 8,
        title: 'Ta mère',
        rate: 4,
        category: 'Action / Aventure / Science Fiction',
        description: `Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié
          toutes les pierres du Gant de l'infini , les Avengers et les Gardiens de la Galaxie
          ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme
          de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War
          Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour
          ramener leurs coéquipiers disparus et vaincre Thanos en se
          faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.`,
        trailer: 'http://www.youtube.com/embed/oKStYmMgNRA?autoplay=1&controls=0',
      },
    };
  },
};
</script>
