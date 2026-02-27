<script setup>
import { ref } from 'vue'
import { PhFilmReel, PhMagnifyingGlass } from '@phosphor-icons/vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

function submitSearch() {
  if (!searchQuery.value.trim()) return
  router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
}
</script>

<template>
    <nav 
        class="flex flex-col md:flex-row text-white items-center gap-4 md:gap-20 absolute left-0 right-0 mx-4 md:mx-6 py-4 top-4 bg-transparent border-b-2 border-neutal-400">

        <RouterLink to="/" class="flex text-3xl items-center gap-2 font-bold">
            <PhFilmReel :size="35" />
            <span>Movly</span>
        </RouterLink>

        <div class="flex flex-col md:flex-row justify-between items-center w-full">
            <ul class="flex items-center gap-4 font-semibold">
                <li><RouterLink to="/">Movies</RouterLink></li>
                <li><RouterLink to="/series">Series</RouterLink></li>
                <li><RouterLink to="/favorites">Favorites</RouterLink></li>
            </ul>
            <div class="flex items-center gap-2 border-2 border-neutral-400 rounded-md px-4 py-1">
                <input
                  v-model="searchQuery"
                  @keyup.enter="submitSearch"
                  type="search"
                  name="search-movie"
                  id="search-movie"
                  placeholder="Search for a title..."
                  class="bg-transparent border-2 border-none focus:outline-none focus:border-none"
                />
                <PhMagnifyingGlass
                  :size="22"
                  class="text-neutral-500 cursor-pointer"
                  @click="submitSearch"
                />
            </div>
        </div>
        
    </nav>
</template>