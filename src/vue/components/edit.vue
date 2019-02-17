<template>
    <p>
        <span class="display-3">Edit movie</span><br />
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="editedMovie.title">{{ editedMovie.title }}</v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="editedMovie.year">{{ editedMovie.year }}</v-text-field>
        <v-text-field label="Language" placeholder="Movie's language" outline v-model="editedMovie.language">{{ editedMovie.language }}</v-text-field>
        <v-text-field label="Genre" placeholder="Movie's genre" outline v-model="editedMovie.genre">{{ editedMovie.genre }}</v-text-field>
        <span>Director informations</span><br/>
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
        save: function() {
            var id = window.shared_data.movies.indexOf(this.editedMovie);
            window.shared_data.updateMovie(id, this.editedMovie)
            window.shared_data.pickedMovie = {};
            this.$router.push({ path: `/` })
        }
    }
}
</script>