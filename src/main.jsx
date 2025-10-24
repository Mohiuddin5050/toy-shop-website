import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Router.jsx'
import AuthProvider, { AuthContext } from './provider/AuthProvider.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    <ToastContainer position="top-center" autoClose={2000} />
    </AuthProvider>
  </StrictMode>,
)
