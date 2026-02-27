<script setup>
import { computed } from 'vue'
import { useMediaStore } from '../stores/media'
import MovieList from '../components/MovieList.vue'

const mediaStore = useMediaStore()
const favItems = computed(() => mediaStore.favorites)
</script>

<template>
  <div class="pt-24">
    <h2 class="text-2xl font-semibold text-white mb-4">Your favorites</h2>
    <MovieList :items="favItems" />
    <p v-if="favItems.length === 0" class="text-neutral-400">
      No favorites added yet.
    </p>
  </div>
</template>
