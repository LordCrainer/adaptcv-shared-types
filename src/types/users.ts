import { IBaseEntity } from '../shared/base.entities'

export type UserStatus = 'active' | 'inactive' | 'pending'
export interface IUsers extends IBaseEntity {
  _id: string
  name: string
  email: string
  password?: string
  passwordHash?: string
  timezone?: string
  isSuperAdmin?: boolean
  status: UserStatus
}
