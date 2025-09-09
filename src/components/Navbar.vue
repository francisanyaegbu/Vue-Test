<script setup>
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
                <PhMagnifyingGlass :size="22" class="text-neutral-500 cursor-pointer" />
            </div>
        </div>
        
    </nav>
</template>