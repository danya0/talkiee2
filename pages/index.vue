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
        <MovieSelector v-model="selectorType" />
        <MovieGrid :title="selectorTypeText" :movie-list="movieList" />
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainStore } from '~/store/mainPageStore'
import { KinopoiskApi } from '~/library/kinopoiskApi'
import MoviePreview from '~/components/movie/moviePreview.vue'
import MovieSelector from '~/components/movie/movieSelector/movieSelector.vue'
import { MovieCollections } from '~/types/movie'

const router = useRouter()
const store = useMainStore()
const kp = new KinopoiskApi()

const searchText = ref('')
const movieList = computed(() => store.finalMovieList)
const previewMovie = computed(() => movieList.value[5])
const previewMoviePoster = ref<string>()

const selectorType = ref<'all' | 'movie' | 'series'>('all')
const selectorTypeText = computed(() => {
  if (selectorType.value === 'movie') {
    return 'Популярные фильмы'
  } else if (selectorType.value === 'series') {
    return 'Популярные сериалы'
  } else {
    return 'Популярные фильмы и сериалы'
  }
})

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

watch(
  () => {
    switch (selectorType.value) {
      case 'all':
        store.loadFilms('1', MovieCollections.TOP_POPULAR_ALL)
        break
      case 'movie':
        store.loadFilms('1', MovieCollections.TOP_POPULAR_MOVIES)
        break
      case 'series':
        store.loadFilms('1', MovieCollections.POPULAR_SERIES)
        break
      default:
        break
    }
  },
  () => selectorType.value,
)

const search = () => {
  router.push({
    path: '/search',
    query: {
      s: searchText.value,
    },
  })
}

// todo: сделать это роутер линкой внутри компонента
const goToMovieFromPoster = () => {
  router.push(`/watch/${previewMovie.value.kinopoiskId}`)
}
</script>
