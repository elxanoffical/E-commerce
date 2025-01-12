import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ title, subTitle, btnText, img }) => {
  const herotext = useRef();
  const heroSubText = useRef();
  const heroBtn = useRef();
  const heroImg = useRef();


  useEffect(() => {
    gsap.fromTo(
     [ herotext.current, heroSubText.current ],
      { opacity: 0, x: 20, y: -20, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: herotext.current, // Elementi izləmək üçün
          start: "top 80%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 20%", // Animasiya harada bitməli
          toggleActions: "play none none none", // Animasiya hərəkətləri
        },
      }
    );

    gsap.fromTo(
        heroBtn.current,
       { opacity: 0, x: 10, y: 40, scale: 0.8 },
       {
         opacity: 1,
         x: 0,
         y: 0,
         scale: 1,
         stagger: 0.4,
         duration: 0.8,
         scrollTrigger: {
           trigger: heroBtn.current, // Elementi izləmək üçün
           start: "top 80%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
           end: "bottom 20%", // Animasiya harada bitməli
           toggleActions: "play none none none", // Animasiya hərəkətləri
         },
       },
       "<"
     );

     gsap.fromTo(
      heroImg.current,
     { opacity: 0, x: 50, y: -20, scale: 0.8 },
     {
       opacity: 1,
       x: 0,
       y: 0,
       scale: 1,
       stagger: 0.4,
       duration: 0.8,
       scrollTrigger: {
         trigger: heroImg.current, // Elementi izləmək üçün
         start: "top 80%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
         end: "bottom 20%", // Animasiya harada bitməli
         toggleActions: "play none none none", // Animasiya hərəkətləri
       },
     },
     "<"
   );

   

  }, []);

  return (
    <div className="h-[440px] bg-neutral-100 ">
      <div className="container sm:pt-6 pt-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex flex-col gap-3 items-start py-2">
          <h3
            ref={herotext}
            className="text-neutral-800 text-2xl sm:text-3xl font-semibold"
          >
            {title}
          </h3>
          <p
            ref={heroSubText}
            className="text-neutral-600 text-sm tracking-wide text-start w-[80%] sm:w-[90%]"
          >
            {subTitle}
          </p>
          <button
            ref={heroBtn}
            className="bg-neutral-900 flex gap-1 items-center text-white px-3 py-[6px] sm:px-5 sm:py-3 rounded
           mt-8 text-xs group"
          >
            {btnText}
            <img
              className=" group-hover:translate-x-2 transition-all duration-300"
              src={arrowRight}
              alt=""
            />
          </button>
        </div>

        <img
          ref={heroImg}
          className="sm:mt-[42px] max-w-[238px] sm:max-w-[100%] sm:max-h-[100%] mx-auto sm:mx-0"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
