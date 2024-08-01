import { defineStore } from 'pinia'
import type { Movie } from '~/types/movie'

export const usePreviewStore = defineStore('preview', {
  state: () => ({
    previewMovie: LsParser.get('previewMovie') || (null as Movie | null),
    previewMoviePoster:
      LsParser.get('previewPoster') || (null as string | null),
    lastUpdate: LsParser.get('lastUpdatePreview'),
  }),
  actions: {
    setPreviewMovie(movie: Movie, imageLink: string) {
      const now = Date.now()

      console.log('movie -> ', movie)

      this.previewMovie = movie
      this.previewMoviePoster = imageLink
      this.lastUpdate = now

      LsParser.set('previewMovie', movie)
      LsParser.set('previewPoster', imageLink)
      LsParser.set('lastUpdatePreview', now)
    },
  },
})
