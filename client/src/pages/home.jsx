import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import BestSeller from "../components/bestSeller";
import Catogories from "../components/catogories";
import ProductList from "../components/productList";
import Footer from "../components/footer";
import axios from "axios";
import FeaturesCard from "../components/featuresCard";
import Loading from "../components/common/loading";
import Error from "../components/common/error";

const HomePage = () => {
  const [features, setFeatures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `http://localhost:1337/api/features?populate=*`
      );

      if (response.status !== 200) {
        throw new Error(response?.error?.message);
      }

      const features = response.data.data;

      setTimeout(() => {
        setFeatures(features);
        setLoading(false);
      }, 2000);

    } catch (err) {
      setTimeout(() => {
        setError(true);
        setLoading(false);
      },);
      console.log(err.message)

      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <Hero />
      <div className="">
        <div className=" container h-[266px] mx-auto mt-[91px] mb-[72px] flex items-center justify-center gap-14">
          {features?.map((item) => {
            return <FeaturesCard key={item.documentId} item={item} />;
          })}
        </div>
      </div>
      <BestSeller />
      <Catogories />
      <ProductList />
      <Footer />
    </>
  );
};

export default HomePage;
