<template>
<div>
    <span style="font-size:28px;vertical-align:middle">{{ movie.title }} sorti en {{movie.year}}</span>
    <v-btn color="success" v-on:click="movieDetails(movie)"><v-icon dark>edit</v-icon>More details</v-btn>
</div>
</template>
<script>
export default {
    props: ["movie"],
    data() {
        return {
            shared_data : window.shared_data
        }
    },
    methods:{
        movieDetails(movie){
            var id = shared_data.movies.indexOf(movie);
            shared_data.pickedMovie = movie;
            this.$router.push({ path: `movie/${id}` })
        }
    }
}
</script>
<style scoped>
    /* Style spécifique à ce composant */
</style>