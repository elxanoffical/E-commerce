import React from "react";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import FilterSidebar from "../components/filterSidebar";
import close from "../assets/icons/global/X.svg";
import ChevronDown from "../assets/icons/global/Chevron Down.svg";
import more from "../assets/icons/global/More.svg";
import ChevronLeft from "../assets/icons/global/Chevron Left.svg";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../hooks/useScrollToTop";
import { getData } from "../hooks/useFetch";


const ListingPage = () => {
  const navigate = useNavigate();

  const prdocut = (documentId) => {
    navigate(`/product/${documentId}`);
  };

  const { data, error, loading } = getData("products");


  const handleClick = () => {
    navigate('/')
  };

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col mb-24">
        <div className="bg-neutral-100 h-[64px] flex items-center mb-8">
          <div className=" container mx-auto flex gap-1">
            <button
              onClick={handleClick}
              className="font-medium text-neutral-500"
            >
              Ecommerce{" "}
            </button>
            <img className="text-black" src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900">Categories</span>
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
              {data?.map((item, index) => (
                <div
                  onClick={() => prdocut(item.documentId)}
                  key={index}
                  className="px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
                >
                  <img
                    className="bg-neutral-100 rounded"
                    src={`http://localhost:1337${item.img.url}`}
                  />
                  <div className="flex flex-col gap-3 mt-4">
                    <h4 className="text-[14px] font-medium">{item.name}</h4>
                    <div className="flex items-center gap-7">
                      <div className="flex gap-4 items-center">
                        {item?.beforePrice && (
                          <p className="text-gray-400 text-[14px] line-through tracking-wider">
                            ${item.beforePrice}
                          </p>
                        )}
                        <p className="text-neutral-600 text-[16px] tracking-wide">
                          ${item.price}
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
    </>
  );
};

export default ListingPage;
