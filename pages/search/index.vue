<template>
  <Container class="pt-24 flex flex-col items-center">
    <SearchBox
      class="w-full sm:w-1/2 mb-6"
      v-model="searchText"
      @search="search"
    />
    <SearchHistory
      v-if="history.length"
      :history="history"
      @clear-history="store.clearHistory"
      @research="research"
    />
    <MovieGrid
      class="self-stretch"
      :movie-list="searchList"
      :is-loaded="isLoaded"
      @pagination="nextPage"
    />
    <div
      v-if="!searchList.length && !isLoaded && alreadySearched"
      class="text-3xl xl:text-4xl text-center"
    >
      По вашему запросу ничего не найдено 😢
    </div>
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useSearchStore } from '~/store/searchStore'
import SearchHistory from '~/components/moviePage/SearchHistory.vue'

const route = useRoute()
const router = useRouter()
const searchText = ref('')

const store = useSearchStore()

const searchList = computed(() => store.finalSearchList)
const query = computed(() => route.query.s)
const isLoaded = computed(() => store.loaded)
const alreadySearched = ref<boolean>(false)

const page = ref<number>(0)
const totalPages = computed(() => store.searchListTotalPages)

const history = computed(() => store.searchHistory.toReversed())

onActivated(() => {
  if (!query.value) return
  searchText.value = `${query.value}`
  search()
})
const search = () => {
  if (!searchText.value.trim()) return

  page.value = 1 // на page.value стоит вотчер, который дергает запрос поиска

  alreadySearched.value = true
  router.push({
    query: {
      ...route.query,
      s: searchText.value,
    },
  })
}

const research = (movieName: string) => {
  searchText.value = movieName
  search()
}

watch(
  () => [page.value, query.value],
  () => {
    store.findByName(searchText.value, page.value)
  },
)
const nextPage = () => {
  if (totalPages.value <= page.value) return
  page.value++
}
</script>
