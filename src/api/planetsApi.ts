import { baseApi } from './baseApi'
import type { IListRequestParams, IPlanet, PaginatedResponse } from './types'

export const planetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список планет с пагинацией
    getPlanets: builder.query<
      PaginatedResponse<IPlanet>,
      IListRequestParams | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params?.search) queryParams.append('search', params.search)
        return `/planets?${queryParams.toString()}`
      },
      keepUnusedDataFor: 300,
    }),

    // Получить конкретную планету по ID
    getPlanet: builder.query<IPlanet, number>({
      query: (id) => `/planets/${id}`,
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { useGetPlanetsQuery, useGetPlanetQuery } = planetsApi
