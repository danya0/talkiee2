import { defineStore } from 'pinia'
import { kp } from '~/library/kinopoiskApi'
import { type Movie, MovieCollections } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'
import { StorageConst } from '~/constants/localStorageConst'

export const useRatedStore = defineStore('rated', {
  state: () => ({
    list: (LsParser.get(StorageConst.ratedList) || []) as Movie[],
  }),
  actions: {
    rate(movie: Movie, rating: number) {
      const idx: number = this.list.findIndex(
        (item) => item.kinopoiskId === movie.kinopoiskId,
      )
      if (idx !== -1) {
        this.list[idx].userRating = rating
        return
      }
      this.list.push({ ...movie, rating })
    },
  },
})
