<script setup>
import getImage from '../lib/getImage.js'
import getTrailer from '../lib/getTrailer.js'
import { PhPlay } from '@phosphor-icons/vue'
import { PhStar } from '@phosphor-icons/vue'
import { RouterLink } from 'vue-router'
import { useMediaStore } from '../stores/media'

const { movie } = defineProps({
    'movie': Object
})

// determine type (movie or tv) for search results or general data
const mediaType = movie.media_type || 'movie'
const title = movie.title || movie.name || ''
const overview = movie.overview || ''
const poster = movie.poster_path || movie.backdrop_path || ''
const release_date = movie.release_date || movie.first_air_date || ''
const vote = movie.vote_average || 0
const language = movie.original_language || ''

const description = overview.length <= 60 ? overview : overview.slice(0, 60) + '...'

const mediaStore = useMediaStore()

function openTrailer() {
  getTrailer(mediaType, movie.id).then((url) => {
    if (url) window.open(url, '_blank')
    else alert('Trailer not found')
  })
}

function toggleFav(e) {
  e.preventDefault()
  e.stopPropagation()
  mediaStore.toggleFavorite({ id: movie.id, media_type: mediaType })
}

function isFav() {
  return mediaStore.isFavorite({ id: movie.id, media_type: mediaType })
}
</script>


<template>
    <RouterLink :to="mediaType === 'tv' ? `/tv/${movie.id}` : `/movie/${movie.id}`">
        <div class="w-full h-full grid grid-rows-[4fr_1fr]">

            <div class="relative group w-full h-full">
                <img
                :src="getImage(poster)"
                class="w-full h-full transition rounded-md group-hover:blur-sm cursor-pointer"
                />
                <div class="group-hover:opacity-100 transition-opacity opacity-0 absolute left-[-50%] top-[50%] translate-x-[50%] flex flex-col gap-2 w-full font-semibold text-white">
                    <div class="w-full flex flex-col items-center justify-center">
                        <button @click.stop.prevent="openTrailer">
                            <PhPlay weight="fill" :size="32" width="60" class="hover:text-emerald-600" />
                        </button>
                    </div>
                </div>
                <div class="absolute top-2 right-2 flex flex-col gap-1">
                    <button @click.stop.prevent="toggleFav" class="p-1">
                        <PhStar
                          :size="20"
                          :weight="isFav() ? 'fill' : 'regular'"
                          color="#ffffff"
                        />
                    </button>
                    <div class="px-2 bg-emerald-600 py-1 rounded-md">
                        <p class="flex items-center gap-1 justify-center">
                            <span>{{ Math.ceil(vote * 10) / 10 }}</span>
                            <PhStar color="#ffffff" weight="fill" />
                        </p>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl font-semibold my-2">{{ title }}</h1>
                    <p class="text-neutral-400 text-sm">{{ description }}</p>
                </div>
            </div>
    
        </div>
    </RouterLink>
</template>
