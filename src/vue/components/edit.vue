<template>
    <p>
        <span class="display-3">Edit movie</span><br />
        <v-text-field label="Title" placeholder="Movie's title" outline v-model="detail_movie.title">{{ detail_movie.title }}</v-text-field>
        <v-text-field label="Year" placeholder="Movie's release year" outline v-model="detail_movie.year">{{ detail_movie.year }}</v-text-field>
        <v-textarea outline name="input-7-4" label="Synopsys" placeholder="Movie's synopsys" v-model="detail_movie.synopsys">{{ detail_movie.synopsys }}</v-textarea>
        <v-btn color="success" v-on:click="save"><v-icon dark>save</v-icon>Save</v-btn>
    </p>
</template>
<script>
export default {
    data() {
        return {
            data : window.shared_data
        }
    },
    methods: {
        save: function() {
            this.$router.push({ path: `/` })
        }
    },
    computed: {
        detail_movie: function(){
            return this.data.getMovie(this.$route.params.id)
        }
    }
}
</script>