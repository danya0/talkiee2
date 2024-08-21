import { defineStore } from 'pinia'
import { kp } from '~/library/kinopoiskApi'
import { type Movie } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchList: [] as Movie[],
    searchListTotalPages: 0 as number,
    loaded: false as boolean,
  }),
  getters: {
    finalSearchList(state) {
      const favoriteList: Movie[] = LsParser.get('favoriteList') || []
      const favoriteIds = favoriteList.map((movie) => movie.kinopoiskId)
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
  },
})
