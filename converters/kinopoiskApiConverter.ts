import type { Movie, MovieFact, MovieImage } from '~/types/movie'

export function kinopoiskApiConverter(obj: any): Movie {
  let rating = obj.ratingKinopoisk || obj.ratingImdb || obj.rating || 0
  if (rating === 'null') rating = undefined
  return {
    kinopoiskId: obj.kinopoiskId || obj.filmId,
    countries: obj.countries,
    genres: obj.genres || [],
    rating: rating,
    year: obj.year || 'no year',
    type: obj.type || 'unknown type',
    posterUrl: obj.posterUrl || '',
    posterUrlPreview: obj.posterUrlPreview || '',
    name: obj.nameRu || obj.nameEn || obj.nameOriginal || '',
    favorite: false,
    description: obj.description,
    userRating: 0,
  }
}

export function kinopoiskImageConverter(item: any): MovieImage {
  return {
    imageUrl: item?.imageUrl,
    previewUrl: item?.previewUrl,
  }
}

export function kinopoiskFactConverter(item: any): MovieFact {
  return {
    type: item?.type,
    spoiler: item?.spoiler,
    text: item?.text,
  }
}
