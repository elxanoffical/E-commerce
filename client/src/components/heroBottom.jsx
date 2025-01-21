import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroBottom = ({data}) => {
  const text = useRef();
  const subText = useRef();
  const btn = useRef();
  const heroImg = useRef();

  useEffect(() => {
    gsap.fromTo(
      [text.current, subText.current],
      { opacity: 0, x: 20, y: -20, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: text.current, // Elementi izləmək üçün
          start: "top 50%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 50%", // Animasiya harada bitməli
          toggleActions: "play none none none", // Animasiya hərəkətləri
        },
      }
    );

    gsap.fromTo(
      btn.current,
      { opacity: 0, x: 10, y: 40, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: btn.current, // Elementi izləmək üçün
          start: "top 50%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 50%", // Animasiya harada bitməli
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
          start: "top 50%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 50%", // Animasiya harada bitməli
          toggleActions: "play none none none", // Animasiya hərəkətləri
        },
      },
      "<"
    );
  }, []);

  return (
    <div className="h-[304px]  bg-neutral-100 dark:bg-neutral-900 ">
      <div className="container sm:pt-6 pt-[20px] flex sm:items-center sm:justify-between ">
        <div className="flex flex-col gap-3 items-start py-2">
          <h3
            ref={text}
            className="text-neutral-800 text-2xl sm:text-3xl font-semibold dark:text-neutral-100"
          >
            {data?.title}
          </h3>
          <p
            ref={subText}
            className="text-neutral-600 text-[12px] sm:text-sm tracking-wide text-start sm:w-[90%] dark:text-neutral-400"
          >
            {data?.subTitle}
          </p>
          <button
            ref={btn}
            className="bg-neutral-900 flex gap-1 items-center dark:border text-white px-3 py-[6px] sm:px-5 sm:py-3 rounded
               mt-8 text-xs group"
          >
            {data?.btnText}
            <img
              className=" group-hover:translate-x-2 transition-all duration-300"
              src={`http://localhost:1337${data?.btnImg.url}`}
              alt=""
            />
          </button>
        </div>

        <img
          ref={heroImg}
          className="sm:mt-[0px] max-w-[170px] sm:max-w-[100%] sm:max-h-[100%] mx-auto sm:mx-0"
          src={`http://localhost:1337${data?.img.url}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBottom;
