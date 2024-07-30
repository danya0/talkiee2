<template>
  <div class="cursor-pointer grid group gap-y-1 max-w-[230px]">
    <div class="relative rounded-md overflow-hidden h-[340px]">
      <img
        class="w-full h-full transition-transform group-hover:scale-105 object-fill"
        :src="item.posterUrlPreview"
        :alt="item.name"
      />
      <div
        class="transition-opacity absolute group-hover:opacity-30 top-0 left-0 h-full w-full bg-black opacity-0"
      >
        <button @click="favoriteToggle">{{ favoriteTitle }} favorite</button>
      </div>
    </div>
    <p class="text-white/70 line-clamp-2">{{ item.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie'

const props = defineProps<{ item: Movie }>()
const emits = defineEmits(['favoriteToggle'])

const favoriteToggle = () => {
  emits('favoriteToggle')
}
const favoriteTitle = computed(() => (props.item.favorite ? 'remove' : 'add'))
</script>
