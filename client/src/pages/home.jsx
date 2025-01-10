import Hero from "../components/hero";
import ProductList from "../components/productList";
import FeaturesCard from "../components/featuresCard";
import Loading from "../components/common/loading";
import Error from "../components/common/error";
import { getData } from "../hooks/useFetch";

import categoryImg from "../assets/images/categoryImage.svg";
import heroImg from "../assets/images/heroImg.svg";
import PopularProducts from "../components/popularProducts";

const HomePage = () => {
  
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
  features {
    icon {
      url
    }
    title
    subTitle
    documentId
  }
}
`;

  // const { data: featuresData, error: featuresError, loading: featuresLoading } = getData("features");

  const { data, error, loading } = getData(HomePageQuery);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { products,features } = data;

  return (
    <>
      <Hero
        title=" Fresh Arrivals Online"
        subTitle="Discover Our Newest Collection Today."
        btnText="View Collection"
        btnHref=""
        img={heroImg}
      />
      <section className="">
        <div
          className=" container py-8 mt-10 gap-10
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features?.map((item) => {
            return <FeaturesCard key={item.documentId} item={item} />;
          })}
        </div>
      </section>

      <PopularProducts
        title="Shop Now"
        subTitle="Best Selling"
        textAlign="center"
        products={products}
      />

      <Hero
        title="Browse Our Fashion Paradise!"
        subTitle="Step into a world of style and explore our diverse collection of 
          clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={categoryImg}
      />

      <ProductList 
      products={products}
      />
    </>
  );
};

export default HomePage;
