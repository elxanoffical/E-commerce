import React, { useEffect, useRef } from "react";
import footerLogo from "../assets/images/footerLogo.svg";
import gitHub from "../assets/icons/social/Github.svg";
import instagram from "../assets/icons/social/Instagram.svg";
import youtube from "../assets/icons/social/Youtube.svg";
import masterCard from "../assets/icons/colored/Mastercard.svg";
import amex from "../assets/icons/colored/Amex.svg";
import visa from "../assets/icons/colored/Visa.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const text = useRef();
  const spanText = useRef();
  const inpt = useRef();
  const btn = useRef();

  useEffect(() => {

    gsap.fromTo(
      [text.current, spanText.current],
      { opacity: 0, x: -10, y: -40, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.4,
        duration: 3,
        scrollTrigger: {
          trigger: text.current, // Elementi izləmək üçün
          start: "top 20%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 0%", // Animasiya harada bitməli
          toggleActions: "play none none none", 
        },
      } 
    ); 

    gsap.fromTo(
      [inpt.current, btn.current],
      { opacity: 0, x: 30, y: -30, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: 0.5,
        duration: 3,
        scrollTrigger: {
          trigger: inpt.current, // Elementi izləmək üçün
          start: "top 50%", // Scroll animasiyası nə vaxt başlamalıdır (element görünəndə)
          end: "bottom 20%", // Animasiya harada bitməli
          toggleActions: "play none none none",
        },
      },
      "<"
    );
  }, []);

  return (
    <footer className="flex flex-col">
      <div className="bg-neutral-100 flex items-center justify-center ">
        <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between my-[59px]">
          <div className="flex flex-col gap-2">
            <h3 ref={text} className="text-[26px] font-semibold">Join Our Newsletter</h3>
            <p ref={spanText} className="text-neutral-500 text-sm mb-12">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="flex items-center gap-4 text-center">
            <input ref={inpt}
              className="border flex-1 py-[10px] px-4 rounded-md bg-transparent w-80
             outline-none text-neutral-300 font-medium sm:w-[250px] md:w-[320px]"
              type="text"
              placeholder="Your email address"
            />
            <button ref={btn} className="text-white bg-black py-[10px] px-6 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container gap-6 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center  my-14">
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-3">
            <img src={footerLogo} alt="" />
            <h3 className="text-xl font-extrabold text-neutral-900">
              Ecommerce
            </h3>
          </div>
          <p className="text-sm tracking-wide text-neutral-500 w-[250px]">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex items-center gap-6 mt-5">
            <img className=" cursor-pointer" src={gitHub} alt="" />
            <img className=" cursor-pointer" src={instagram} alt="" />
            <img className=" cursor-pointer" src={youtube} alt="" />
          </div>
        </div>

        <div className=" flex flex-col items-start gap-10 ">
          <span className="text-neutral-400 font-medium text-xs cursor-pointer">
            SUPPORT
          </span>
          <ul className="flex flex-col gap-4">
            <li className="text-neutral-600 font-medium cursor-pointer ">
              FAQ
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Terms of use
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className=" flex flex-col items-start gap-10 ">
          <span className="text-neutral-400 font-medium text-xs cursor-pointer">
            COMPANY
          </span>
          <ul className="flex flex-col gap-4">
            <li className="text-neutral-600 font-medium cursor-pointer">
              About us
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Contact
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Careers
            </li>
          </ul>
        </div>

        <div className=" flex flex-col items-start gap-10 ">
          <span className="text-neutral-400 font-medium text-xs cursor-pointer">
            SHOP
          </span>
          <ul className="flex flex-col gap-4">
            <li className="text-neutral-600 font-medium cursor-pointer">
              My Account
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Checkout
            </li>
            <li className="text-neutral-600 font-medium cursor-pointer">
              Cart
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 ">
          <span className="text-neutral-400 font-medium">
            ACCEPTED PAYMENTS
          </span>
          <div className="flex items-center gap-6">
            <img className="cursor-pointer" src={masterCard} alt="" />
            <img className="cursor-pointer" src={amex} alt="" />
            <img className="cursor-pointer" src={visa} alt="" />
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-center border-t">
        <span className="text-neutral-500 font-normal py-[27px]">
          © 2023 DevCut. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
