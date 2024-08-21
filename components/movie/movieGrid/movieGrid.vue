<template>
  <div class="relative">
    <p v-if="title" class="text-xl mb-8">{{ title }}</p>
    <div v-if="isLoaded" class="h-[1000px] pt-24">
      <Loader class="mx-auto" />
    </div>
    <div v-else class="w-full gap-4 gap-x-a grid this-grid">
      <MovieCard
        v-for="item in props.movieList"
        :key="item.kinopoiskId"
        :item="item"
        @favoriteToggle="favoriteToggle(item)"
        @click="goToMoviePage(item.kinopoiskId)"
      />
    </div>
    <div ref="observer" class="h-12 w-full" />
  </div>
</template>

<script setup lang="ts">
import MovieCard from '~/components/movie/movieCard/movieCard.vue'
import type { Movie } from '~/types/movie'
import Loader from '~/components/ui/loader.vue'
import { useFavoriteStore } from '~/store/favoriteStore'

const observer = ref<HTMLDivElement>()
const store = useFavoriteStore()
const router = useRouter()
const props = defineProps<{
  movieList: Movie[]
  title?: string
  isLoaded?: boolean
}>()
const emits = defineEmits(['pagination'])

const favoriteToggle = (movie: Movie) => {
  store.favoriteToggle(movie)
}

const goToMoviePage = (movieId: number) => {
  router.push(`/watch/${movieId}`)
}

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
          emits('pagination')
        }
      })
    },
    {
      threshold: 1,
    },
  )
  if (observer.value) {
    console.log('123')
    obs.observe(observer.value)
  }
})
</script>

<style>
.this-grid {
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)) !important;
}
</style>
