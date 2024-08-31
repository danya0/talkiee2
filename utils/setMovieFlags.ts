import type { Movie } from '~/types/movie'
import { useFavoriteStore } from '~/store/favoriteStore'
import { useRatedStore } from '~/store/ratedStore'

// Функция которая принимает массив Movie, и возвращает списов фильмов проставив флаги favorite и rating
export const setMovieFlags = (movies: Movie[]): Movie[] => {
  //stores
  const favoriteStore = useFavoriteStore()
  const ratedStore = useRatedStore()

  //lists
  const favoriteList: Movie[] = favoriteStore.favoriteList
  const ratedList: Movie[] = ratedStore.list

  return movies.map((movie) => {
    const insideMovie: Movie = JSON.parse(JSON.stringify(movie))

    // favorite condition
    const isFavorite: Movie | undefined = favoriteList.find(
      (item: Movie) => item.kinopoiskId === movie.kinopoiskId,
    )
    if (isFavorite) {
      insideMovie.favorite = true
    }

    // rated condition
    const isRated: Movie | undefined = ratedList.find(
      (item: Movie) => item.kinopoiskId === movie.kinopoiskId,
    )
    if (isRated) {
      insideMovie.userRating = isRated.userRating
    }

    return insideMovie
  })
}
