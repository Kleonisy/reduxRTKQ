import {
  Action, ReducersMapObject, Store, configureStore, isAnyOf, isFulfilled
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userActions, userReducer } from 'entities/User'
import { loginByUsername, loginReducer } from 'features/AuthByUsername'
import { AUTH_LOCALSTORAGE_TOKEN } from 'shared/constants/constants'
import { StateSchema } from './StateSchema'

const isLoggedIn = isFulfilled(loginByUsername)
const isLoggedOut = isAnyOf(userActions.logout)

const authMiddleware = (store: Store) => (next: (action: Action) => void) => (action: Action): void => {
  if (isLoggedIn(action)) localStorage.setItem(AUTH_LOCALSTORAGE_TOKEN, JSON.stringify(action.payload))

  if (isLoggedOut(action)) localStorage.removeItem(AUTH_LOCALSTORAGE_TOKEN)
  next(action)
}

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    loginForm: loginReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    devTools: __IS__DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware) as any,
    preloadedState: initialState,
    reducer: rootReducers
  })
}
