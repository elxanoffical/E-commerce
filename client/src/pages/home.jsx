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
  const { data, error, loading } = getData("features");
  console.log(`Loading:`,loading)
  console.log(data)
  console.log(`Error:`,error)

 
  if (loading) {  
    <Loading />;
  } 
  console.log(loading)
  if (error) {
    <Error />;
  }

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
          {data?.map((item) => {
            return <FeaturesCard key={item.documentId} item={item} />;
          })}
        </div>
      </section>

      {/* <PopularProducts
      title="Shop Now"
      subTitle="Best Selling"
      textAlign="center"
      products={products}
       /> */}


      <Hero
        title="Browse Our Fashion Paradise!"
        subTitle="Step into a world of style and explore our diverse collection of 
          clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={categoryImg}
      />

      <ProductList />
    </>
  );
};

export default HomePage;
