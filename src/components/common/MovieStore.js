import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {

  CHANGE_MOVIE: (state, id) => {
    state.movies.active = id;
    state.movies.link = /movie/ + id;
  },
  INCREMENT_MOVIE: (state, id) => {
    state.movies.active = id + 1;
    state.movies.link = /movie/ + (id + 1);
  },
  DECREMENT_MOVIE: (state, id) => {
    state.movies.active = id - 1;
    state.movies.link = /movie/ + (id - 1);
  },
};

const actions = {

  change: (store, id) => {
    store.commit('CHANGE_MOVIE', id);
  },
  increment: (store, id) => {
    store.commit('INCREMENT_MOVIE', id);
  },
  decrement: (store, id) => {
    store.commit('DECREMENT_MOVIE', id);
  },
};

const getters = {

  movieId: state => state.movies.active,
  movieLink: state => state.movies.link,

};

const state = {

  movies: {

    active: 0,
    link: '/movie/0',

  },

};


const store = new Vuex.Store({

  state,
  mutations,
  getters,
  actions,
});

global.store = store;

export default store;
