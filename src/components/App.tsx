import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from '../helpers/classNames/classNames'
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async'
import { MainPageAsync } from '../pages/MainPage/MainPage.async'
import '../styles/index.scss'
import { useTheme } from '../theme/useTheme'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainPageAsync />} />
            <Route path='about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
