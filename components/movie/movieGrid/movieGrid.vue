<template>
  <div>
    <p class="text-xl mb-8">Популярные фильмы</p>
    <div class="w-full grid grid-cols-6 gap-y-4 gap-x-8">
      <MovieCard v-for="item in 13" :key="item" />
    </div>
  </div>
</template>

<scirpt lang="ts" setup></scirpt>
<script setup lang="ts">
import MovieCard from '~/components/movie/movieCard/movieCard.vue'
</script>
