import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import FilterSidebar from "../components/filterSidebar";
import close from "../assets/icons/global/X.svg";
import ChevronDown from "../assets/icons/global/Chevron Down.svg";
import productimg1 from "../assets/images/productimg1.svg";
import productimg2 from "../assets/images/productimg2.svg";
import productimg3 from "../assets/images/productimg3.svg";
import img1 from "../assets/images/bestSellerImg1.svg";
import img2 from "../assets/images/bestSellerImg2.svg";
import img3 from "../assets/images/bestSellerImg3.svg";
import img4 from "../assets/images/bestSellerImg4.svg";
import more from "../assets/icons/global/More.svg";
import ChevronLeft from "../assets/icons/global/Chevron Left.svg";
import { products } from "../data/productsListing";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
  const navigate = useNavigate();

  const prdocut = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col mb-24">
        <div className="bg-neutral-100 h-[64px] flex items-center mb-8">
          <div className=" container mx-auto flex gap-1">
            <span className="font-medium text-neutral-500">Ecommerce </span>
            <img className="text-black" src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900">Search</span>
          </div>
        </div>

        <div className="flex container ">
          <div className="">
            <FilterSidebar />
          </div>

          <div className=" flex flex-col gap-6 container">
            <div className=" flex flex-col gap-3">
              <h3 className="text-xs font-medium">Applied Filters:</h3>
              <div className="flex gap-3">
                <span className="border h-9 px-4 flex items-center gap-2 rounded-3xl text-xs font-medium">
                  Perfume
                  <img src={close} alt="" />
                </span>
                <span className="border h-9 px-4 flex items-center gap-2 rounded-3xl text-xs font-medium">
                  Perfume
                  <img src={close} alt="" />
                </span>
              </div>
            </div>

            <div className=" flex items-center justify-between">
              <p className="text-xs text-neutral-500 font-medium">
                Showing 1-9 of 36 results.
              </p>
              <div className="flex items-center">
                <span className="text-xs font-medium text-neutral-600">
                  Sort by
                </span>
                <img src={ChevronDown} alt="" />
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              {products.map((item, index) => (
                <div
                  onClick={()=>prdocut(item.id)}
                  key={index}
                  className="px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
                >
                  <img className="bg-neutral-100 rounded" src={item.img} />
                  <div className="flex flex-col gap-3 mt-4">
                    <h4 className="text-[14px] font-medium">{item.name}</h4>
                    <div className="flex items-center gap-7">
                      <div className="flex gap-4 items-center">
                        {item?.hasDiscount && (
                          <p className="text-gray-400 text-[14px] line-through tracking-wider">
                            {item.beforePrice}
                          </p>
                        )}
                        <p className="text-neutral-600 text-[16px] tracking-wide">
                          {item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <label
                          className="text-xs font-medium border py-1 px-4 rounded-2xl"
                          htmlFor=""
                        >
                          IN STOCK
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" flex items-center justify-center mt-10">
              <div className="border rounded flex items-center gap-5 h-11 px-3">
                <img src={ChevronLeft} alt="" />
                <span className="bg-neutral-100 py-1 px-4 font-medium rounded">
                  1
                </span>
                <span className="text-neutral-500 font-medium">2</span>
                <img src={more} alt="" />
                <span className="text-neutral-500 font-medium">23</span>
                <span className="text-neutral-500 font-medium">24</span>
                <img src={ChevronRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
