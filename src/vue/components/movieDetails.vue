<template>
<div>
    <span style="font-size:28px;vertical-align:middle">Poster ici</span><br/>
    <span style="font-size:28px;vertical-align:middle">Titre : {{ movie.title }}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Année de sortie : {{movie.year}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Langue : {{movie.language}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Genre : {{movie.genre}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Réalisateur : {{movie.director.name}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Note moyenne : A FAIRE</span><br/>

    <v-btn color="success" v-on:click="editMovie(movie)"><v-icon dark>edit</v-icon>Edit</v-btn>
    <v-btn color="error" v-on:click="deleteMovie(movie)"><v-icon dark>delete</v-icon>Delete</v-btn>
</div>
</template>
<script>
export default {
    data: function() {
        return {
            shared_data : window.shared_data,
            movie: window.shared_data.pickedMovie
        }
    },
    methods:{
        editMovie(movie){
            var id = this.shared_data.movies.indexOf(movie);
            this.shared_data.pickedMovie = movie;
            this.$router.push({ path: `${id}/edit` });
        },
        deleteMovie(movie){

        },
    }
}
</script>
<style scoped>
    /* Style spécifique à ce composant */
</style>