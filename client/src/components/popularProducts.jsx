import React from "react";
import ScrollToTop from "../hooks/useScrollToTop";
import ProductCard from "./productCard";

const PopularProducts = ({ title, subTitle, textAlign, products }) => {
  return (
    <>
      <ScrollToTop />
      <section className="flex flex-col mt-[35px]">
        <div className="flex container flex-col gap-2 mb-10">
          <p className={`text-xs text-${textAlign} text-neutral-400`}>
            {title}
          </p>
          <h3 className={`text-2xl text-${textAlign} font-bold`}>{subTitle}</h3>
        </div>
        <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[168px]">
          {products.map((item, index) => (
            <ProductCard item={item} key={index.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
