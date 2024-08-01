<template>
  <Container class="pt-24 flex flex-col items-center">
    <SearchBox
      class="w-full sm:w-1/2 mb-6"
      v-model="searchText"
      @search="search"
    />
    <div v-if="query && notFind" class="text-6xl text-center">
      По вашему запросу ничего не найдено 😢
    </div>
    <MovieGrid class="self-stretch" v-else :movie-list="searchList" />
  </Container>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/mainPageStore'
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'

const route = useRoute()
const router = useRouter()
const searchText = ref('')

const store = useMainStore()

const searchList = computed(() => store.searchList)
const query = computed(() => route.query.s)
const notFind = computed<boolean>(() => searchList.value.length < 1)

onMounted(() => {
  if (!query.value) return
  searchText.value = `${query.value}`
  search()
})
const search = () => {
  store.findByName(searchText.value)
  router.push({
    query: {
      ...route.query,
      s: searchText.value,
    },
  })
}
</script>
