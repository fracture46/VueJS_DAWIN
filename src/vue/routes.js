import app from './app.vue'
import edit from './components/edit.vue'
import add from './components/add.vue'
import MovieDetails from './components/movieDetails.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: app},
    { path: '/movie/:id', component: MovieDetails},
    { path: '/movie/:id/edit', component: edit}
];

export default new VueRouter({
    routes
});