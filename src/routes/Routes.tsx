import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Home } from '../pages'

export const routesObject = {
  home: 'home',
}

const {
  home,
} = routesObject

const RoutesDeclaration = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
    <Route
        path={home}
        element={<Home />}
    />
    <Route
        path="*"
        element={<Navigate to={home} replace />}
    />
    </Routes>
  )
}

export const AppRoutes = () => (
  <BrowserRouter>
    <RoutesDeclaration />
  </BrowserRouter>
)
