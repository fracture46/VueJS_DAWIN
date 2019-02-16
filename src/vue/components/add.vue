<template>
    <p>
        <span class="display-3">New movie</span><br />
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="movie_to_add.title"></v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="movie_to_add.year"></v-text-field>
        <v-textarea outline name="input-7-4" label="Synopsys" placeholder="Movie's synopsys" v-model="movie_to_add.synopsys"></v-textarea>
        <v-btn color="success" v-on:click="newmovie"><v-icon dark>add</v-icon>Add</v-btn>
    </p>
</template>
<script>
export default {
    data() {
        return {
            movie_to_add: {}
        }
    },

    methods: {
        newmovie: function() {
            window.shared_data.movies.push(this.movie_to_add)
            this.movie_to_add = {}
            this.$router.push({ path: `/` })
        }
    }
}
</script>