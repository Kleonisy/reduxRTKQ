import { lazy } from 'react'

export const MainPageAsync = lazy(() => new Promise(
  // @ts-ignore
  (res) => setTimeout(() => res(import('./MainPage')), 1500)
))
