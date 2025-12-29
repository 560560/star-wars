import React from 'react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { showErrorNotification } from '@/utils/notifications'

/**
 * Демо-компонент для тестирования уведомлений об ошибках
 */
export const NotificationsDemo: React.FC = () => {
  const handleSimpleError = () => {
    showErrorNotification('Произошла ошибка при загрузке данных')
  }

  const handleNetworkError = () => {
    const error: FetchBaseQueryError = { status: 'FETCH_ERROR' }
    showErrorNotification(error)
  }

  const handleTimeoutError = () => {
    const error: FetchBaseQueryError = { status: 'TIMEOUT_ERROR' }
    showErrorNotification(error)
  }

  const handle404Error = () => {
    const error: FetchBaseQueryError = {
      status: 404,
      data: { message: 'Планета не найдена' },
    }
    showErrorNotification(error)
  }

  const handle500Error = () => {
    const error: FetchBaseQueryError = {
      status: 500,
      data: { message: 'Внутренняя ошибка сервера' },
    }
    showErrorNotification(error)
  }

  const handleCustomError = () => {
    const error: FetchBaseQueryError = { status: 503, data: null }
    showErrorNotification(error, 'Сервис временно недоступен')
  }

  return (
    <div className="container mx-auto px-4 mt-5">
      <h2 className="mb-4">Тестирование уведомлений об ошибках</h2>
      <p className="text-gray-500 mb-4">
        SWAPI - read-only API, поэтому показываем только ошибки загрузки данных
      </p>
      <div className="flex flex-wrap gap-3">
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSimpleError}
          >
            Простая ошибка
          </button>
        </div>
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNetworkError}
          >
            Ошибка сети (FETCH_ERROR)
          </button>
        </div>
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleTimeoutError}
          >
            Таймаут (TIMEOUT_ERROR)
          </button>
        </div>
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handle404Error}
          >
            404 - Not Found
          </button>
        </div>
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handle500Error}
          >
            500 - Server Error
          </button>
        </div>
        <div className="w-full md:w-6/12 px-3">
          <button
            className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-2 px-4 rounded"
            onClick={handleCustomError}
          >
            Кастомное сообщение
          </button>
        </div>
      </div>
    </div>
  )
}
