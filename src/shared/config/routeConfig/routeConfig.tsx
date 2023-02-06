import {RouteProps} from 'react-router-dom'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'

export enum AppRoutes {
  ABOUT = 'about',
  MAIN = 'main'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MAIN]: '/'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: '/'
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: '/about'
  }
}