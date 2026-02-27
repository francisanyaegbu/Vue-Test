<script setup>
import { ref, onBeforeMount } from 'vue'
import MovieList from '../components/MovieList.vue'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js',
  },
}

const series = ref([])

const getSeries = async () => {
  series.value = await fetch(
    'https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&sort_by=popularity.desc',
    options,
  )
    .then((res) => res.json())
    .then((res) => res.results)
}

onBeforeMount(async () => {
  await getSeries()
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-white pt-24 pl-10">Popular series</h1>
    <MovieList :items="series" />
  </div>
</template>
