import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import './style/global.css'
import './i18n/index'

if(!localStorage.getItem('lang')){
  localStorage.setItem('lang','az')
}

if(!localStorage.getItem('favorites')){
  localStorage.setItem('favorites','[]')
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={routes}/>
  </>
)
