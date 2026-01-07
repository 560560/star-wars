import { baseApi } from './baseApi'
import type { IListRequestParams, IPerson, PaginatedResponse } from './types'

import { transformListResponse } from '@/api/utils'

export const peopleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список персонажей с пагинацией
    getPeople: builder.query<
      PaginatedResponse<IPerson>,
      IListRequestParams | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params?.search) queryParams.append('search', params.search)
        return `/people?${queryParams.toString()}`
      },
      transformResponse: transformListResponse,
      keepUnusedDataFor: 300,
    }),

    // Получить конкретного персонажа по ID
    getPerson: builder.query<IPerson, number>({
      query: (id) => `/people/${id}`,
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { useGetPeopleQuery, useGetPersonQuery } = peopleApi
