import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import Loading from "../components/common/loading";
import { getData } from "../hooks/useFetch";
import Error from "../components/common/error";

const MainLayout = () => {
  const Layoutquery = ` {
  header {
    LightModeIcon {
      url
    }
    Links
    LogoImg {
      url
    }
    basketIcon {
      url
    }
    darkModeIcon {
      url
    }
    inputPlaceholder
    logo
    menuIcon {
      url
    }
    searchIcon {
      url
    }
    userIcon {
      url
    }
  }
}
  `;

  const { data, error, loading } = getData(Layoutquery);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <ScrollToTop />
      <Header data={data.header} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
