import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@picocss/pico'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HelloWorld from './pages/hello-world'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/hello-world",
        element: <HelloWorld/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
