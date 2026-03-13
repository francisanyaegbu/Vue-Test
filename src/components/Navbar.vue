<script setup>
import { ref } from 'vue'
import { PhFilmReel, PhMagnifyingGlass, PhList, PhX } from '@phosphor-icons/vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const isMenuOpen = ref(false)

function submitSearch() {
  if (!searchQuery.value.trim()) return
  router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
  closeMenu()
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
    <nav 
        class="fixed flex justify-between md:flex-row text-white items-center gap-4 md:gap-20 left-0 right-0 mx-4 md:mx-6 py-4 top-0 bg-transparent">

        <!-- Mobile left: menu button -->
        <div class="md:hidden">
            <transition name="icon-fade">
                <PhList
                  v-if="!isMenuOpen"
                  :size="24"
                  class="text-white cursor-pointer"
                  @click="toggleMenu"
                />
                <PhX
                  v-else
                  :size="24"
                  class="text-white cursor-pointer"
                  @click="toggleMenu"
                />
            </transition>
        </div>

        <!-- Desktop left: Movly -->
        <RouterLink to="/" class="hidden md:flex text-3xl items-center gap-2 font-bold">
            <PhFilmReel :size="35" />
            <span>Movly</span>
        </RouterLink>

        <!-- Desktop center: menu and search -->
        <div class="hidden md:flex flex-row justify-between items-center w-full">
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

        <!-- Mobile right: Movly -->
        <RouterLink to="/" class="md:hidden flex text-3xl items-center gap-2 font-bold">
            <PhFilmReel :size="35" />
            <span>Movly</span>
        </RouterLink>

        <!-- Mobile menu overlay -->
        <transition name="slide-left">
            <div v-show="isMenuOpen" class="fixed top-16 left-0 w-fit bg-black bg-opacity-90 p-4 md:hidden z-50">
                <div class="flex items-center w-fit gap-2 border-2 border-neutral-400 rounded-md px-4 py-1 mb-4">
                    <input
                      v-model="searchQuery"
                      @keyup.enter="submitSearch"
                      type="search"
                      name="search-movie"
                      id="search-movie-mobile"
                      placeholder="Search for a title..."
                      class="bg-transparent border-2 border-none focus:outline-none focus:border-none"
                    />
                    <PhMagnifyingGlass
                      :size="22"
                      class="text-neutral-500 cursor-pointer"
                      @click="submitSearch"
                    />
                </div>
                <ul class="flex flex-col gap-4 font-semibold">
                    <li><RouterLink to="/" @click="closeMenu">Movies</RouterLink></li>
                    <li><RouterLink to="/series" @click="closeMenu">Series</RouterLink></li>
                    <li><RouterLink to="/favorites" @click="closeMenu">Favorites</RouterLink></li>
                </ul>
            </div>
        </transition>
        
    </nav>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
}
</style>