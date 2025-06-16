export interface IBaseEntity {
  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  deletedAt?: Date | null
}

export interface Pagination {
    total: number
    page: number
    limit: number
    totalPages: number
    skip?: number
}
  
export interface ApiResponse<T> {
    status?: number
    message?: string
    data?: T
    pagination?: Pagination
}