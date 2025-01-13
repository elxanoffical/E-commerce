import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import Loading from "../components/common/loading";

const MainLayout = () => {
  const [loading, setLoading] = useState();

  useEffect(()=>{
     setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  {
    return loading ? (
      <Loading /> ) : (
      <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
};

export default MainLayout;
