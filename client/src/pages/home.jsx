import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import BestSeller from "../components/bestSeller";
import Catogories from "../components/catogories";
import ProductList from "../components/productList";
import FeaturesCard from "../components/featuresCard";
import Loading from "../components/common/loading";
import Error from "../components/common/error";
import { getData } from "../hooks/useFetch";

const HomePage = () => {
  const { data, error, loading } = getData('features');

  if(loading){
    <Loading/>
  }
  if(error){
    <Error/>
  }

  return (
    <>
      <Hero />
      <div className="">
        <div className=" container h-[266px] mx-auto mt-[91px] mb-[72px] flex items-center justify-center gap-14">
          {data?.map((item) => {
            return <FeaturesCard key={item.documentId} item={item} />;
          })}
        </div>
      </div>
      <BestSeller />
      <Catogories />
      <ProductList />
    </>
  );
};

export default HomePage;
