import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import './style/global.css'
import ScrollToTop from './hooks/useScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={routes}/>
  </>
)
