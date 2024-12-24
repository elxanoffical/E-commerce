import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import FilterSidebar from "../components/filterSidebar";
import close from "../assets/icons/global/X.svg";

const ListingPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col border-2 border-black mb-24">
        <div className="bg-neutral-100 h-[64px] flex items-center mb-8">
          <div className=" container mx-auto flex gap-1">
            <span className="font-medium text-neutral-500">Ecommerce </span>
            <img className="text-black" src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900">Search</span>
          </div>
        </div>

        <div className="flex gap-4 container">
          <div className="">
            <FilterSidebar />
          </div>

          <div className="border border-black">
            <div className="border flex flex-col gap-3">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
