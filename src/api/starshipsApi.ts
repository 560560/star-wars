import { baseApi } from './baseApi'
import type { IListRequestParams, IStarship, PaginatedResponse } from './types'

// API для работы с звездолетами Star Wars
export const starshipsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список звездолетов с пагинацией
    getStarships: builder.query<
      PaginatedResponse<IStarship>,
      IListRequestParams | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params?.search) queryParams.append('search', params.search)
        return `/starships?${queryParams.toString()}`
      },
      keepUnusedDataFor: 300,
    }),

    // Получить конкретный звездолет по ID
    getStarship: builder.query<IStarship, number>({
      query: (id) => `/starships/${id}`,
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { useGetStarshipsQuery, useGetStarshipQuery } = starshipsApi
