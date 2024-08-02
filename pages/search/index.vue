<template>
  <Container class="pt-24 flex flex-col items-center">
    <SearchBox
      class="w-full sm:w-1/2 mb-6"
      v-model="searchText"
      @search="search"
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
// todo: выводить список "Недавно искали", хранить в локал сторе. С возможностью очистки
import { useMainStore } from '~/store/mainPageStore'
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'

const route = useRoute()
const router = useRouter()
const searchText = ref('')

const store = useMainStore()

const searchList = computed(() => store.finalSearchList)
const query = computed(() => route.query.s)
const isLoaded = computed(() => store.loaded)
const alreadySearched = ref<boolean>(false)

const page = ref(1)
const pageUpdate = ref<boolean>(false)
const totalPages = computed(() => store.searchListTotalPages)

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
watch(
  () => page.value,
  () => {
    if (pageUpdate.value) {
      pageUpdate.value = false
      return
    }
    store.findByName(searchText.value, page.value)
  },
)
const nextPage = () => {
  if (totalPages.value === page.value) return
  page.value++
}
</script>
