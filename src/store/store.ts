import { configureStore } from '@reduxjs/toolkit'

// Импортируем все API для регистрации их эндпоинтов
import '@/api/filmsApi'
import '@/api/peopleApi'
import '@/api/planetsApi'
import '@/api/speciesApi'
import '@/api/starshipsApi'
import '@/api/vehiclesApi'
import { errorHandlingMiddleware } from './errorHandlingMiddleware'

import { baseApi } from '@/api/baseApi'

// Создание Redux store с RTK Query
export const store = configureStore({
  reducer: {
    // Добавляем reducer от базового RTK Query API
    // Все остальные API расширяют его через injectEndpoints
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Добавляем middleware для RTK Query (обязательно!)
  // Это включает кэширование, инвалидацию, polling и другие фичи
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(errorHandlingMiddleware),
})

// Экспорт типов для использования в приложении
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
