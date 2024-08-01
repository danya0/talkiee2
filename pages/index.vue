<template>
  <div>
    <MoviePreview
      v-if="previewMovie && previewMoviePoster"
      :movie="previewMovie"
      :image="previewMoviePoster"
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
import { type Movie, MovieCollections } from '~/types/movie'
import { usePreviewStore } from '~/store/previewStore'

const router = useRouter()
const store = useMainStore()
const previewStore = usePreviewStore()
const kp = new KinopoiskApi()

const searchText = ref('')
const movieList = computed(() => store.finalMovieList)

const previewMovie = computed(() => previewStore.previewMovie)
const previewMoviePoster = computed(() => previewStore.previewMoviePoster)

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

const updatePreviewMovie = async () => {
  const randomMovie = movieList.value[Randomizer.random(1, 20)]

  if (!randomMovie) return
  const posters = await kp.getMovieImages(randomMovie.kinopoiskId)
  if (posters.length < 1) {
    await updatePreviewMovie()
    return
  }
  previewStore.setPreviewMovie(randomMovie, posters[0].imageUrl)
}

// переменная, для того, чтобы код внутри watch выполнился единажды при
const already = ref<boolean>(false)
watch(
  async () => {
    // проверяем прошел ли день, чтоб обновить превью
    const previewLastDate = LsParser.get('lastUpdatePreview') || null
    const passedOneDay = previewLastDate
      ? DateParser.getDifferenceDays(new Date(), previewLastDate)
      : true
    if (!already.value && movieList.value.length && passedOneDay) {
      already.value = true
      await updatePreviewMovie()
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
</script>
