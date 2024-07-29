<template>
  <Container>
    <section class="flex flex-col items-center gap-y-5">
      <SearchBox class="w-1/2" v-model="searchText" />
      <MovieGrid :filmList="filmList" />
    </section>
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainPageStore } from '~/store/mainPageStore'

const searchText = ref('')

const store = useMainPageStore()
store.loadFilms('1')
const filmList = computed(() => store.$state.filmList)
</script>
