import {
  AnyAction, CombinedState, Reducer, ReducersMapObject, combineReducers
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKeys[] = []

  return {
    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove?.forEach((key) => {
          delete state[key]
        })

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
