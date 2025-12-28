import type { PaginatedResponse } from './types'

export function transformListResponse<T>(result: T[]): PaginatedResponse<T> {
  return Array.isArray(result) ? result : []
}
