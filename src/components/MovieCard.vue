<script setup>
import getImage from '../lib/getImage.js'
import { PhPlay } from '@phosphor-icons/vue'
import { PhStar } from '@phosphor-icons/vue'

const { movie } = defineProps({
    'movie': Object
})
const {
  title,
  overview,
  poster_path: poster,
  release_date,
  vote_average: vote,
  original_language: language,
} = movie

const description = overview.length <= 60 ? overview : overview.slice(0, 60) + '...'
</script>


<template>
    <div class="w-full h-full grid grid-rows-[4fr_1fr]">

        <div class="relative group w-full h-full">
            <img
            :src="getImage(poster)"
            class="w-full h-full transition rounded-md group-hover:blur-sm cursor-pointer"
            />
            <div class="group-hover:opacity-100 transition-opacity opacity-0 absolute left-[-50%] top-[50%] translate-x-[50%] flex flex-col gap-2 w-full font-semibold text-white">
                <div class="w-full flex flex-col items-center justify-center">
                    <button>
                        <PhPlay weight="fill" :size="32" width="60" class="hover:text-emerald-600" />
                    </button>
                </div>
            </div>
            <div class="absolute top-2 right-2 px-2 bg-emerald-600 py-1 rounded-md">
                <p class="flex items-center gap-1 justify-center">
                    <span>{{ Math.ceil(vote * 10) / 10 }}</span>
                    <PhStar color="#ffffff" weight="fill" />
                </p>
            </div>
            <div>
                <h1 class="text-xl font-semibold my-2">{{ title }}</h1>
                <p class="text-neutral-400 text-sm">{{ description }}</p>
            </div>
        </div>
 
    </div>
</template>
