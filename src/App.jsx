import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  
    {
      path: "/", 
      element: <Home/>,
    },
    {
      path: "/login", 
      element: <Login/>,
    },
    {
      path: "/signup", 
      element: <Signup/>,
    }
  
])

function App() {
  
  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  
  )
}

export default App
