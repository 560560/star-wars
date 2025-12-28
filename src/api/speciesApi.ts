import { baseApi } from './baseApi'
import type { IListRequestParams, ISpecies, PaginatedResponse } from './types'

// API для работы с расами Star Wars
export const speciesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список рас с пагинацией
    getSpecies: builder.query<
      PaginatedResponse<ISpecies>,
      IListRequestParams | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params?.search) queryParams.append('search', params.search)
        return `/species?${queryParams.toString()}`
      },
    }),

    // Получить конкретную расу по ID
    getSpeciesById: builder.query<ISpecies, number>({
      query: (id) => `/species/${id}`,
    }),
  }),
})

export const { useGetSpeciesQuery, useGetSpeciesByIdQuery } = speciesApi
