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

        if (rating === 0) {
          this.removeFromList(movie.kinopoiskId)
        }
      } else {
        this.list.push({ ...movie, userRating: rating })
      }

      LsParser.set(StorageConst.ratedList, this.list)
    },
    removeFromList(id: number) {
      const movie: Movie | undefined = this.list.find(
        (item) => item.kinopoiskId === id,
      )
      if (!movie) return
      this.list = this.list.filter(
        (item) => item.kinopoiskId !== movie.kinopoiskId,
      )

      LsParser.set(StorageConst.ratedList, this.list)
    },
  },
})
