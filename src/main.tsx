import '../src/styles/normalize.scss'
import '../src/styles/global.scss'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ToastContainer } from './ui'
import { QueryClientProvider } from './common/queryClient'
import { GoogleOAuthProvider } from '@react-oauth/google'

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
    <ToastContainer />
    <QueryClientProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
