<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from 'vue'
import MovieList from '../components/MovieList.vue'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js',
  },
}

const movies = ref([])
const bannerMovie = ref(null)

const AsyncBanner = defineAsyncComponent(() => {
  return import('../components/Banner.vue')
})

const getMovies = async () => {
  movies.value = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    options,
  )
    .then((res) => res.json())
    .then((res) => res.results)
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

onBeforeMount(async () => {
  await getMovies()
  bannerMovie.value = movies.value[getRandomInt(0, movies.value.length - 1)]
})
</script>




<template> 
  <AsyncBanner 
  :banner="bannerMovie" />
  <MovieList 
  :movies="movies" 
  />
</template>