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
    collectionType: null as MovieCollections | null,
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
      if (page === this.$state.totalPages || this.$state.loaded) return
      const newCollection: boolean =
        this.$state.collectionType !== collectionType

      this.$state.loaded = true
      if (newCollection) this.$state.movieList = []

      kp.getCollections(page, collectionType)
        .then((res) => {
          this.$state.movieList = unique([
            ...this.$state.movieList,
            ...res.items,
          ])
          this.$state.totalPages = res.totalPages
          this.$state.movieList = unique([
            ...this.$state.movieList,
            ...res.items,
          ])

          if (newCollection) this.$state.collectionType = collectionType
        })
        .finally(() => {
          this.$state.loaded = false
        })
    },
  },
})
