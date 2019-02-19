import Vue from 'vue'
import MovieItemComponent from './components/movieitem.vue'
import addMovieComponent from './components/add.vue'
import Vuetify from 'vuetify'
import router from './routes.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-add', addMovieComponent);

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
      return response.data;
    })
  },
  updateMovie : function(id, movie) {
    axios.post('/api/movies/'+id, movie)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response){
      console.log(response);
      return response.data;
    })
  },
  addRate : function(id, newRate) {
    axios.post('/api/movies/'+id+'/addRate', newRate)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response){
      console.log(response);
      return response.data;
    })
  },
  deleteMovie : function(id){
    axios.post('/api/movies/'+id+'/delete')
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response){
      console.log(response);
      return response.data;
    })
  }
}

new Vue({
  el: '#app',
  router
})