// packages
import { Suspense } from 'react'
// components
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
// utils
import { classNames } from 'shared/lib/classNames/classNames'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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
