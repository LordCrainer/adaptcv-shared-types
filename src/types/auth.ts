import { IUsers } from './users'

export type RequestUserData = IUsers & {
  currentOrgId?: string
  currentRole?: number
}

export interface LoginOutput {
  user: RequestUserData
  token: string
}
