<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import getImage from '../lib/getImage.js';
import { PhCalendarDots, PhStar, PhUsersThree, PhTimer } from '@phosphor-icons/vue';

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
    release_date,
    vote_average: vote,
    popularity: popularity,
    runtime,
    genres,
    // original_language: language,
} = movie.value || {};

const country = movie.value.production_countries?.[0].iso_3166_1
const movieDuration = Math.round(runtime / 60) + 'h ' + (runtime % 60) + 'm';
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
                <div>
                    <h1 class="text-4xl font-semi-bold mb-4">{{ title }}</h1>
                    <p class=" text-sm text-neutral-300 w-2/3">{{ overview }}</p>
                    <div class="flex flex-col text-sm gap-2 mt-3">
                        <div class="flex items-center gap-2">
                            <PhCalendarDots :size="15" weight="fill" />
                            <span>{{ release_date }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <PhStar :size="15" weight="fill"/>
                            <span>{{ Math.round(vote) }}/10</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <PhUsersThree :size="15" weight="fill" />
                            <span>{{ popularity }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <PhTimer :size="15" weight="fill" />
                            <span>{{ movieDuration }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img 
                            class="w-6 h-4 rounded-sm"
                            :src="`https://flagcdn.com/w40/${country?.toLowerCase()}.png`"
                            />
                            <span>{{ country }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>