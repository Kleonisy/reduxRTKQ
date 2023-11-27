import axios from 'axios'
import { StateSchema } from 'app/providers/StoreProvider'
import { Dispatch } from '@reduxjs/toolkit'
import { userActions } from 'entities/User'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('correct login', async () => {
    const mockUserValue = {
      id: '1',
      username: 'admin'
    }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockUserValue }))
    const actionCreator = loginByUsername({ password: '123', username: '123' })
    const result = await actionCreator(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(mockUserValue))
    expect(dispatch).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })
  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const actionCreator = loginByUsername({ password: '123', username: '123' })
    const result = await actionCreator(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('rejected')
    expect(result.payload).toEqual('error')
    console.log(result, 'result')
  })
})
