import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    devTools: __IS__DEV__,
    preloadedState: initialState,
    reducer: rootReducers
  })
}
