import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

const router = createBrowserRouter([
  
    {
      path: '/',
    element: <Layout />, // Layout that includes Navbar
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
    }
  
])

function App() {
  
  return (
    <RouterProvider router={router} />
  
  )
}

export default App
