<template>
  <div>
    <MoviePreview
      v-if="previewMovie && previewMoviePoster"
      :movie="previewMovie"
      :image="previewMoviePoster"
    />
    <Container>
      <section class="flex flex-col items-center gap-y-5">
        <SearchBox
          class="w-full sm:w-1/2"
          v-model="searchText"
          @search="search"
        />
        <MovieSelector v-model="selectorType" />
        <MovieGrid
          :is-loaded="isLoaded"
          class="self-stretch"
          :title="selectorTypeText"
          :movie-list="movieList"
          @pagination="nextPage"
        />
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
import { usePreviewStore } from '~/store/previewStore'

const router = useRouter()
const store = useMainStore()
const previewStore = usePreviewStore()
const kp = new KinopoiskApi()

const searchText = ref('')
const movieList = computed(() => store.finalMovieList)
const isLoaded = computed(() => store.loaded)

const previewMovie = computed(() => previewStore.previewMovie)
const previewMoviePoster = computed(() => previewStore.previewMoviePoster)

const selectorType = ref<
  | MovieCollections.POPULAR_SERIES
  | MovieCollections.TOP_POPULAR_MOVIES
  | MovieCollections.TOP_POPULAR_ALL
>(MovieCollections.TOP_POPULAR_ALL)
const selectorTypeText = computed(() => {
  if (selectorType.value === MovieCollections.TOP_POPULAR_MOVIES) {
    return 'Популярные фильмы'
  } else if (selectorType.value === MovieCollections.POPULAR_SERIES) {
    return 'Популярные сериалы'
  } else {
    return 'Популярные фильмы и сериалы'
  }
})

const page = ref<number>(1)
// переменная для того, чтобы не дергался watch при сбросе страницы на единицу (надо смотреть и рефачить)
const resetPage = ref<boolean>(false)
const totalPages = computed(() => store.totalPages)

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
  () => [selectorType.value, page.value],
  (prevV, newV) => {
    if (newV && newV[0] !== prevV[0]) {
      resetPage.value = true
      page.value = 1
    }
    if (resetPage.value) {
      resetPage.value = false
      return
    }
    store.loadFilms(selectorType.value, page.value)
  },
  { immediate: true },
)

const search = () => {
  router.push({
    path: '/search',
    query: {
      s: searchText.value,
    },
  })
}

const nextPage = () => {
  if (totalPages.value === page.value) return
  page.value++
}
</script>
