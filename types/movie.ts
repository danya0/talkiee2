export type Movie = {
  kinopoiskId: number
  name: string
  countries: {
    country: string
  }[]
  genres: {
    genre: string
  }[]
  rating?: number | string
  userRating: number
  year: string
  type: string
  posterUrl: string
  posterUrlPreview: string
  favorite: boolean
  description: string
}

export type MovieImage = {
  imageUrl: string
  previewUrl: string
}

export type MovieFact = {
  text: string
  type: string
  spoiler: boolean
}

export enum MovieCollections {
  POPULAR_SERIES = 'POPULAR_SERIES',
  TOP_POPULAR_MOVIES = 'TOP_POPULAR_MOVIES',
  TOP_POPULAR_ALL = 'TOP_POPULAR_ALL',
}
