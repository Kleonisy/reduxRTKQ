import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entities/User'
import { UserLogin } from 'entities/User/model/type/user'

interface LoginByUsernameProps {
  password: string
  username: string
}

export const loginByUsername = createAsyncThunk<UserLogin, LoginByUsernameProps, { rejectValue: string }>(
  'users/loginByUsername',
  async (loginData, thunkApi) => {
    try {
      const response = await axios.post<UserLogin>(
        'http://localhost:8000/login',
        loginData
      )
      if (!response.data) throw new Error()

      thunkApi.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e.message)
      return thunkApi.rejectWithValue('error')
    }
  }
)
