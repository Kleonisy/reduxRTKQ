export interface UserLogin {
  id: string
  username: string
}

export interface UserSchema {
  userAuthData?: UserLogin
}
