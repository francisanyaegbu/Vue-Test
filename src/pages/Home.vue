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
  try {
    const data = await fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options,
    ).then((res) => res.json())
    movies.value = data.results || []
    console.log('fetched movies', movies.value)
  } catch (err) {
    console.error('error fetching movies', err)
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

onBeforeMount(async () => {
  await getMovies()
  if (movies.value.length > 0) {
    bannerMovie.value = movies.value[getRandomInt(0, movies.value.length - 1)]
    console.log('selected banner', bannerMovie.value)
  } else {
    console.warn('no movies available for banner')
  }
})
</script>




<template> 
  <!-- only show banner when data available to prevent runtime error -->
  <AsyncBanner 
    v-if="bannerMovie" 
    :banner="bannerMovie" />

  <MovieList 
    :items="movies" 
  />
</template>