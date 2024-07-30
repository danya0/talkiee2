import type { Movie, MovieImage } from '~/types/movie'

export function kinopoiskApiConverter(obj: any): Movie {
  return {
    kinopoiskId: obj.kinopoiskId,
    countries: obj.countries,
    genres: obj.genres || [],
    ratingKinopoisk: obj.ratingKinopoisk || 0,
    ratingImbd: obj.ratingImbd || 0,
    year: obj.year || 'no year',
    type: obj.type || 'unknown type',
    posterUrl: obj.posterUrl || '',
    posterUrlPreview: obj.posterUrlPreview || '',
    name: obj.nameRu || obj.nameEn || obj.nameOriginal || '',
    favorite: false,
  }
}

export function kinopoiskImageConverter(item: any): MovieImage {
  return {
    imageUrl: item?.imageUrl,
    previewUrl: item?.imageUrlPreview,
  }
}
