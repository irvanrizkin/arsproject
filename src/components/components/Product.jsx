import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { listListProduct } from "../../constant";

import backProduct from "../../assets/backProduct.png";

export const Product = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // tambahkan ini
  const path = location.pathname;

  const handleProductClick = (name) => {
    if (name.toLowerCase() === "industrial") {
      navigate("/industrial");
    } else if (name.toLowerCase() === "automotive") {
      navigate("/automotive");
    } else if (name.toLowerCase() === "greases") {
      navigate("/greases");
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[35rem] relative flex justify-center text-white desktop:px-[5rem] widescreen:px-[14rem] "
      style={{ backgroundImage: `url(${backProduct})` }}
    >
      <div className=" w-full flex desktop:items-center items-start flex-col px-6 desktop:px-0">
        <div className="text-4xl desktop:text-5xl mt-[3rem] desktop:mt-[5rem] font-bold">
          Produk Kami
        </div>
        <div className="desktop:text-center text-left mt-5 desktop:mt-[4rem] text-gray-300 desktop:text-md widescreen:text-xl">
          Melalui kualitas produk kami dan dukungan teknis yang handal, kami
          bertujuan untuk membantu pelanggan kami mencapai efisiensi operasional
          maksimal, keandalan, dan keberhasilan jangka panjang
        </div>
      </div>
      <div className="absolute mt-[15rem] px-4 py-[2rem] desktop:px-[5rem]">
        <div className="w-full h-full flex flex-col desktop:flex-row justify-center desktop:space-x-4 desktop:mt-[7rem]">
          {listListProduct.map((info, index) => {
            if (
              (path === "/industrial" &&
                info.name.toLowerCase() === "industrial") ||
              (path === "/greases" && info.name.toLowerCase() === "greases") ||
              (path === "/automotive" &&
                info.name.toLowerCase() === "automotive")
            ) {
              return null;
            }

            return (
              <div
                key={index}
                className="desktop:w-[40%] bg-white border-b-[0.5rem] hover:border-[#f98801] hover:cursor-pointer border-white ease-in-out duration-500 shadow-xl overflow-hidden flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleProductClick(info.name)}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={info.img}
                    alt="barrelEni"
                    className={`${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    } hover:scale-110 ease-in-out duration-500`}
                  />
                </div>
                <div className="px-6 py-10 relative">
                  <div className="text-black font-bold text-2xl mt-3 py-2">
                    {info.name}
                  </div>
                  <div className="text-gray-400 mt-1 desktop:pr-6 desktop:text-[10px] widescreen:text-[16px]">
                    {info.desc}
                  </div>
                  <FaArrowRight
                    className={`text-[15.5px] ${
                      hoveredIndex === index ? "ml-5" : "text-5xl"
                    } text-[#f98801] ease-in-out duration-200 mt-3`}
                  />
                  <div
                    className={`absolute mt-[-9px] w-2 h-[2.5px] bg-[#f98801] ${
                      hoveredIndex === index ? "w-[1.5rem]" : ""
                    } ease-in-out duration-200`}
                  ></div>
                </div>
                <div className="w-full h-2 hover:bg-[#f98801]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
