import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../type/user'

const initialState: UserSchema = {
  userData: null
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
