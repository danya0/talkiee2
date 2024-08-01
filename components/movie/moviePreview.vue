<template>
  <div
    ref="posterHtmlEl"
    class="mb-10 relative bg-no-repeat bg-cover bg-center flex items-center w-full h-[90vh]"
  >
    <div
      class="bg-gradient-to-b from-transparent from-10% to-dark-bg to-100% h-1/2 w-full absolute left-0 bottom-0"
    />
    <div
      class="bg-gradient-to-l from-transparent from-10% to-dark-bg to-100% w-1/2 h-full absolute left-0 bottom-0"
    />

    <Container class="relative z-10 flex flex-col gap-y-4 items-start">
      <h1 class="text-6xl max-w-[500px] font-bold">{{ props.movie.name }}</h1>
      <h2 class="max-w-[650px] text-lg line-clamp-6">
        {{ props.movie.description }}
      </h2>
      <p>
        <span v-if="props.movie.rating"> {{ props.movie.rating }} | </span>
        <span v-if="props.movie.year"> {{ props.movie.year }} | </span>
        <span v-if="props.movie.type">
          {{ props.movie.type }}
        </span>
      </p>
      <router-link
        class="px-3 py-2 rounded-md text-lg text-white border-2 border-[#4a6fb5]"
        :to="`/watch/${props.movie.kinopoiskId}`"
      >
        Смотреть онлайн
      </router-link>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie'

const props = defineProps<{ image: string; movie: Movie }>()
const emits = defineEmits(['watchOnline'])

const posterHtmlEl = ref<HTMLDivElement>()
watch(
  () => {
    if (!posterHtmlEl.value) return
    posterHtmlEl.value.style.backgroundImage = 'url(' + props.image + ')'
  },
  () => props.image,
)

const watchOnline = () => {
  emits('watchOnline')
}
</script>
