import { defineStore } from 'pinia'
import { type Movie } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'
import { StorageConst } from '~/constants/localStorageConst'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteList: (LsParser.get(StorageConst.favoriteList) || []) as Movie[],
  }),
  actions: {
    favoriteToggle(movie: Movie) {
      if (movie.favorite) {
        this.$state.favoriteList = this.$state.favoriteList.filter(
          (item) => item.kinopoiskId !== movie.kinopoiskId,
        )
      } else {
        this.$state.favoriteList.push({ ...movie, favorite: true })
      }
      LsParser.set(StorageConst.favoriteList, this.$state.favoriteList)
    },
    checkFavorite(movieId: number): boolean {
      const ids = this.favoriteList.map((item) => item.kinopoiskId)
      return ids.includes(movieId)
    },
  },
})
