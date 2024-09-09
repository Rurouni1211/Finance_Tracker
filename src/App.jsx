import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider, redirect, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { useAuthContext } from './hooks/useAuthContext'



function App() {
  const {authIsReady, user} = useAuthContext()
  const router = createBrowserRouter([
  
    {
      path: '/',
    element: <Layout />, // Layout that includes Navbar
    children: [
      {
        path: '/',
        element: user ? <Home /> : <Navigate to="/login" />,
      },
      {
        path: 'login',
        element: user ? <Navigate to ="/"/> : <Login />
      },
      {
        path: 'signup',
        element: user ? <Navigate to ="/"/> : <Signup />
      }
    ]
    }
  
])
  return (
    <>
    {authIsReady && (
      <RouterProvider router={router} />
    )}
    </>
    
    
    
  
  )
}

export default App
