import { defineStore } from 'pinia'
import { kp } from '~/library/kinopoiskApi'
import { type Movie, MovieCollections } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'
import { useFavoriteStore } from '~/store/favoriteStore'

export const useMainStore = defineStore('main', {
  state: () => ({
    movieList: [] as Movie[],
    totalPages: 0 as number,
    loaded: false as boolean,
  }),
  getters: {
    finalMovieList(state) {
      const favoriteStore = useFavoriteStore()
      const favoriteIds = favoriteStore.favoriteList.map(
        (movie) => movie.kinopoiskId,
      )
      return state.movieList.map((movie) => {
        if (favoriteIds.includes(movie.kinopoiskId)) {
          return { ...movie, favorite: true }
        }
        return { ...movie, favorite: false }
      })
    },
  },
  actions: {
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
  },
})
