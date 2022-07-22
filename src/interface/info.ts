export interface LoginInfo {
  username: string
  password: string
  email?: string
}

export interface MusicCategory {
  id: number
  name: string
  parent: number
  children: any[]
}