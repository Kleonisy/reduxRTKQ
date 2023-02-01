import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, TTheme } from './themeContext'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: TTheme
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { toggleTheme, theme }
}
