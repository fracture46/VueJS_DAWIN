import Vue from 'vue' //librairie "vue" dans node_modules
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
      // handle error
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
    console.log("bwah");
    console.log(movie);
    axios.post('/api/movies/add', movie)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (response){
      window.shared_data.getAllMovies;
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


/*package.json
webpack.config.js
node_modules/
src/
    |_ static/ # les images et fichiers CSS
    |_ node/
        |_ app.js # point d'entrée de l'application Node ???? 
    |_ vue/
        |_ main.js # point d'entrée de l'application Vue.js ???? => le reste - ce qui va dans routes.js
        |_ app.vue
        |_ routes.js # config de vue-router ???? => routes + new router
        |_ components/
            |_ movie-item.vue
            |_ ...
    |_ dist/ # Sortie de la compilation avec Webpack*/