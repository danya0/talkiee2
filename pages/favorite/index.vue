<template>
  <Container class="pt-24">
    <MovieGrid v-if="favoriteList.length" :movie-list="favoriteList" />
    <div class="text-center" v-else>
      <p class="text-3xl">Кажется в избранном пусто 😔</p>
      <router-link to="/" class="text-lg underline text-blue-400">
        Вернуться на главную
      </router-link>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import MovieGrid from '~/components/movie/movieGrid/movieGrid.vue'
import { useMainStore } from '~/store/mainPageStore'
const store = useMainStore()
const favoriteList = computed(() => store.favoriteList)
</script>
