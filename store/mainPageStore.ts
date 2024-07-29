import { defineStore } from 'pinia'
import { KinopoiskApi } from '~/library/kinopoiskApi'

const kp = new KinopoiskApi()

export const useMainPageStore = defineStore('mainPage', {
  state: () => ({
    filmList: [],
  }),
  actions: {
    loadFilms(page: string) {
      kp.getCollections(page).then((res) => {
        this.$state.filmList = res.items
      })
    },
  },
})
