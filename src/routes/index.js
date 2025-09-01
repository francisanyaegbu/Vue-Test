import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: "/", component: Home},
    {path: "/movie/:id", component: Movie}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})