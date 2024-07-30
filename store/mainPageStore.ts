import { defineStore } from 'pinia'
import { KinopoiskApi } from '~/library/kinopoiskApi'
import type { Movie } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'

const kp = new KinopoiskApi()

export const useMainStore = defineStore('main', {
  state: () => ({
    movieList: [] as Movie[],
    searchList: [] as Movie[],
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
      kp.getByKeyword(name, '1').then((res) => {
        this.$state.searchList = res
      })
    },
    loadFilms(page: string) {
      kp.getCollections(page).then((res) => {
        this.$state.movieList = res
      })
    },
    favoriteToggle(movie: Movie) {
      console.log('movie -> ', movie)
      if (movie.favorite) {
        this.$state.favoriteList = this.$state.favoriteList.filter(
          (item) => item.kinopoiskId !== movie.kinopoiskId,
        )
      } else {
        movie.favorite = true
        this.$state.favoriteList.push(movie)
      }
      LsParser.set('favoriteList', this.$state.favoriteList)
    },
  },
})
