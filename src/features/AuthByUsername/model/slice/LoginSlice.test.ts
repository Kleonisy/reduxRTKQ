import { DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './LoginSlice'
import { LoginSchema } from '../types/LoginSchema'

describe('LoginSlice test', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' })
  })
  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123123'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({ password: '123123' })
  })
})
