<script setup>
import MovieCard from './MovieCard.vue'

const { items } = defineProps({
    items: Array
})

</script>

<template>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mx-4 sm:mx-10 my-8">
        <MovieCard 
        v-for="item in items" 
        :key="item.id" 
        :movie="item" />
    </div>
</template>