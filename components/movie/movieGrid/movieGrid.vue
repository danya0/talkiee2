<template>
  <div class="relative">
    <p v-if="title" class="text-xl mb-8">{{ title }}</p>
    <div class="w-full gap-4 gap-x-a grid this-grid mb-10">
      <MovieCard
        v-for="item in props.movieList"
        :key="item.kinopoiskId"
        :item="item"
        @favoriteToggle="favoriteToggle(item)"
        @rate="(rating) => rate(item, rating)"
        @click="goToMoviePage(item.kinopoiskId)"
      />
    </div>
    <div v-if="isLoaded" class="absolute bottom-0 left-1/2 -translate-x-1/2">
      <Loader class="mx-auto" />
    </div>
    <div ref="observer" class="h-12 w-full" />
  </div>
</template>

<script setup lang="ts">
import MovieCard from '~/components/movie/movieCard/movieCard.vue'
import type { Movie } from '~/types/movie'
import Loader from '~/components/ui/loader.vue'
import { useFavoriteStore } from '~/store/favoriteStore'
import { useRatedStore } from '~/store/ratedStore'

const observer = ref<HTMLDivElement>()
const store = useFavoriteStore()
const rateStore = useRatedStore()
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

const rate = (item: Movie, rating: number) => {
  rateStore.rate(item, rating)
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
          if (props.isLoaded) return false
          emits('pagination')
        }
      })
    },
    {
      threshold: 1,
    },
  )
  if (observer.value) {
    obs.observe(observer.value)
  }
})
</script>

<style>
.this-grid {
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)) !important;
}
</style>
