import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserLogin, UserSchema } from '../type/user'

const initialState: UserSchema = {
  userAuthData: null
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: (state) => {
      state.userAuthData = null
    },
    setAuthData: (state, action: PayloadAction<UserLogin>) => {
      state.userAuthData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
