import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../hooks/useScrollToTop'

const MainLayout = () => {
  return (
   <>
   <ScrollToTop/>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MainLayout