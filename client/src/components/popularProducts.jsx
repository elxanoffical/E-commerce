import React, { useEffect, useRef } from "react";
import ScrollToTop from "../hooks/useScrollToTop";
import ProductCard from "./productCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularProducts = ({ title, subTitle, textAlign, products }) => {

  const shopNow = useRef()
  const bestShop = useRef()
  const cards = useRef()

  useEffect(()=>{
  
        gsap.fromTo(
         [ shopNow.current, bestShop.current ],
          { opacity: 0, x: -10, y: -30, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            stagger: 0.4,
            duration: 0.8,
            scrollTrigger: {
              trigger: shopNow.current, // Elementi izləmək üçün
              start: "top 80%",         // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
              end: "bottom 20%",        // Animasiya harada bitməli
              toggleActions: "play none none none", // Animasiya hərəkətləri
            },
          }
        );

        gsap.fromTo(
          cards.current.children,
         { opacity: 0, x: -50, y: -30, scale: 0.8 },
         {
           opacity: 1,
           x: 0,
           y: 0,
           scale: 1,
           stagger: 0.3,
           duration: 1.5,
           scrollTrigger: {
             trigger: cards.current, // Elementi izləmək üçün
             start: "top 80%",         // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
             end: "bottom 20%",        // Animasiya harada bitməli
             toggleActions: "play none none none", // Animasiya hərəkətləri
           },
         },
         "<"
       );
        
      },[])

  return (
    <>
      <ScrollToTop />
      <section className="flex flex-col mt-[35px]">
        <div className="flex container flex-col gap-2 mb-10">
          <p ref={shopNow} className={`text-xs text-${textAlign} text-neutral-400`}>
            {title}
          </p>
          <h3 ref={bestShop} className={`text-2xl text-${textAlign} font-bold`}>{subTitle}</h3>
        </div>
        <div ref={cards} className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[140px]">
          {products?.slice(0, 4).map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
