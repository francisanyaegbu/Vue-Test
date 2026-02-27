<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MovieList from '../components/MovieList.vue'
import { useMediaStore } from '../stores/media'

const route = useRoute()
const query = computed(() => route.query.q || '')
const results = ref([])
const mediaStore = useMediaStore()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js',
  },
}

async function fetchResults() {
  if (!query.value) {
    results.value = []
    return
  }
  const json = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query.value,
    )}&language=en-US&page=1&include_adult=false`,
    options,
  ).then((r) => r.json())
  results.value = json.results || []
  mediaStore.searchResults = results.value
  mediaStore.searchQuery = query.value
}

watch(query, fetchResults, { immediate: true })

</script>

<template>
  <div class="pt-24">
    <h2 class="text-2xl font-semibold text-white mb-4">
      Results for "{{ query }}"
    </h2>
    <MovieList :items="results" />
    <p v-if="results.length === 0" class="text-neutral-400">
      No results found.
    </p>
  </div>
</template>
