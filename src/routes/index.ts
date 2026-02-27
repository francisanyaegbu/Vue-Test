import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import Search from '../pages/Search.vue'
import Favorites from '../pages/Favorites.vue'
import SeriesList from '../pages/SeriesList.vue'
import Series from '../pages/Series.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: "/", component: Home },
    { path: "/movie/:id", component: Movie },
    { path: "/tv/:id", component: Series },
    { path: "/search", component: Search },
    { path: "/favorites", component: Favorites },
    { path: "/series", component: SeriesList },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})