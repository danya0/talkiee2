<template>
  <Container v-if="movie">
    <div class="w-full flex itmes-center justify-between mb-7">
      <h1 class="text-3xl">{{ movie.name }}</h1>
      <button class="bg-orange-500 px-2 rounded-lg">
        Добавить в избранное
      </button>
    </div>
    <div class="flex gap-x-12 max-h-[600px]">
      <div class="bg-blue-300 grow h-[600px]"></div>
      <div class="w-[30%] flex flex-col overflow-y-hidden">
        <label>
          <input v-model="noSpoiler" type="checkbox" />
          Без спойлеров
        </label>
        <p>Факты:</p>
        <div class="overflow-y-auto">
          <ol class="list-decimal ml-7">
            <li
              :class="[
                'tracking-normal leading-relaxed my-2',
                fact.spoiler && noSpoiler ? 'blur-sm' : '',
              ]"
              v-for="fact in facts"
            >
              {{ fact.text }}
            </li>
          </ol>
        </div>
      </div>
    </div>
    <section class="mt-16">
      <h1 class="text-3xl mb-4">Галерея</h1>
      <div class="relative group">
        <div
          class="blur-lg transition-all group-hover:blur-0 flex gap-x-4 overflow-x-auto h-[250px]"
        >
          <!--      todo: при клике открыть в полноэкранном режиме (создать компонент FullScreenView.vue)-->
          <img
            class="h-full"
            v-for="image in images"
            :src="image.previewUrl"
            :alt="image.previewUrl"
          />
        </div>
        <div
          class="opacity-100 group-hover:opacity-0 transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
        >
          Может содержать спойлеры
        </div>
      </div>
    </section>
  </Container>
</template>

<script lang="ts" setup>
import { KinopoiskApi } from '~/library/kinopoiskApi'
import type { Movie, MovieFact, MovieImage } from '~/types/movie'

const route = useRoute()
const movieId = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
)
const kp = new KinopoiskApi()
const movie = ref<Movie | null>(null)
const facts = ref<MovieFact[] | null>(null)
const images = ref<MovieImage[]>([])

const noSpoiler = ref<boolean>(true)

onMounted(async () => {
  // todo: обрабатывать момент, когда в id передаем рандом значение
  movie.value = await kp.getById(movieId.value)
  facts.value = await kp.getFacts(movieId.value).then((facts) =>
    facts.map((fact) => {
      const replacedText = fact.text.replace(/(<([^>]+)>)/gi, '')
      return {
        ...fact,
        text: replacedText,
      }
    }),
  )
  images.value = await kp.getMovieImages(+movieId.value)
})
</script>
