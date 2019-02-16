<template>
    <p>
        <span class="display-3">Edit movie</span><br />
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="editedMovie.title">{{ editedMovie.title }}</v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="editedMovie.year">{{ editedMovie.year }}</v-text-field>
        <v-textarea outline name="input-7-4" label="Synopsys" placeholder="Movie's synopsys" v-model="editedMovie.synopsys">{{ editedMovie.synopsys }}</v-textarea>
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
            this.$router.push({ path: `/` })
        }
    }
}
</script>