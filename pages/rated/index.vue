<template>
  <Container class="pt-24">
    <MovieGrid
      v-if="list.length"
      title="С персональными оценками"
      :movie-list="list"
    />
    <div class="text-center" v-else>
      <p class="text-3xl">Вы пока что не оценили ни одного фильма 😢</p>
      <router-link to="/" class="text-lg underline text-blue-400">
        Вернуться на главную
      </router-link>
    </div>
  </Container>
</template>

<script setup lang="ts">
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useRatedStore } from '~/store/ratedStore'

const store = useRatedStore()

const list = computed(() => setMovieFlags(store.list))
</script>
