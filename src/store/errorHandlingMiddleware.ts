import type { Middleware } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'

import { showErrorNotification } from '@/utils/notifications'

/**
 * Middleware для автоматической обработки ошибок RTK Query
 * Показывает toast уведомления при ошибках API запросов
 */
export const errorHandlingMiddleware: Middleware =
  (_) => (next) => (action) => {
    // Проверяем, является ли action отклоненным RTK Query запросом
    if (isRejectedWithValue(action)) {
      // Можно добавить логику для игнорирования определенных эндпоинтов
      const meta = action.meta as unknown
      const endpoint =
        meta &&
        typeof meta === 'object' &&
        'arg' in meta &&
        meta.arg &&
        typeof meta.arg === 'object' &&
        'endpointName' in meta.arg
          ? (meta.arg.endpointName as string)
          : undefined

      // Например, не показываем ошибки для определенных эндпоинтов
      const ignoredEndpoints = ['getResourceByUrl'] // можно добавить эндпоинты, для которых не нужны уведомления

      if (endpoint && ignoredEndpoints.includes(endpoint)) {
        return next(action)
      }

      // Показываем уведомление об ошибке
      showErrorNotification(action.payload)
    }

    return next(action)
  }
