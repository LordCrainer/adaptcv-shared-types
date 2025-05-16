import { IBaseEntity } from '../shared/base.entities'

export interface IUsers extends IBaseEntity {
  _id: string
  name: string
  email: string
  password?: string
  passwordHash?: string
  timezone?: string
  isSuperAdmin?: boolean
}
