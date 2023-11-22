import { lazy } from 'react'

export const LoginFormAsync = lazy(() => new Promise(
  // @ts-ignore
  (res) => setTimeout(() => res(import('./LoginForm')), 1500)
))
