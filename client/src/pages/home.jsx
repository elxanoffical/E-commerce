import React, { useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import BestSeller from "../components/bestSeller";
import Catogories from "../components/catogories";
import ProductList from "../components/productList";
import Footer from "../components/footer";
import axios from 'axios'

const HomePage = () => {
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/features`);

      if (response.status !== 200) {
        throw new Error(response?.error?.message);
      }

      const features = response.data.data
      console.log(features)

    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <BestSeller />
      <Catogories />
      <ProductList />
      <Footer />
    </>
  );
};

export default HomePage;
