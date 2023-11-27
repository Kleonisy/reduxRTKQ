import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('should return password 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
  })
})
