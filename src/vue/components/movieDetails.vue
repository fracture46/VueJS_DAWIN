<template>
<div>
    <span style="font-size:28px;vertical-align:middle">Poster ici</span><br/>
    <span style="font-size:28px;vertical-align:middle">Titre : {{ movie.title }}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Année de sortie : {{movie.year}}</span><br/>
    <span style="font-size:28px;vertical-align:middle">Langue : A FAIRE</span><br/>
    <span style="font-size:28px;vertical-align:middle">Réalisateur : A FAIRE</span><br/>
    <span style="font-size:28px;vertical-align:middle">Note moyenne : A FAIRE</span><br/>

    <v-btn color="success" v-on:click="editMovie(movie)"><v-icon dark>edit</v-icon>Edit</v-btn>
    <v-btn color="error" v-on:click="deleteMovie(movie)"><v-icon dark>delete</v-icon>Delete</v-btn>
</div>
</template>
<script>
export default {
    props: ["movie"],
    data: function() {
        return {
            
        }
    },
    methods:{
        editMovie(movie){
            var id = window.shared_data.movies.indexOf(movie);
            this.$router.push({ path: `movie/${id}/edit` })
        },
        deleteMovie(movie){
            this.$emit('remove', movie);
        },
    }
}
</script>
<style scoped>
    /* Style spécifique à ce composant */
</style>