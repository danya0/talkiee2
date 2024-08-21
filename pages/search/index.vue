<template>
  <Container class="pt-24 flex flex-col items-center">
    <SearchBox class="w-full mb-6" v-model="searchText" @search="search" />
    <div
      v-if="history.length"
      class="flex flex-wrap items-center gap-x-1 gap-y-1 mb-6"
    >
      <span>Недавно искали:</span>
      <span
        v-for="item in history"
        :key="item"
        class="text-white/70 inline-block hover:underline py-1 px-2 rounded-md bg-black/40"
        @click="research(item)"
      >
        {{ item }}
      </span>
      <span
        class="underline cursor-pointer text-white/80"
        @click="store.clearHistory"
        >Очистить историю</span
      >
    </div>
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
// todo: выводить список "Недавно искали", хранить в локал сторе. С возможностью очистки
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useSearchStore } from '~/store/searchStore'

const route = useRoute()
const router = useRouter()
const searchText = ref('')

const store = useSearchStore()

const searchList = computed(() => store.finalSearchList)
const query = computed(() => route.query.s)
const isLoaded = computed(() => store.loaded)
const alreadySearched = ref<boolean>(false)

const page = ref(1)
const pageUpdate = ref<boolean>(false)
const totalPages = computed(() => store.searchListTotalPages)

const history = computed(() => store.searchHistory.toReversed())

onActivated(() => {
  if (!query.value) return
  searchText.value = `${query.value}`
  search()
})
const search = () => {
  if (page.value > 1) {
    page.value = 1
    pageUpdate.value = true
  }
  store.findByName(searchText.value, page.value)
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
    if (pageUpdate.value) {
      pageUpdate.value = false
      return
    }
    store.findByName(searchText.value, page.value)
  },
)
const nextPage = () => {
  if (totalPages.value <= page.value) return
  page.value++
}
</script>
