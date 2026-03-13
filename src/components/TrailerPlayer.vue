<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click="close">
    <div class="relative w-full max-w-4xl mx-4" @click.stop>
      <iframe
        :src="embedUrl"
        class="w-full h-96 md:h-[500px]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button @click="close" class="absolute top-2 right-2 text-white text-2xl hover:text-red-500 transition">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoKey: String,
  show: Boolean
})

const emit = defineEmits(['close'])

const embedUrl = computed(() => `https://www.youtube.com/embed/${props.videoKey}?autoplay=1`)

function close() {
  emit('close')
}
</script>