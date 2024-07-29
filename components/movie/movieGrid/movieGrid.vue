<template>
  <div>
    <p v-if="title" class="text-xl mb-8">{{ title }}</p>
    <div class="w-full grid grid-cols-6 gap-y-4 gap-x-8">
      <MovieCard
        v-for="item in props.movieList"
        :key="item.kinopoiskId"
        :item="item"
        @favoriteToggle="() => favoriteToggle(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '~/components/movie/movieCard/movieCard.vue'
import type { Movie } from '~/types/movie'
import { useMainPageStore } from '~/store/mainPageStore'

const store = useMainPageStore()

const props = defineProps<{ movieList: Movie[]; title?: string }>()

const favoriteToggle = (movie: Movie) => {
  store.favoriteToggle(movie)
}
</script>
