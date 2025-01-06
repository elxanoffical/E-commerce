import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../hooks/useScrollToTop'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <>
   <ScrollToTop/>
   <Header/>
   <Outlet/>
   <Footer/>11
   </>
  )
}

export default MainLayout