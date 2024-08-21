import { defineStore } from 'pinia'
import { kp } from '~/library/kinopoiskApi'
import { type Movie, MovieCollections } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteList: (LsParser.get('favoriteList') || []) as Movie[],
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
      LsParser.set('favoriteList', this.$state.favoriteList)
    },
    checkFavorite(movieId: number): boolean {
      const ids = this.favoriteList.map((item) => item.kinopoiskId)
      return ids.includes(movieId)
    },
  },
})
