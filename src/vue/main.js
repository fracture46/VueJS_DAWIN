import Vue from 'vue' //librairie "vue" dans node_modules
import MovieItemComponent from './components/movieitem.vue'
import Vuetify from 'vuetify'
import router from './routes.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.component('movie-item', MovieItemComponent);

const axios = require('axios');

window.shared_data = {
  editedMovie: {},
  getAllMovies : axios.get('/api/movies/all')
    .then(function (response) {
      window.shared_data.movies.push(...response.data); 
      console.log(response);
      console.log(window.shared_data.movies);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }),
  movies: [],
  getMovie : function(id)
  {
    axios.get('/api/movies/'+id)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
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