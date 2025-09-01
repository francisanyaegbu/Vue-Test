<script setup>
import MovieCard from './MovieCard.vue'

const { movies } = defineProps({
    'movies': Array
})

</script>

<template>
    <div class="grid grid-cols-3 gap-4 mx-10 my-8">
        <MovieCard 
        v-for="movie in movies" 
        :key="Math.random() * movie.id" 
        :movie="movie" />
    </div>
</template>