<template>
  <div
    class="cursor-pointer w-full grid group gap-y-1 max-w-[230px] self-start justify-self-center"
  >
    <div class="relative rounded-md overflow-hidden h-[340px]">
      <!--   Верхний бар с оценкой, годом и bookmark   -->
      <div class="absolute top-0 left-0 w-full z-10 flex justify-between">
        <div class="flex items-center mt-2 ml-2 gap-x-2">
          <MovieRating v-if="item.rating" :rating="item.rating" />
          <div class="p-1 rounded-md bg-[#4a6fb5] text-[0.8rem]">
            {{ item.year }}
          </div>
        </div>
        <MovieBookmark
          class="self-end"
          :status="item.favorite"
          @click.stop="favoriteToggle"
        />
      </div>
      <!--   Нижний бар с оценкой пользователя   -->
      <div
        v-if="!isMobile"
        class="absolute transition-opacity opacity-0 group-hover:opacity-100 bottom-4 left-0 w-full z-10"
      >
        <UserRating />
      </div>
      <img
        class="w-full h-full transition-transform group-hover:scale-105 object-fill"
        :src="item.posterUrlPreview"
        :alt="item.name"
      />
      <div
        class="transition-opacity absolute group-hover:opacity-30 top-0 left-0 h-full w-full bg-black opacity-0"
      />
    </div>
    <p class="text-white/70 line-clamp-2">{{ item.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie'
import MovieRating from '~/components/movie/movieCard/movieRating.vue'
import MovieBookmark from '~/components/movie/movieCard/movieBookmark.vue'
import UserRating from '~/components/userRating/userRating.vue'
import { isMobile } from '~/utils/isMobile'

const props = defineProps<{ item: Movie }>()
const emits = defineEmits(['favoriteToggle'])

const favoriteToggle = () => {
  emits('favoriteToggle')
}
const favoriteTitle = computed(() => (props.item.favorite ? 'remove' : 'add'))
</script>
