import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, TTheme } from './themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme || 'light'

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme)

  const defaultProps = useMemo(() => ({
      setTheme: setTheme,
      theme,
    }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider