import { IUsers } from './users'

export type RequestUserData = IUsers & {
  currentRole?: number
}

export interface LoginOutput {
  user: RequestUserData
  token: string
  refreshToken: string
  expiresIn?: number
}

export interface LoginParams {
  email: string
  password: string
}