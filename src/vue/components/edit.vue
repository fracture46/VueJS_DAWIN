<template>
    <p>
        <span class="display-3">Edit movie</span><br />
        <img :src="editedMovie.poster.file || 'no_poster.svg'" /><br/>
        <span id="poster">change poster : </span> <input type="file" id="poster" accept=".png, .jpg, .jpeg" v-on:change="getPoster($event)">
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="editedMovie.title">{{ editedMovie.title }}</v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="editedMovie.year">{{ editedMovie.year }}</v-text-field>
        <v-text-field label="Language" placeholder="Movie's language" outline v-model="editedMovie.language">{{ editedMovie.language }}</v-text-field>
        <v-text-field label="Genre" placeholder="Movie's genre" outline v-model="editedMovie.genre">{{ editedMovie.genre }}</v-text-field>
        <span class="display-1">Director's information</span><br/>
        <v-text-field label="Name" placeholder="Director's name" outline v-model="editedMovie.director.name">{{ editedMovie.director.name }}</v-text-field>
        <v-text-field label="Nationality" placeholder="Director's nationality" outline v-model="editedMovie.director.nationality">{{ editedMovie.director.nationality }}</v-text-field>
        <v-text-field label="Birthdate" placeholder="Director's birthdate" outline v-model="editedMovie.director.birthdate">{{ editedMovie.director.birthdate }}</v-text-field>
        <v-btn color="success" v-on:click="save"><v-icon dark>save</v-icon>Save</v-btn>
    </p>
</template>
<script>
export default {
    data() {
        return {
            editedMovie : window.shared_data.pickedMovie
        }
    },
    methods: {
        getPoster: function(e){
            this.editedMovie.poster.file = e.target.files[0].name;
        },
        save: function() {
            var id = window.shared_data.movies.indexOf(this.editedMovie);
            window.shared_data.updateMovie(id, this.editedMovie)
            window.shared_data.pickedMovie = {};
            this.$router.push({ path: `/` })
        }
    }
}
</script>

<style>
#poster {
    font-size:24px;
    margin-bottom: 15px;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    max-width: 350px;
    max-height: 450px;
}
</style>