<template>
  <Container v-if="movie && genres">
    <div class="w-full flex items-center justify-between mb-7">
      <div>
        <h1 class="text-3xl">{{ movie.name }}</h1>
        <span class="text-white/70" v-for="(genre, idx) in genres">
          {{ genre }}{{ idx === genres.length - 1 ? '' : ', ' }}
        </span>
      </div>
      <MovieFavoriteButton :favorite="movie.favorite" @click="toggleFavorite" />
    </div>
    <div class="flex gap-x-12 max-h-[600px]">
      <div
        data-kinobox="auto"
        :data-kinopoisk="movie.kinopoiskId"
        class="h-auto w-[70%] mx-auto"
      />
      <div v-if="facts?.length" class="w-[30%] flex flex-col overflow-y-hidden">
        <div class="flex items-center justify-between mb-4">
          <p>Факты:</p>
          <label>
            <input v-model="noSpoiler" type="checkbox" />
            Без спойлеров
          </label>
        </div>
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
      <h3 class="text-3xl mb-4">Описание</h3>
      <div class="">
        {{ movie.description }}
      </div>
    </section>
    <section class="mt-16">
      <h3 class="text-3xl mb-4">Галерея</h3>
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
import MovieFavoriteButton from '~/components/movie/movieFavoriteButton.vue'
import { useMainStore } from '~/store/mainPageStore'

const route = useRoute()
const store = useMainStore()

const movieId = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
)
const kp = new KinopoiskApi()
const movie = ref<Movie | null>(null)
const facts = ref<MovieFact[] | null>(null)
const images = ref<MovieImage[]>([])
const genres = computed(() => movie.value?.genres.map((item) => item.genre))

const noSpoiler = ref<boolean>(true)

onMounted(async () => {
  // todo: обрабатывать момент, когда в id передаем рандом значение
  // подгрузка файлов
  movie.value = await kp.getById(movieId.value)
  movie.value.favorite = store.checkFavorite(movie.value.kinopoiskId)

  // подгурзка фактов
  facts.value = await kp.getFacts(movieId.value).then((facts) =>
    facts.map((fact) => {
      const replacedText = fact.text.replace(/(<([^>]+)>)/gi, '')
      return {
        ...fact,
        text: replacedText,
      }
    }),
  )

  // подгурзка изображений
  images.value = await kp.getMovieImages(+movieId.value)

  // вставляем скрипт для просмотра фильма
  const plugin = document.createElement('script')
  plugin.setAttribute('src', '/kinobox.min.js')
  plugin.async = true
  document.head.appendChild(plugin)
})

const toggleFavorite = () => {
  if (movie.value) {
    console.log('movie.value.favorite before -> ', movie.value.favorite)
    store.favoriteToggle(movie.value)
    console.log('movie.value.favorite -> ', movie.value.favorite)
    movie.value.favorite = !movie.value.favorite
    console.log('movie.value.favorite after -> ', movie.value.favorite)
  }
}
</script>
