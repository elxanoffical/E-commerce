import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import BestSeller from '../components/bestSeller'
import Catogories from '../components/catogories'
import ProductList from '../components/productList'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <BestSeller/>
    <Catogories/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default HomePage