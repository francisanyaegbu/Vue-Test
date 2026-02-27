import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', () => {
  const favorites = ref<Array<{ id: number; media_type: string; [key: string]: any }>>([])
  const searchResults = ref<Array<any>>([])
  const searchQuery = ref('')
  const searchType = ref<'movie' | 'tv' | 'multi'>('movie')

  function toggleFavorite(item: { id: number; media_type: string }) {
    const index = favorites.value.findIndex(
      (f) => f.id === item.id && f.media_type === item.media_type,
    )
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(item)
    }
  }

  function isFavorite(item: { id: number; media_type: string }) {
    return favorites.value.some(
      (f) => f.id === item.id && f.media_type === item.media_type,
    )
  }

  return {
    favorites,
    searchResults,
    searchQuery,
    searchType,
    toggleFavorite,
    isFavorite,
  }
})
