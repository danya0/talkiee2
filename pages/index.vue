<template>
  <div>
    <MoviePreview
      v-if="previewMoviePoster"
      :movie="previewMovie"
      :image="previewMoviePoster"
      @watch-online="goToMovieFromPoster"
    />
    <Container>
      <section class="flex flex-col items-center gap-y-5">
        <SearchBox class="w-1/2" v-model="searchText" @search="search" />
        <MovieGrid title="Популярные фильмы" :movie-list="movieList" />
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainStore } from '~/store/mainPageStore'
import { KinopoiskApi } from '~/library/kinopoiskApi'
import MoviePreview from '~/components/movie/moviePreview.vue'

const router = useRouter()
const store = useMainStore()
const kp = new KinopoiskApi()

onMounted(async () => {
  store.loadFilms('1')
})

const searchText = ref('')
const movieList = computed(() => store.finalMovieList)
const previewMovie = computed(() => movieList.value[5])
const previewMoviePoster = ref<string>()

watch(
  async () => {
    // будет дергаться на пагинации
    if (movieList.value.length) {
      const posters = await kp.getMovieImages(previewMovie.value.kinopoiskId)
      if (posters.length) {
        // логика по смене previewMovie
      }
      previewMoviePoster.value = posters[0].imageUrl
    }
  },
  () => movieList.value,
)

const search = () => {
  router.push({
    path: '/search',
    query: {
      s: searchText.value,
    },
  })
}

const goToMovieFromPoster = () => {
  router.push(`/watch/${previewMovie.value.kinopoiskId}`)
}
</script>
