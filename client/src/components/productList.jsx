import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex items-center justify-center gap-6 mb-20">
        <button className="text-neutral-800 font-medium border px-4 py-1 rounded-2xl">
          Featured
        </button>
        <button className="text-neutral-500">Latest</button>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[168px]">
        {products.map((item, index) => (
          <div
            onClick={() => prdocut(item.id)}
            key={index}
            className="px-2 py-4 flex flex-col gap-4 shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
          >
            <img
              className="bg-neutral-100 rounded"
              src={`http://localhost:1337${item?.images[0].url}`}
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
                    {item?.true ? "IN STOCK" : "OUT OF STOCK"}
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
