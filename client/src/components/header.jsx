import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { FaLaptopMedical } from "react-icons/fa";

const Header = ({ data, setIsDarkMode, darkMode }) => {
  const { i18n, t } = useTranslation();
  const [isHover, setIsHover] = useState();

  const logo = useRef();
  const navs = useRef();
  const inpt = useRef();
  const imgCart = useRef();
  const imgAdmin = useRef();

  const tl = gsap.timeline({ defaults: { duration: 0.8 } });

  useEffect(() => {
    tl.fromTo(
      logo.current,
      { opacity: 0, x: -150, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5 }
    );

    tl.fromTo(
      navs.current.children,
      { opacity: 0, x: -20, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1, stagger: 0.5 },
      "<"
    );

    tl.fromTo(
      [inpt.current, imgCart.current, imgAdmin.current],
      { opacity: 0, x: 50, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1, stagger: 0.2 }, // Her bir öğe arasında 0.5 saniye fark
      "<"
    );
  }, []);

  const langs = ["az", "en"];
  const languages = langs.filter((item) => item != i18n.language);
  languages.unshift(i18n.language);

  return (
    <header className=" flex flex-col dark:bg-black">
      <nav className="flex justify-between items-center h-[84px] container mx-auto">
        <div className="flex items-center justify-between gap-10 xl:gap-24">
          <Link ref={logo} to={"/"} className="flex items-center gap-3">
            <img src={`http://localhost:1337${data.LogoImg.url}`} alt="" />
            <h1 className="text-xl font-semibold">{data.logo}</h1>
          </Link>

          <ul ref={navs} className="lg:flex hidden items-center gap-8">
            {data.Links.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="text-neutral-500 hover:text-neutral-700 transition-all duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-8 ">
          <div
            ref={inpt}
            className="hidden relative overflow-hidden md:block border border-neutral-100 rounded-md py-2"
          >
            <img
              src={`http://localhost:1337${data.searchIcon.url}`}
              className=" cursor-pointer absolute top=[50%] left-2 w-6 h-6"
              alt=""
            />
            <input
              className="outline-none text-sm pl-9"
              type="text"
              placeholder={data.inputPlaceholder}
            />
          </div>

          <div
            className=" relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img
              ref={imgCart}
              className=" cursor-pointer"
              src={`http://localhost:1337${data.basketIcon.url}`}
              alt=""
            />
            <div
              className={`absolute top-full right-0 shadow-lg transition-all duration-300 ease-in-out transform ${
                isHover
                  ? "opacity-100 "
                  : "opacity-0 scale-100 pointer-events-none duration-300"
              }`}
            >
              <Cart />
            </div>
          </div>

          <Link to="/login">
            <img
              ref={imgAdmin}
              src={`http://localhost:1337${data.userIcon.url}`}
              alt=""
            />
          </Link>

          <img
            className="sm:hidden"
            src={`http://localhost:1337${data.menuIcon.url}`}
            alt=""
          />
          <div
            className="cursor-pointer"
            onClick={() => {
              localStorage.setItem("isDarkMode", !darkMode);
              setIsDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <img
                className="w-5"
                src={`http://localhost:1337${data.LightModeIcon.url}`}
                alt=""
              />
            ) : (
              <img
                className="w-5"
                src={`http://localhost:1337${data.darkModeIcon.url}`}
                alt=""
              />
            )}
          </div>

          <select
            onChange={(e) => {
              changeLanguage(e.target.value);
              localStorage.setItem("lang", e.target.value);
            }}
          >
            {languages.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
