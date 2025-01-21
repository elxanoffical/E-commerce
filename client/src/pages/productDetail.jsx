import React, { useEffect, useState } from "react";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import {
  Link,
  NavLink,
  Outlet,
  ServerRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import share from "../assets/icons/global/Share.svg";
import star from "../assets/icons/global/star.svg";
import minus from "../assets/icons/global/Minus.svg";
import plus from "../assets/icons/global/Add.svg";
import heart from "../assets/icons/global/Heart.svg";
import more from "../assets/icons/global/More.svg";
import emptyStar from "../assets/icons/global/Empty Star.svg";
import ScrollToTop from "../hooks/useScrollToTop";
import { getData } from "../hooks/useFetch";
import PopularProducts from "../components/popularProducts";
import Loading from "../components/common/loading";
import Error from "../components/common/error";
import { useTranslation } from "react-i18next";
import ShareButton from "../components/shareButton";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import i18next from "i18next";

const ProductDetail = () => {
  const { documentId } = useParams();
  const initialFavorite = JSON.parse(localStorage.getItem("favorites").includes(documentId)
  );
  const [imgCounter, setImgCounter] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentSizesIndex, setCurrentSizesIndex] = useState(0);
  const [orderCount, setOrderCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const { i18n } = useTranslation();


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const toggleIsFavorite = (documentId) => {
    const favoriteString = localStorage.getItem("favorites");
    const favoritesArr = JSON.parse(favoriteString);
    let newFavoritesArr;
    if (favoritesArr.includes(documentId)) {
      newFavoritesArr = favoritesArr.filter((item) => item != documentId)
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
      favoritesArr.push(documentId);
      newFavoritesArr = favoritesArr;
    }
    localStorage.setItem("favorites", JSON.stringify(newFavoritesArr));
  };

  const productDetailPageQuery = `query($id: ID!){
      product(documentId: $id,locale:"${i18n.language}") {
    beforePrice
    category
    detail
    genderFor
    images {
      url
      }
      info
      name
      price
      reviews {
        author
        createdAt
        description
        documentId
        stars
     }
    }
    products (locale:"${i18n.language}"){
      documentId
      name
      price
      beforePrice
      images {
        url
      }
  }
 }`;

  const { data, error, loading } = getData(productDetailPageQuery, {
    id: documentId,
  });


  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { product, products } = data;


  let sumOfStar = product.reviews.reduce((acc, review) => {
    return acc + review.stars;
  }, 0);

  let reviewsStarsAverage = (sumOfStar / product.reviews.length).toFixed(2);

  return (
    <>
      <ScrollToTop />
      <div className="dark:bg-black">
        <div className="h-[28px] flex items-center py-4 mb-2 ">
          <div className=" container mx-auto flex gap-1">
            <button
              onClick={handleClick}
              className="font-medium text-neutral-500 dark:text-neutral-400"
            >
              Ecommerce
            </button>
            <img src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {product?.name}
            </span>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row gap-[120px] mb-32">
          <div className="w-[400] sm:w-[534px] bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-10 items-center py-6">
            <img
              className="h-[404px] "
              src={`http://localhost:1337${product?.images[imgCounter].url}`}
              alt=""
            />
            <div className="flex items-center gap-2">
              {product.images.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setImgCounter(index)}
                    className={`w-[10px] h-[10px] rounded-full ${
                      imgCounter === index ? "bg-black" : "bg-gray-400"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>

          <div className=" flex flex-col w-[440px] py-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold dark:text-neutral-100">{product?.name}</h2>
              <ShareButton title={product?.name} />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 py-[3px] px-4 rounded-2xl
              text-xs text-neutral-500 font-medium"
              >
                <img className="" src={star} alt="" />
                {reviewsStarsAverage} — {product.reviews.length} Reviews
              </span>
              <span className="border py-[6px] font-medium text-neutral-500 dark:text-neutral-100 px-4 rounded-2xl text-xs">
                IN STOCK
              </span>
            </div>

            <div className="flex gap-4 items-center mb-6">
              {product?.beforePrice && (
                <p className="text-gray-400 dark:text-neutral-400 text-[14px] line-through tracking-wider">
                  ${product?.beforePrice}
                </p>
              )}
              <p className="text-neutral-800 dark:text-neutral-100 font-medium text-[16px] tracking-wide">
                ${product?.price}
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <h3 className="text-[13px] dark:text-neutral-100 text-neutral-500 font-medium tracking-wider">
                AVAILABLE COLORS
              </h3>
              <div className="flex items-center gap-[10px]">
                {product.info.map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setOrderCount(0);
                        setCurrentSizesIndex(0);
                        setCurrentColorIndex(index);
                      }}
                      key={index}
                      className={`border w-7 h-7 ${
                        currentColorIndex == index
                          ? "border-neutral-900 dark:border-neutral-100"
                          : "border-neutral-200 dark:border-neutral-700"
                      }  rounded-full flex items-center justify-center
                      `}
                    >
                      <span
                        className={`w-5 h-5 bg-[#${item.color}] rounded-full`}
                      ></span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-[14px] font-medium dark:text-neutral-100 text-neutral-500">
                SELECT SIZE
              </h3>
              <div className="flex items-center gap-2">
                {product.info[currentColorIndex].sizes.map((item, index) => (
                  <button
                    onClick={() => {
                      if (item.count > 0) {
                        setOrderCount(0);
                        setCurrentSizesIndex(index);
                      }
                    }}
                    key={index}
                    className={`relative border w-10 h-10 text-xs font-medium rounded dark:text-neutral-100 ${
                      currentSizesIndex == index
                        ? "border-neutral-900"
                        : "border-neutral-200"
                    } ${
                      item.count === 0
                        ? "bg-neutral-200 dark:bg-neutral-800 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <h3 className="text-[14px] font-medium text-neutral-500 dark:text-neutral-100 tracking-wide">
                QUANTITIY
              </h3>
              <div className="flex items-center justify-around py-[10px] border-neutral-100 border rounded max-w-[164px] h-[50px]">
                <img
                  className="p-2 cursor-pointer hover:bg-neutral-100 transition rounded"
                  src={minus}
                  onClick={() => {
                    if (orderCount - 1 >= 1) {
                      setOrderCount(orderCount - 1);
                    }
                  }}
                />
                <span className="dark:text-neutral-100">{orderCount}</span>
                <img
                  className="p-2 cursor-pointer hover:bg-neutral-100 transition rounded"
                  src={plus}
                  onClick={() => {
                    if (
                      orderCount + 1 <=
                      product.info[currentColorIndex].sizes[currentSizesIndex]
                        .count
                    ) {
                      setOrderCount(orderCount + 1);
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <button
                  className="text-[14px] text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium bg-black py-3 px-[104px] tracking-wide
                rounded"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => toggleIsFavorite(documentId)}
                  className="border dark:border-none py-[10px] dark:bg-neutral-600 px-[10px] rounded"
                >
                  {isFavorite ? <FaHeart style={{fill: 'red'}}/> : <FaRegHeart />}
                </button>
              </div>
              <span className="font-medium text-[13px] text-neutral-500 dark:text-neutral-100">
                — FREE SHIPPING ON ORDERS $100+
              </span>
            </div>
          </div>
        </div>

        <div className=" container flex flex-col md:flex-row gap-8 mb-20">
          <div className=" flex flex-col gap-4 mt-20">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `flex gap-3 py-2 px-6 rounded-lg lg:w-60 dark:text-neutral-100
               ${
                 isActive
                   ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-600"
                   : "bg-white font-medium text-neutral-500 dark:bg-neutral-800"
               }`
              }
            >
              <img src={more} alt="" />
              Details
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `flex gap-3 py-2 px-6 rounded-lg lg:w-60 dark:text-neutral-100 ${
                  isActive
                    ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-600"
                    : "bg-white font-medium text-neutral-500 dark:bg-neutral-800"
                }`
              }
            >
              <img src={emptyStar} alt="" />
              Reviews
            </NavLink>
          </div>
          <Outlet
            context={{
              detail: product.detail,
              reviews: product.reviews,
              reviewsStarsAverage,
            }}
          />
        </div>

        <PopularProducts
          title="Shop Now"
          subTitle="Best Selling"
          textAlign="start"
          products={products}
        />
      </div>
    </>
  );
};

export default ProductDetail;
