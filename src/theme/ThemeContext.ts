import { createContext } from 'react'

export type TTheme = 'light' | 'dark'

export interface IThemeContextProps {
  theme?: TTheme
  setTheme?: (theme: TTheme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'