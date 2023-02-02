import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
