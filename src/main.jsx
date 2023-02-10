import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@picocss/pico'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(router)} />
  </React.StrictMode>,
)
