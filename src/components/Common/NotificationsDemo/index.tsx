import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
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
    <Container className="mt-5">
      <h2 className="mb-4">Тестирование уведомлений об ошибках</h2>
      <p className="text-muted mb-4">
        SWAPI - read-only API, поэтому показываем только ошибки загрузки данных
      </p>
      <Row className="g-3">
        <Col md={6} xs={12}>
          <Button
            className="w-100"
            variant="danger"
            onClick={handleSimpleError}
          >
            Простая ошибка
          </Button>
        </Col>
        <Col md={6} xs={12}>
          <Button
            className="w-100"
            variant="danger"
            onClick={handleNetworkError}
          >
            Ошибка сети (FETCH_ERROR)
          </Button>
        </Col>
        <Col md={6} xs={12}>
          <Button
            className="w-100"
            variant="danger"
            onClick={handleTimeoutError}
          >
            Таймаут (TIMEOUT_ERROR)
          </Button>
        </Col>
        <Col md={6} xs={12}>
          <Button className="w-100" variant="danger" onClick={handle404Error}>
            404 - Not Found
          </Button>
        </Col>
        <Col md={6} xs={12}>
          <Button className="w-100" variant="danger" onClick={handle500Error}>
            500 - Server Error
          </Button>
        </Col>
        <Col md={6} xs={12}>
          <Button
            className="w-100"
            variant="outline-danger"
            onClick={handleCustomError}
          >
            Кастомное сообщение
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
