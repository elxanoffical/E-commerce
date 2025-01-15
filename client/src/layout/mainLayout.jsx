import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import Loading from "../components/common/loading";
import { getData } from "../hooks/useFetch";
import Error from "../components/common/error";
import { useTranslation } from "react-i18next";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const [layoutLoading, setLayoutLoading] = useState();

  const Layoutquery = ` {
  header(locale:"${i18n.language}"){
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

  useEffect(() => {
    setLayoutLoading(true);
    setTimeout(() => {
      setLayoutLoading(false);
    }, 2000);
  }, [i18n.language]);

  if (layoutLoading) return <Loading />;
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <ScrollToTop />
      <Header data={data?.header} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
