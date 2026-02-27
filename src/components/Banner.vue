<script setup>
import getImage from '../lib/getImage.js'
import { PhPlay } from '@phosphor-icons/vue'
import { RouterLink } from 'vue-router'

const { banner } = defineProps(['banner'])

// if banner isn't ready, provide defaults to avoid JS errors
const {
  title = '',
  overview = '',
  backdrop_path: background = '',
  release_date = '',
  vote_average: vote = 0,
  original_language: language = '',
} = banner || {}

const description = overview.length <= 200 ? overview : overview.slice(0, 200) + '...'
</script>

<template>
  <div
    class="w-screen h-screen"
    :style="{
      backgroundImage: `url(${getImage(background)})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <div
      class="text-white p-10 flex flex-col justify-center w-full h-full bg-gradient-to-r from-black to-transparent"
    >
      <h1 class="text-4xl sm:text-6xl lg:text-8xl font-bold">{{ title }}</h1>
      <p class="mt-2 w-full sm:w-3/4 lg:w-1/2 text-sm sm:text-base text-neutral-400">{{ description }}</p>

      <RouterLink
        :to="`/movie/${banner.id}`"
        class="flex items-center gap-1 px-6 py-4 rounded-md bg-green-700 w-fit mt-4 transition hover:bg-neutral-800"
      >
        <span> View more</span>
        <span><PhPlay /></span>
      </RouterLink>
    </div>
  </div>
</template>
