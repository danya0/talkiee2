import type { Movie, MovieFact, MovieImage } from '~/types/movie'
import {
  kinopoiskApiConverter,
  kinopoiskFactConverter,
  kinopoiskImageConverter,
} from '~/converters/kinopoiskApiConverter'

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

  async getById(id: string): Promise<Movie> {
    const movie = await this.fetch(`/api/v2.2/films/${id}`, 'GET')
    return kinopoiskApiConverter(movie)
  }

  async getFacts(id: string): Promise<MovieFact[]> {
    const facts = await this.fetch(`/api/v2.2/films/${id}/facts`, 'GET')
    return facts.items.map((fact: any) => kinopoiskFactConverter(fact))
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
    return films.films.map(kinopoiskApiConverter)
  }

  async getCollections(
    page: string,
    collectionName: string = 'TOP_POPULAR_ALL',
  ): Promise<Movie[]> {
    const collection = await this.fetch('/api/v2.2/films/collections?', 'GET', {
      type: collectionName,
      page,
    })
    console.log('collection -> ', collection)
    return collection.items.map(kinopoiskApiConverter)
  }

  async getMovieImages(movieId: number): Promise<MovieImage[]> {
    const images = await this.fetch(
      `/api/v2.2/films/${movieId}/images?`,
      'GET',
      {
        type: 'STILL',
        page: '1',
      },
    )
    return images.items.map(kinopoiskImageConverter)
  }
}
