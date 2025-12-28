import toast from 'react-hot-toast'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

/**
 * Форматирует ошибку в читаемое сообщение
 */
const formatErrorMessage = (
  error: FetchBaseQueryError | SerializedError | Error | string,
): string => {
  // Если это строка, возвращаем как есть
  if (typeof error === 'string') {
    return error
  }

  // Если это обычная Error
  if (error instanceof Error) {
    return error.message
  }

  // Если это FetchBaseQueryError
  if ('status' in error) {
    if (error.status === 'FETCH_ERROR') {
      return 'Ошибка сети. Проверьте подключение к интернету.'
    }
    if (error.status === 'PARSING_ERROR') {
      return 'Ошибка обработки данных с сервера.'
    }
    if (error.status === 'TIMEOUT_ERROR') {
      return 'Превышено время ожидания ответа от сервера.'
    }
    if (typeof error.status === 'number') {
      const data = error.data as { message?: string; detail?: string }
      if (data?.message) {
        return `Ошибка ${error.status}: ${data.message}`
      }
      if (data?.detail) {
        return `Ошибка ${error.status}: ${data.detail}`
      }
      return `Ошибка сервера: ${error.status}`
    }
  }

  // Если это SerializedError
  if ('message' in error && error.message) {
    return error.message
  }

  // Общая ошибка
  return 'Произошла неизвестная ошибка'
}

/**
 * Показывает уведомление об ошибке
 */
export const showErrorNotification = (
  error: FetchBaseQueryError | SerializedError | Error | string,
  customMessage?: string,
) => {
  const message = customMessage || formatErrorMessage(error)
  toast.error(message)
}

/**
 * Показывает уведомление об успехе
 */
export const showSuccessNotification = (message: string) => {
  toast.success(message)
}

/**
 * Показывает уведомление с loading состоянием
 */
export const showLoadingNotification = (message: string) => {
  return toast.loading(message)
}

/**
 * Обновляет существующее уведомление
 */
export const updateNotification = (
  toastId: string,
  type: 'success' | 'error',
  message: string,
) => {
  if (type === 'success') {
    toast.success(message, { id: toastId })
  } else {
    toast.error(message, { id: toastId })
  }
}

/**
 * Закрывает уведомление
 */
export const dismissNotification = (toastId: string) => {
  toast.dismiss(toastId)
}
