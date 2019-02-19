<template>
<div>
    <span id="msg" class="display-1">{{message}}</span>

    <p class="display-2">Movie number : {{movies.length}}</p>
    <v-btn color="success" v-on:click="add"><v-icon dark>add</v-icon>New movie</v-btn>
    <movie-add v-if="newMovieForm"></movie-add>

    <v-text-field label="Search a movie" placeholder="Movie's title you're searching" outline v-model="search"></v-text-field>

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:remove="remove(index)"></movie-item>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: "Movie manager",
            message: "Welcome",
            search: "",
            movies : window.shared_data.movies,
            newMovieForm : false
        }
    },

    methods: {
        add: function(){
            this.newMovieForm = true;
        },
        remove: function(index) {
            this.movies = window.shared_data.getAllMovies;
        }
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>