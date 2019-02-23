<template>
<div>
    <img :src="movie.poster.file || 'no_poster.svg'" />
    <span id="title" class="display-1">{{ movie.title }}</span><br/>
    <span>A {{movie.language}} {{movie.genre}} movie</span><br/>
    <span>Released in {{movie.year}}, directed by {{movie.director.name}} ({{movie.director.nationality}} director born in {{movie.director.birthdate}})</span><br/>
    <span>Note moyenne : {{movieRate}} / 5</span><br/>
    <v-btn id="details_btn" color="success" v-on:click="movieDetails(movie)"><v-icon dark>edit</v-icon>More details</v-btn>
</div>
</template>
<script>
export default {
    props: ["movie"],
    data() {
        return {
            shared_data : window.shared_data,
            newRate : null
        }
    },
    methods:{
        movieDetails(movie){
            var id = shared_data.movies.indexOf(movie);
            shared_data.pickedMovie = movie;
            this.$router.push({ path: `movie/${id}` })
        }
    },
    computed: {
        movieRate() {
            if(this.movie.rate.length == 0) {
                this.message = "No rate found";
                return "no rate"
            } else {
                return Math.round(this.movie.rate.reduce((a, b) => a + b, 0) / this.movie.rate.length * 10) / 10;
            }
        }
    }
}
</script>
<style scoped>
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    max-width: 350px;
    max-height: 450px;
}
span {
    font-size:28px;
    vertical-align:middle;
}
#title{
    font-weight: bold;
}
#details_btn{
    margin-bottom: 20px;
}
</style>