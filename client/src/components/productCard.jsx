import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item)


  return (
    <Link to={`/products/${item.documentId}`}
    className="px-2 py-4 flex flex-col gap-4 shadow-lg hover:scale-105 transition-all duration-300 rounded-lg">
      <img
        className="bg-neutral-100 rounded h-[100%]"
        src={`http://localhost:1337${item?.images[0].url}`}
      />
      <div className="flex flex-col gap-3 mt-4">
        <h4 className="text-[14px] font-medium">{item?.name}</h4>
        <div className="flex items-center gap-7">
            
          <div className="flex items-center gap-4">
            <label
              className="text-xs font-medium border py-1 px-4 rounded-2xl"
              htmlFor=""
            >
              {item?.true ? "IN STOCK" : "OUT OF STOCK"}
            </label>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
