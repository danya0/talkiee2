<template>
  <Container>
    <MovieGrid :movie-list="favoriteList" />
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainPageStore } from '~/store/mainPageStore'
const store = useMainPageStore()
const favoriteList = computed(() => store.favoriteList)
</script>
