// packages
import { Suspense, useEffect } from 'react'
// components
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
// utils
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch } from 'react-redux'
import { AUTH_LOCALSTORAGE_TOKEN } from 'shared/constants/constants'
import { userActions } from 'entities/User'

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const authData = JSON?.parse(localStorage.getItem(AUTH_LOCALSTORAGE_TOKEN))
    if (authData) {
      dispatch(userActions.setAuthData(authData))
    }
  }, [dispatch])
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense
        // eslint-disable-next-line i18next/no-literal-string
        fallback="...Loading"
      >
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
