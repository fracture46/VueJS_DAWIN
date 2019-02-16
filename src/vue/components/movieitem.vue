<template>
<div>
    <span style="font-size:28px;vertical-align:middle">{{ movie.title }} sorti en {{movie.year}}</span>
    <v-btn color="success" v-on:click="editMovie(movie)"><v-icon dark>edit</v-icon>More details</v-btn>
    <!--<v-btn color="error" v-on:click="deleteMovie(movie)"><v-icon dark>delete</v-icon>Delete</v-btn> -->
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