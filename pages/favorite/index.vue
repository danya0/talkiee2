<template>
  <Container>
    <MovieGrid :movie-list="favoriteList" />
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainStore } from '~/store/mainPageStore'
const store = useMainStore()
const favoriteList = computed(() => store.favoriteList)
</script>
