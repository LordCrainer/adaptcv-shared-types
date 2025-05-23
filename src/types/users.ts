import { IBaseEntity } from '../shared/base.entities'

export type UserStatus = 'active' | 'inactive' | 'pending'
export type UserAuthProvider = 'local' | 'google'
export interface IUsers extends IBaseEntity {
  _id: string
  name: string
  email: string
  password?: string
  passwordHash?: string
  authProvider?: UserAuthProvider
  timezone?: string
  isSuperAdmin?: boolean
  status: UserStatus
  role: number
}
