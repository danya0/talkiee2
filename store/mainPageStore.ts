import { defineStore } from 'pinia'
import { KinopoiskApi } from '~/library/kinopoiskApi'
import { type Movie, MovieCollections } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'

const kp = new KinopoiskApi()

export const useMainStore = defineStore('main', {
  state: () => ({
    movieList: [] as Movie[],
    searchList: [] as Movie[],
    loaded: false as boolean,
    favoriteList: (LsParser.get('favoriteList') || []) as Movie[],
  }),
  getters: {
    finalMovieList(state) {
      const favoriteIds = state.favoriteList.map((movie) => movie.kinopoiskId)
      return state.movieList.map((movie) => {
        if (favoriteIds.includes(movie.kinopoiskId)) {
          return { ...movie, favorite: true }
        }
        return { ...movie, favorite: false }
      })
    },
  },
  actions: {
    findByName(name: string) {
      this.$state.loaded = true
      kp.getByKeyword(name, '1').then((res) => {
        this.$state.searchList = res
        this.$state.loaded = false
      })
    },
    loadFilms(page: string, collectionType?: MovieCollections) {
      this.$state.loaded = true
      kp.getCollections(page, collectionType).then((res) => {
        this.$state.movieList = res
        this.$state.loaded = false
      })
    },
    favoriteToggle(movie: Movie) {
      if (movie.favorite) {
        this.$state.favoriteList = this.$state.favoriteList.filter(
          (item) => item.kinopoiskId !== movie.kinopoiskId,
        )
      } else {
        this.$state.favoriteList.push({ ...movie, favorite: true })
      }
      LsParser.set('favoriteList', this.$state.favoriteList)
    },
    checkFavorite(movieId: number): boolean {
      const ids = this.favoriteList.map((item) => item.kinopoiskId)
      return ids.includes(movieId)
    },
  },
})
