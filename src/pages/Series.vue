<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import getImage from '../lib/getImage.js';
import getTrailer from '../lib/getTrailer.js'
import { PhCalendarDots, PhStar, PhUsersThree, PhTimer } from '@phosphor-icons/vue';

const router = useRouter()
const id = router.currentRoute.value.params.id
const series = ref(null)

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js'
  }
};

series.value = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options).then(res => res.json())

const {
    name,
    overview,
    backdrop_path: background,
    poster_path: poster,
    first_air_date,
    vote_average: vote,
    popularity,
    episode_run_time,
    genres,
} = series.value || {};

const country = series.value.production_countries?.[0].iso_3166_1
const runtime = episode_run_time?.[0] || 0
const seriesDuration = runtime ? Math.round(runtime/60)+'h '+(runtime%60)+'m' : ''

function playTrailer() {
  getTrailer('tv', id).then((url) => {
    if (url) window.open(url, '_blank')
    else alert('Trailer not found')
  })
}
</script>

<template>
    <div class="h-screen w-screen grayscale-100"
    :style = "{
        backgroundImage: `url(`+getImage(background)+`)`,
    }">

        <div class="w-full h-full bg-gradient-to-r from-black to-transaprent">

            <div class="pt-20 w-full h-full grid grid-cols-1 md:grid-cols-2 items-center ">
                <img
                 class="w-[300px] mx-auto rounded-lg" 
                 :src="getImage(poster)"
                 />
                <div>
                    <h1 class="text-4xl font-semi-bold mb-4">{{ name }}</h1>
                    <p class=" text-sm text-neutral-300 w-2/3">{{ overview }}</p>
                    <div class="flex flex-col text-sm gap-2 mt-3">
                        <div class="flex items-center gap-2">
                            <PhCalendarDots :size="15" weight="fill" />
                            <span>{{ first_air_date }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <PhStar :size="15" weight="fill"/>
                            <span>{{ Math.round(vote) }}/10</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <PhUsersThree :size="15" weight="fill" />
                            <span>{{ popularity }}</span>
                        </div>
                        <div v-if="seriesDuration" class="flex items-center gap-2">
                            <PhTimer :size="15" weight="fill" />
                            <span>{{ seriesDuration }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img 
                            class="w-6 h-4 rounded-sm"
                            :src="`https://flagcdn.com/w40/${country?.toLowerCase()}.png`"
                            />
                            <span>{{ country }}</span>
                        </div>
                        <button @click="playTrailer" class="mt-4 px-4 py-2 bg-emerald-600 rounded-md text-white">
                          Watch trailer
                        </button>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
