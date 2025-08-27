<script setup>
import { ref, onMounted } from 'vue'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js'
  }
};

const movies = ref(null);

const getMovies = async () => {
  movies.value = await fetch('https://api.themoviedb.org/3/authentication', options)
    .then(res => res.json())
    .then(res => res.results)
}

onMounted(async() => {
  await getMovies();
  console.log(movies.value);
})

</script>

<template>
  <h1 class="bg-blue-500 text-2xl text-white">Hello Syca</h1>
</template>