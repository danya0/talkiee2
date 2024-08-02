import { defineStore } from 'pinia'
import { KinopoiskApi } from '~/library/kinopoiskApi'
import { type Movie, MovieCollections } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'

const kp = new KinopoiskApi()

export const useMainStore = defineStore('main', {
  state: () => ({
    movieList: [] as Movie[],
    totalPages: 0 as number,
    searchList: [] as Movie[],
    searchListTotalPages: 0 as number,
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
    finalSearchList(state) {
      const favoriteIds = state.favoriteList.map((movie) => movie.kinopoiskId)
      return state.searchList.map((movie) => {
        if (favoriteIds.includes(movie.kinopoiskId)) {
          return { ...movie, favorite: true }
        }
        return { ...movie, favorite: false }
      })
    },
  },
  actions: {
    findByName(name: string, page: number) {
      if (page === 1) this.$state.loaded = true
      kp.getByKeyword(name, page).then((res) => {
        if (page === 1) {
          this.$state.loaded = false
          this.$state.searchList = res.items
          this.$state.searchListTotalPages = Math.ceil(
            res.searchFilmsCountResult / page,
          )
        } else {
          this.$state.searchList = [...this.$state.searchList, ...res.items]
        }
      })
    },
    loadFilms(collectionType: MovieCollections, page: number) {
      if (page === this.$state.totalPages) return

      const pageOne = page === 1
      if (pageOne) this.$state.loaded = true

      kp.getCollections(page, collectionType).then((res) => {
        if (pageOne) {
          this.$state.movieList = res.items
          this.$state.totalPages = res.totalPages
          this.$state.loaded = false
        } else {
          this.$state.movieList = unique([
            ...this.$state.movieList,
            ...res.items,
          ])
        }
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
