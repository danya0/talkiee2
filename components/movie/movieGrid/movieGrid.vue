<template>
  <div>
    <p v-if="title" class="text-xl mb-8">{{ title }}</p>
    <Loader class="mx-auto h-[1000px]" v-if="isLoaded" />
    <div v-else class="w-full gap-4 gap-x-a grid this-grid">
      <MovieCard
        v-for="item in props.movieList"
        :key="item.kinopoiskId"
        :item="item"
        @favoriteToggle="() => favoriteToggle(item)"
        @click="goToMoviePage(item.kinopoiskId)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '~/components/movie/movieCard/movieCard.vue'
import type { Movie } from '~/types/movie'
import { useMainStore } from '~/store/mainPageStore'
import Loader from '~/components/ui/loader.vue'

const store = useMainStore()
const router = useRouter()
const props = defineProps<{
  movieList: Movie[]
  title?: string
  isLoaded?: boolean
}>()

const favoriteToggle = (movie: Movie) => {
  store.favoriteToggle(movie)
}

const goToMoviePage = (movieId: number) => {
  router.push(`/watch/${movieId}`)
}
</script>

<style>
.this-grid {
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)) !important;
}
</style>
