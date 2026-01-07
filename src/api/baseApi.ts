import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { SwapiResource } from './types'

const BASE_URL = 'https://swapi.info/api'

export const baseApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['People', 'Films', 'Planets', 'Species', 'Starships', 'Vehicles'],
  endpoints: (builder) => ({
    getResourceByUrl: builder.query<SwapiResource, string>({
      query: (url) => {
        return url.replace(BASE_URL, '').replace('https://swapi.info/api', '')
      },
      keepUnusedDataFor: 300,
    }),

    // Batch загрузка ресурсов по массиву URL
    getResourcesByUrls: builder.query<SwapiResource[], string[] | undefined>({
      async queryFn(urls, _queryApi, _extraOptions, fetchWithBQ) {
        if (!urls || urls.length === 0) {
          return { data: [] }
        }

        const results = await Promise.all(
          urls.map((url) => {
            const path = url
              .replace(BASE_URL, '')
              .replace('https://swapi.info/api', '')
            return fetchWithBQ(path)
          }),
        )

        // Проверяем наличие ошибок
        const firstError = results.find((result) => result.error)
        if (firstError?.error) {
          return { error: firstError.error }
        }

        const data = results
          .map((result) => result.data)
          .filter(Boolean) as SwapiResource[]

        return { data }
      },
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { useGetResourceByUrlQuery, useGetResourcesByUrlsQuery } = baseApi
