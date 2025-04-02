export type RoleType = 'superAdmin' | 'admin' | 'manager' | 'user' | 'provider'

export type RoleConfig = Record<RoleType, number>
