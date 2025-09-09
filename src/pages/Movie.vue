<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import getImage from '../lib/getImage.js';

const router = useRouter()
const movieId = router.currentRoute.value.params.id
const movie = ref(null)

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js'
  }
};


movie.value = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options).then(res => res.json())

const {
    title,
    overview,
    backdrop_path: background,
    poster_path: poster,
    // release_date,
    // vote_average: vote,
    // original_language: language,
} = movie.value || {};
</script>

<template>
    <div class="h-screen w-screen grayscale-100"
    :style = "{
        backgroundImage: `url(`+getImage(background)+`)`,
    }">

        <div class="w-full h-full bg-gradient-to-r from-black to-transaprent">

            <div class="pt-20 w-full h-full grid grid-cols-2 items-center ">
                <img
                 class="w-[300px] mx-auto rounded-lg" 
                 :src="getImage(poster)"
                 />

            </div>

        </div>


    </div>
</template>