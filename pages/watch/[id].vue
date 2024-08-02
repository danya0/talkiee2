<template>
  <Container class="pt-24" v-if="movie">
    <div class="w-full flex items-center justify-between mb-7">
      <div v-if="genres">
        <h1 class="text-3xl">{{ movie.name }}</h1>
        <span class="text-white/70" v-for="(genre, idx) in genres">
          {{ genre }}{{ idx === genres.length - 1 ? '' : ', ' }}
        </span>
      </div>
      <MovieFavoriteButton :favorite="movie.favorite" @click="toggleFavorite" />
    </div>
    <div class="flex flex-col lg:flex-row gap-y-5 gap-x-12 max-h-[600px]">
      <div
        data-kinobox="auto"
        :data-kinopoisk="movie.kinopoiskId"
        class="h-auto w-full lg:w-[70%] mx-auto"
      />
    </div>
    <MovieSection class="" title="Информация">
      <div>
        <p class="text-lg font-bold">Тип:</p>
        <div>
          {{ filmType }}
        </div>
      </div>
      <div v-if="countries">
        <p class="text-lg font-bold">Страна производства:</p>
        <div>
          <span v-for="(country, idx) in countries">
            {{ country }}{{ idx === countries.length - 1 ? '' : ', ' }}
          </span>
        </div>
      </div>
      <div>
        <p class="text-lg font-bold">Год выпуска:</p>
        <div>
          {{ movie.year }}
        </div>
      </div>
      <div>
        <p class="text-lg font-bold">Описание:</p>
        <div>
          {{ movie.description }}
        </div>
      </div>
    </MovieSection>
    <MovieSection title="Галерея" v-if="images.length" class="mt-16">
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
          class="opacity-100 group-hover:hidden transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
        >
          Может содержать спойлеры
        </div>
      </div>
    </MovieSection>
    <MovieSection v-if="facts && facts.length" title="Факты">
      <FactsBlock :facts="facts" />
    </MovieSection>
  </Container>
</template>

<script lang="ts" setup>
import { KinopoiskApi } from '~/library/kinopoiskApi'
import type { Movie, MovieFact, MovieImage } from '~/types/movie'
import MovieFavoriteButton from '~/components/movie/movieFavoriteButton.vue'
import { useMainStore } from '~/store/mainPageStore'
import FactsBlock from '~/components/moviePage/factsBlock.vue'
import MovieSection from '~/components/moviePage/movieSection.vue'

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
const countries = computed(() =>
  movie.value?.countries.map((item) => item.country),
)
const filmType = computed(() => {
  console.log('movie.value?.type -> ', movie.value?.type)
  if (movie.value?.type === 'FILM') {
    return 'Фильм'
  } else if (movie.value?.type === 'TV_SERIES') {
    return 'Сериал'
  } else if (movie.value?.type === 'MINI_SERIES') {
    return 'Мини-сериал'
  }
  return 'Фильм или сериал'
})

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
  plugin.setAttribute('src', '/talkiee2/kinobox.min.js')
  plugin.async = true
  document.head.appendChild(plugin)
})

const toggleFavorite = () => {
  if (movie.value) {
    store.favoriteToggle(movie.value)
    movie.value.favorite = !movie.value.favorite
  }
}
</script>
