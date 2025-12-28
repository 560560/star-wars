import { baseApi } from './baseApi'
import type { IListRequestParams, IVehicle, PaginatedResponse } from './types'

// API для работы с транспортом Star Wars
export const vehiclesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список транспорта с пагинацией
    getVehicles: builder.query<
      PaginatedResponse<IVehicle>,
      IListRequestParams | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params?.search) queryParams.append('search', params.search)
        return `/vehicles?${queryParams.toString()}`
      },
    }),

    // Получить конкретный транспорт по ID
    getVehicle: builder.query<IVehicle, number>({
      query: (id) => `/vehicles/${id}`,
    }),
  }),
})

export const { useGetVehiclesQuery, useGetVehicleQuery } = vehiclesApi
