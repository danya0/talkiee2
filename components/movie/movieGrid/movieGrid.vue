<template>
  <div>
    <p v-if="title" class="text-xl mb-8">{{ title }}</p>
    <div class="w-full gap-4 gap-x-a grid this-grid">
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

const store = useMainStore()
const router = useRouter()
const props = defineProps<{ movieList: Movie[]; title?: string }>()

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
