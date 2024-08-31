import { defineStore } from 'pinia'
import type { Movie } from '~/types/movie'
import { StorageConst } from '~/constants/storageConst'

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    previewMovie:
      LsParser.get(StorageConst.previewMovie) || (null as Movie | null),
    previewMoviePoster:
      LsParser.get(StorageConst.previewPoster) || (null as string | null),
    lastUpdate: (LsParser.get(StorageConst.lastUpdatePreview) || null) as
      | number
      | null,
  }),
  actions: {
    setPreviewMovie(movie: Movie, imageLink: string) {
      const now = Date.now()

      this.previewMovie = movie
      this.previewMoviePoster = imageLink
      this.lastUpdate = now

      LsParser.set(StorageConst.previewMovie, movie)
      LsParser.set(StorageConst.previewPoster, imageLink)
      LsParser.set(StorageConst.lastUpdatePreview, now)
    },
  },
})
