<script setup>

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js'
  }
};

const search = async () => {
  search.value = await fetch(
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options
  )
    .then(res => res.json())
}

console.log(search);

import { PhFilmReel } from '@phosphor-icons/vue'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
</script>

<template>
    <nav 
        class="flex text-white items-center gap-20 absolute left-0 right-0 mx-6 py-4 top-4 bg-transparent border-b-2 border-neutal-400">

        <div class="flex text-3xl items-center gap-2 font-bold">
            <PhFilmReel :size="35" />
            <span>Movly</span>
        </div>

        <div class="flex justify-between items-center w-full">
            <ul class="flex items-center gap-4 font-semibold">
                <li>Movies</li>
                <li>Favorite Movies</li>
            </ul>
            <div class="flex items-center gap-2 border-2 border-neutral-400 rounded-md px-4 py-1">
                <input type="search" name="search-movie" id="search-movie" placeholder="Search for a movie..."
                class="bg-transparent border-2 border-none focus:outline-none focus:border-none"/>
                <PhMagnifyingGlass :size="22" class="text-neutral-500 cursor-pointer"
                @click="search" />
            </div>
        </div>
        
    </nav>
</template>