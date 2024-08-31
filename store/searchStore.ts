import { defineStore } from 'pinia'
import { kp } from '~/library/kinopoiskApi'
import { type Movie } from '~/types/movie'
import { LsParser } from '~/utils/lsParser'
import { maxSearchHistoryItems } from '~/constants/searchConts'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchList: [] as Movie[],
    searchListTotalPages: 0 as number,
    loaded: false as boolean,
    searchHistory: (LsParser.get('searchHistory') || []) as string[],
  }),
  getters: {
    finalSearchList(state) {
      return setMovieFlags(state.searchList)
    },
  },
  actions: {
    clearHistory() {
      this.searchHistory = []
      LsParser.removeItem('searchHistory')
    },
    writeToHistory(name: string) {
      const alreadyIdx = this.searchHistory.findIndex((item) => item === name)
      if (alreadyIdx !== -1) {
        this.searchHistory.push(...this.searchHistory.splice(alreadyIdx, 1))
        return
      }
      if (this.searchHistory.length >= maxSearchHistoryItems) {
        this.searchHistory.shift()
      }
      this.searchHistory.push(name)
      LsParser.set('searchHistory', this.searchHistory)
    },
    findByName(name: string, page: number) {
      const trimmedName = name.trim()

      this.$state.loaded = true
      if (page === 1) this.$state.searchList = []

      kp.getByKeyword(trimmedName, page).then((res) => {
        this.$state.searchList = [...this.$state.searchList, ...res.items]
        this.$state.searchListTotalPages = Math.ceil(
          res.searchFilmsCountResult / page,
        )
        this.writeToHistory(trimmedName)

        this.$state.loaded = false
      })
    },
  },
})
