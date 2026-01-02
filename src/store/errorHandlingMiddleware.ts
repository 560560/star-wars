import type { Middleware } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { showErrorNotification } from '@/utils/notifications'

const isHttpError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object' || !('status' in error)) {
    return false
  }

  const { status } = error as FetchBaseQueryError

  // Сетевые ошибки RTK Query
  if (
    status === 'FETCH_ERROR' ||
    status === 'TIMEOUT_ERROR' ||
    status === 'PARSING_ERROR'
  ) {
    return true
  }

  // HTTP ошибки (4xx и 5xx)
  return typeof status === 'number' && status >= 400
}

export const errorHandlingMiddleware: Middleware =
  (_) => (next) => (action) => {
    if (isRejectedWithValue(action) && isHttpError(action.payload)) {
      showErrorNotification(action.payload as FetchBaseQueryError)
    }

    return next(action)
  }
