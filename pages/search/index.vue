<template>
  <Container class="flex flex-col items-center">
    <SearchBox class="w-1/2" v-model="searchText" @search="search" />
    <MovieGrid :movie-list="searchList" />
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

onMounted(() => {
  searchText.value = `${route.query.s}`
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
