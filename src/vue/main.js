import Vue from 'vue'
import MovieItemComponent from './components/movieitem.vue'
import Vuetify from 'vuetify'
import router from './routes.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.component('movie-item', MovieItemComponent);

const axios = require('axios');

window.shared_data = {
  pickedMovie: {},
  movies: [],
  getAllMovies : axios.get('/api/movies/all')
    .then(function (response) {
      window.shared_data.movies.push(...response.data);
    })
    .catch(function (error) {
      console.log(error);
    }),
  getMovie : function(id)
  {
    axios.get('/api/movies/'+id)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
  },
  addMovie : function(movie)
  {
    axios.post('/api/movies/add', movie)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response){
      console.log(response);
    })
  },
  updateMovie : function(id, movie) {
    axios.post('/api/movies/'+id, movie)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response){
      console.log(response);
    })
  }
}

new Vue({
  el: '#app',
  router
})