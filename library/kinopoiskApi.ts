import type { Movie } from '~/types/movie'
import { kinopoiskApiToMovieConverter } from '~/converters/kinopoiskApiToMovieConverter'

export class KinopoiskApi {
  private xKey = 'c20595a1-3d8c-4cbd-92eb-fd7b0fa75c67'
  private baseUrl = 'https://kinopoiskapiunofficial.tech'

  private async fetch(
    url: string,
    method: string,
    params?: { [key: string]: string },
  ) {
    const res = await fetch(
      `${this.baseUrl}${url}` + new URLSearchParams(params),
      {
        method,
        headers: {
          'X-API-KEY': this.xKey,
          'Content-Type': 'application/json',
        },
      },
    )
    const json = await res.json()
    return json
  }

  async getByKeyword(word: string, page: string): Promise<Movie[]> {
    const films = await this.fetch(
      '/api/v2.1/films/search-by-keyword?',
      'GET',
      {
        keyword: word,
        page: page,
      },
    )
    // todo: внутри films лежит pagesCount для пагинации
    return films.films
  }

  async getCollections(
    page: string,
    collectionName: string = 'TOP_250_MOVIES',
  ): Promise<Movie[]> {
    const collection = await this.fetch('/api/v2.2/films/collections?', 'GET', {
      type: collectionName,
      page,
    })
    console.log('collection -> ', collection)
    return collection.items.map(kinopoiskApiToMovieConverter)
  }
}
