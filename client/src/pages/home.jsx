import Hero from "../components/hero";
import ProductList from "../components/productList";
import Loading from "../components/common/loading";
import Error from "../components/common/error";
import { getData } from "../hooks/useFetch";
import PopularProducts from "../components/popularProducts";
import HeroBottom from "../components/heroBottom";
import Features from "../components/features";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {i18n} = useTranslation()
  
  const HomePageQuery = `{
  products {
    documentId
    name
    price
    beforePrice
    images {
      url
    }
  }
  features(locale:"${i18n.language}") {
    icon {
      url
    }
    title
    subTitle
    documentId
  }

   heroes(locale:"${i18n.language}") {
    title
    subTitle
    img {
      url
    }
    btnText
    btnImg {
      url
    }
    btnHref
  }
}
`;


  const { data, error, loading } = getData(HomePageQuery);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { products,features,heroes } = data;

  return (
    <>
      <Hero
        data={heroes[0]}
      />

      <Features features={features}/>

      <PopularProducts
        title="Shop Now"
        subTitle="Best Selling"
        textAlign="center"
        products={products}
      />

      <HeroBottom
       data={heroes[1]}
      />

      <ProductList 
      products={products}
      />
    </>
  );
};

export default HomePage;
