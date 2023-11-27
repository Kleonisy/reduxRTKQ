import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit'
import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  /** асинхронная подгрузка редьюсера с помощью редьюсер-менеджера */
  loginForm?: LoginSchema
  user: UserSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
