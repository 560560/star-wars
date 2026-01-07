import { baseApi } from './baseApi'
import type { IFilm, PaginatedResponse } from './types'

export const filmsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список фильмов
    getFilms: builder.query<PaginatedResponse<IFilm>, void>({
      query: () => '/films',
      keepUnusedDataFor: 300,
    }),

    // Получить конкретный фильм по ID
    getFilm: builder.query<IFilm, number>({
      query: (id) => `/films/${id}`,
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmQuery } = filmsApi
