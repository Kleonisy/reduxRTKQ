import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: ''
}

export const loginSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
  initialState,
  name: 'login',
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
