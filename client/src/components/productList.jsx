import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProductList = ({ products }) => {
  const featured = useRef()
  const latest = useRef()
  const cards = useRef()

  useEffect(() => {

    gsap.fromTo(
      [featured.current, latest.current],
      { opacity: 0, x: -10, y: -30, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
          trigger: featured.current, // Elementi izləmək üçün
          start: "top 70%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 20%", // Animasiya harada bitməli
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
          start: "top 60%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 20%", // Animasiya harada bitməli
          toggleActions: "play none none none", // Animasiya hərəkətləri
        },
      },
      "<"
    );
    
  }, [products]);

  return (
    <div className="flex flex-col pt-20 dark:bg-black">
      <div className="flex items-center justify-center gap-6 mb-20">
        <button ref={featured} className="text-neutral-800 font-medium border px-4 py-1 rounded-2xl dark:text-neutral-100">
          Featured
        </button>
        <button ref={latest} className="text-neutral-500 dark:text-neutral-100">Latest</button>
      </div>
      <div ref={cards} className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[168px]">
        {products.slice(0,4).map((item, index) => (
          <Link 
          to={`/products/${item.documentId}`}
            onClick={() => prdocut(item.id)}
            key={index}
            className="px-2 py-4 flex flex-col gap-4 shadow-lg dark:shadow-neutral-700 rounded-lg"
          >
            <img
              className="bg-neutral-100 rounded h-[100%]"
              src={`http://localhost:1337${item?.images[0].url}`}
            />
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-[14px] font-medium dark:text-neutral-100">{item.name}</h4>
              <div className="flex items-center gap-4 sm:gap-7">
                <div className="flex gap-2 sm:gap-4 items-center">
                  {item?.beforePrice && (
                    <p className="text-gray-400 dark:text-neutral-400 text-[12px] sm:text-[14px] line-through tracking-wider">
                      ${item.beforePrice}
                    </p>
                  )}
                  <p className="text-neutral-600 dark:text-neutral-300 text-[14px] sm:text-[16px] tracking-wide">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label
                    className="text-[9px] sm:text-sm font-medium border py-1 px-4 rounded-2xl dark:text-neutral-100"
                    htmlFor=""
                  >
                    {item ? "IN STOCK" : "OUT OF STOCK"}
                  </label>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
