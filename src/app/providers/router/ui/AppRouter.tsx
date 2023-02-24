import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => (
  <Routes>
    {Object.values(RouteConfig).map(({ element, path }) => (
      <Route
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        )}
        key={path}
        path={path}
      />
    ))}
  </Routes>
)

export default AppRouter
