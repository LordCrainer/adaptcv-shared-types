import { IUsers } from './users'

export type RequestUserData = IUsers & {
  currentRole: number
}

export interface LoginResponse {
  user: RequestUserData
  accessToken: string
  refreshToken: string
  expiresIn?: number
}

export type LoginRequest = Pick<IUsers, 'email' | 'password'> & {
  rememberMe?: boolean
}
