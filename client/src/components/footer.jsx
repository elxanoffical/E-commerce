import React from "react";
import footerLogo from "../assets/images/footerLogo.svg";
import gitHub from "../assets/icons/social/Github.svg";
import instagram from "../assets/icons/social/Instagram.svg";
import youtube from "../assets/icons/social/Youtube.svg";
import masterCard from "../assets/icons/colored/Mastercard.svg";
import amex from "../assets/icons/colored/Amex.svg";
import visa from "../assets/icons/colored/Visa.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="bg-neutral-100 flex items-center justify-center ">

        <div className="container flex items-center justify-between  my-[59px]">
          <div className="flex flex-col gap-6">
            <h3 className="text-[26px] font-semibold">Join Our Newsletter</h3>
            <p className="text-neutral-500">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <input
              className="border py-[10px] px-4 rounded-md bg-transparent w-80
             outline-none text-neutral-300 font-medium"
              type="text"
              placeholder="Your email address"
            />
            <button className="text-white bg-black py-[10px] px-6 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container flex  justify-between my-20">
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-3">
              <img src={footerLogo} alt="" />
              <h3 className="text-xl font-extrabold text-neutral-900">
                Ecommerce
              </h3>
            </div>
            <p className="text-[14px] tracking-wide text-neutral-500">
              DevCut is a YouTube channel for
              <span className="block">practical project-based learning.</span>
            </p>
            <div className="flex items-center gap-6 mt-5">
              <img src={gitHub} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>

          <div className="flex items-center  gap-[72px]">
            <div className=" flex flex-col gap-10">
              <span className="text-neutral-400 font-medium text-xs">
                SUPPORT
              </span>
              <ul className="flex flex-col gap-4">
                <li className="text-neutral-600 font-medium">FAQ</li>
                <li className="text-neutral-600 font-medium">Terms of use</li>
                <li className="text-neutral-600 font-medium">Privacy Policy</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-10">
              <span className="text-neutral-400 font-medium text-xs">
                COMPANY
              </span>
              <ul className="flex flex-col gap-4">
                <li className="text-neutral-600 font-medium">About us</li>
                <li className="text-neutral-600 font-medium">Contact</li>
                <li className="text-neutral-600 font-medium">Careers</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-10">
              <span className="text-neutral-400 font-medium text-xs">SHOP</span>
              <ul className="flex flex-col gap-4">
                <li className="text-neutral-600 font-medium">My Account</li>
                <li className="text-neutral-600 font-medium">Checkout</li>
                <li className="text-neutral-600 font-medium">Cart</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <span className="text-neutral-400 font-medium">
              ACCEPTED PAYMENTS
            </span>
            <div className="flex items-center gap-6">
              <img src={masterCard} alt="" />
              <img src={amex} alt="" />
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-center border-t">
        <span className="text-neutral-500 font-normal py-[27px]">© 2023 DevCut. All rights reserved.</span>
      </div>

    </footer>
  );
};

export default Footer;
