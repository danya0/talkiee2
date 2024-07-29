<template>
  <Container>
    <section class="flex flex-col items-center gap-y-5">
      <SearchBox class="w-1/2" v-model="searchText" />
      <MovieGrid />
    </section>
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { KinopoiskApi } from '~/library/kinopoiskApi'

const searchText = ref('')

const kp = new KinopoiskApi()
</script>
