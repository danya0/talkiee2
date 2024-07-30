export type Movie = {
  kinopoiskId: number
  name: string
  countries: {
    country: string
  }[]
  genres: {
    genre: string
  }[]
  ratingKinopoisk: number
  ratingImbd: number
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
