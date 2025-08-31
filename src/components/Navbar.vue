<script setup>
import { PhFilmSlate } from '@phosphor-icons/vue'
</script>

<template>
    <nav 
    class="flex text-white items-center gap-20 absolute left-0 right-0 mx-6 py-4 top-4 bg-transparent border-b-2 border-neutal-400">

    <div>
        <PhFilmSlate :size="32" />
    </div>

    <div>
        <ul class="flex items-center gap-4 font-semibold">
            <li>Movies</li>
            <li>Favorite Movies</li>
            <li>Recently Watched</li>
        </ul>
    </div>
        
</nav>
</template>