<template>
  <Container>
    <section class="flex flex-col items-center gap-y-5">
      <SearchBox class="w-1/2" v-model="searchText" />
      <MovieGrid title="Популярные фильмы" :movie-list="movieList" />
    </section>
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainPageStore } from '~/store/mainPageStore'

const store = useMainPageStore()

onMounted(() => {
  store.loadFilms('1')
})

const searchText = ref('')
const movieList = computed(() => store.finalMovieList)
</script>
