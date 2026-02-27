<script setup>
import MovieCard from './MovieCard.vue'

const { items } = defineProps({
    items: Array
})

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-10 my-8">
        <MovieCard 
        v-for="item in items" 
        :key="item.id" 
        :movie="item" />
    </div>
</template>