import '../src/styles/normalize.scss'
import '../src/styles/global.scss'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const Cab = lazy(() => import('./pages/Cab'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/cab',
    element: (
      <Suspense>
        <Cab />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
