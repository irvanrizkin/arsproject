import backProduct from "../assets/backProduct.png";
import eni from "../assets/eniBarrel.svg";
import industrialEni from "../assets/industrialEni.svg";
import greaseEni from "../assets/greaseEni.svg";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
export const Product = () => {
  const [productHover, setHover] = useState(false);
  const [industrialHover, setIndustrial] = useState(false);
  const [greaseHover, setGrease] = useState(false);
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
          <div
            className="desktop:w-[40%] bg-white border-b-[0.5rem] hover:border-[#f98801] hover:cursor-pointer border-white ease-in-out duration-500 shadow-xl overflow-hidden flex flex-col"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex justify-center items-center">
              <img
                src={eni}
                alt="barrelEni"
                className={`${
                  productHover ? "scale-125" : "scale-100"
                } ease-in-out duration-500`}
              />
            </div>
            <div className="px-6 py-10 relative">
              <div className="text-black font-bold text-2xl mt-3 py-2">
                Outomotive
              </div>
              <div className="text-gray-400 mt-1 desktop:pr-6 desktop:text-[10px] widescreen:text-[16px]">
                Meningkatkan peforma mesin dan memperpanjang usia kendaraan anda
              </div>
              <FaArrowRight
                className={`text-[15.5px] ${
                  productHover ? "ml-5" : "text-5xl"
                } text-[#f98801] ease-in-out duration-200 mt-3`}
              />
              <div
                className={`absolute mt-[-9px] w-2 h-[2.5px] bg-[#f98801] ${
                  productHover ? "w-[1.5rem]" : ""
                } ease-in-out duration-200`}
              ></div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
          <div
            className="desktop:w-[40%] bg-white border-b-[0.5rem] hover:border-[#f98801] hover:cursor-pointer border-white ease-in-out duration-500 shadow-xl overflow-hidden flex flex-col"
            onMouseEnter={() => setIndustrial(true)}
            onMouseLeave={() => setIndustrial(false)}
          >
            <div className="flex justify-center items-center">
              <img
                src={industrialEni}
                alt="barrelEni"
                className={`${
                  industrialHover ? "scale-125" : "scale-100"
                } hover:scale-125 ease-in-out duration-500`}
              />
            </div>
            <div className="px-6 py-10">
              <div className="text-black font-bold text-2xl mt-3 py-2">
                Industrial
              </div>
              <div className="text-gray-400 mt-1 desktop:pr-6 desktop:text-[10px] widescreen:text-[16px]">
                Meningkatkan efisiensi dan produktivitas operasi anda
              </div>
              <FaArrowRight
                className={`text-[15.5px] ${
                  industrialHover ? "ml-5" : "text-5xl"
                } text-[#f98801] ease-in-out duration-200 mt-3`}
              />
              <div
                className={`absolute mt-[-9px] w-2 h-[2.5px] bg-[#f98801] ${
                  industrialHover ? "w-[1.5rem]" : ""
                } ease-in-out duration-200`}
              ></div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
          <div
            className="desktop:w-[40%] bg-white border-b-[0.5rem] hover:border-[#f98801] hover:cursor-pointer border-white ease-in-out duration-500 shadow-xl overflow-hidden flex flex-col"
            onMouseEnter={() => setGrease(true)}
            onMouseLeave={() => setGrease(false)}
          >
            <div className="flex justify-center items-center">
              <img
                src={greaseEni}
                alt="barrelEni"
                className={`${
                  greaseHover ? "scale-125" : "scale-100"
                } hover:scale-125 ease-in-out duration-500`}
              />
            </div>
            <div className="px-6 py-10">
              <div className="text-black font-bold text-2xl mt-3 py-2">
                Greases
              </div>
              <div className="text-gray-400 mt-1 desktop:pr-6 desktop:text-[10px] widescreen:text-[16px]">
                Melindungi komponen penting dari keausan dan korosi dengan
                berbagai jenis
              </div>
              <FaArrowRight
                className={`text-[15.5px] ${
                  greaseHover ? "ml-5" : "text-5xl"
                } text-[#f98801] ease-in-out duration-200 mt-3`}
              />
              <div
                className={`absolute mt-[-9px] w-2 h-[2.5px] bg-primary ${
                  greaseHover ? "w-[1.5rem]" : ""
                } ease-in-out duration-200`}
              ></div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
