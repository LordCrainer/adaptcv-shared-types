import { IUsers } from './users'

export type RequestUserData = IUsers & {
  currentRole?: number
}

export interface LoginOutput {
  user: RequestUserData
  token: string
}

export interface LoginParams {
  username: string
  password: string
}