<template>
    <p>
        <span class="display-3">New movie</span><br />
        <span id="poster">Choose a poster : </span> <input type="file" id="poster" accept=".png, .jpg, .jpeg" v-on:change="getPoster($event)">
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="movie_to_add.title"></v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="movie_to_add.year"></v-text-field>
        <v-text-field label="Language" placeholder="Movie's language" outline v-model="movie_to_add.language"></v-text-field>
        <v-text-field label="Genre" placeholder="Movie's genre" outline v-model="movie_to_add.genre"></v-text-field>
        <span class="display-1">Director's information</span><br/>
        <v-text-field label="Name" placeholder="Director's name" outline v-model="movie_to_add.director.name"></v-text-field>
        <v-text-field label="Nationality" placeholder="Director's nationality" outline v-model="movie_to_add.director.nationality"></v-text-field>
        <v-text-field label="Birthdate" placeholder="Director's birthdate" outline v-model="movie_to_add.director.birthdate"></v-text-field>
        <v-btn color="success" v-on:click="newMovie"><v-icon dark>add</v-icon>Add</v-btn>
    </p>
</template>
<script>
export default {
    data() {
        return {
            shared_data : window.shared_data,
            movie_to_add: {
                title: "",
                year: null,
                language: "",
                genre: "",
                director: {
                    name: "",
                    nationality: "",
                    birthdate: ""
                },
                rate: [],
                poster: {
                    file: null
                }
            }
        }
    },
    methods: {
        getPoster: function(e){
            this.movie_to_add.poster.file = e.target.files[0].name;
        },
        newMovie: function() {
            shared_data.addMovie(this.movie_to_add);
            shared_data.movies.push(this.movie_to_add);
            var id = shared_data.movies.length+1;
            shared_data.pickedMovie = this.movie_to_add;
            this.$router.push({ path: `/movie/${id}` });
        }
    }
}
</script>

<style>
#poster {
    font-size:24px;
    margin-bottom: 15px;
}
</style>