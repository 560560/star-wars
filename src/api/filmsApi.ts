import { baseApi } from './baseApi'
import type { IFilm, PaginatedResponse } from './types'

export const filmsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список фильмов
    getFilms: builder.query<PaginatedResponse<IFilm>, void>({
      query: () => '/films',
    }),

    // Получить конкретный фильм по ID
    getFilm: builder.query<IFilm, number>({
      query: (id) => `/films/${id}`,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmQuery } = filmsApi
