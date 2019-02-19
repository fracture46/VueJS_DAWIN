<template>
<div>
    <span style="font-size:28px;vertical-align:middle">Poster ici</span><br/>
    <span style="font-size:28px;vertical-align:middle">Titre : {{ movie.title }}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Année de sortie : {{movie.year}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Langue : {{movie.language}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Genre : {{movie.genre}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Réalisateur : {{movie.director.name}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Note moyenne : {{movieRate}} / 5</span><br/>
    <v-text-field label="NewRate" placeholder="Add a new rate to the movie" outline v-model="newRate"></v-text-field>

    <v-btn color="success" v-on:click="addRate(movie)"><v-icon dark>save</v-icon>Add rate</v-btn>
    <v-btn color="success" v-on:click="editMovie(movie)"><v-icon dark>edit</v-icon>Edit</v-btn>
    <v-btn color="error" v-on:click="deleteMovie(movie)"><v-icon dark>delete</v-icon>Delete</v-btn><br/>
    {{message}}
</div>
</template>
<script>
export default {
    data: function() {
        return {
            shared_data : window.shared_data,
            movie: window.shared_data.pickedMovie,
            newRate : null,
            message: ""
        }
    },
    methods:{
        editMovie(movie){
            var id = this.shared_data.movies.indexOf(movie);
            this.shared_data.pickedMovie = movie;
            this.$router.push({ path: `${id}/edit` });
        },
        deleteMovie(movie){
            var id = this.shared_data.movies.indexOf(movie);
            shared_data.deleteMovie(id);
            this.shared_data.movies.splice(id, 1);
            this.$router.push({ path: `/` });
        },
        addRate: function(movie){
            if(this.message != "") this.message = "";
            var id = window.shared_data.movies.indexOf(movie);
            window.shared_data.addRate(id, {'rate' : this.newRate});
            window.shared_data.movies[id].rate.push(parseInt(this.newRate));
            this.movie.rate.push(parseInt(this.newRate));
            this.message = "Rate added !";
        }
    },
    computed: {
        movieRate() {
            return Math.round(this.movie.rate.reduce((a, b) => a + b, 0) / this.movie.rate.length * 10) / 10;
        }
    }
}
</script>
<style scoped>
    /* Style spécifique à ce composant */
</style>