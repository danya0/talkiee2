import { defineStore } from 'pinia'
import { type Movie } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'
import { StorageConst } from '~/constants/storageConst'

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
