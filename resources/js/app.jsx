import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Main from './Main'
import './bootstrap'
import router from './router'
import ContextProvider from './context/ContextProvider'
// import '../css/app.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
