import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}
type ReducersListEntry = [StateSchemaKeys, Reducer]
interface UseAsyncReducerPropTypes {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const useAsyncReducer = ({ reducers, removeAfterUnmount = true }: UseAsyncReducerPropTypes): void => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers)?.forEach(([reducerName, reducer]: ReducersListEntry) => {
      store.reducerManager.add(reducerName, reducer)
      dispatch({ type: `@INIT ${reducerName} reducer` })
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers)?.forEach(([reducerName, reducer]: ReducersListEntry) => {
          dispatch({ type: `@DESTROY ${reducerName} reducer` })
          store.reducerManager.remove(reducerName)
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
