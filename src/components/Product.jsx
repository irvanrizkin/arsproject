import backProduct from "../assets/backProduct.png";
import eni from "../assets/eniBarrel.svg";
import industrialEni from "../assets/industrialEni.svg";
import greaseEni from "../assets/greaseEni.svg";
import { useState } from "react";
export const Product = () => {
  const [productHover, setHover] = useState(false);
  const [industrialHover, setIndustrial] = useState(false);
  const [greaseHover, setGrease] = useState(false);
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[35rem] relative flex justify-center text-white px-[14rem] "
      style={{ backgroundImage: `url(${backProduct})` }}
    >
      <div className=" w-full flex items-center flex-col px-6">
        <div className=" text-5xl mt-[5rem] font-bold">Produk Kami</div>
        <div className="text-center mt-[4rem] text-gray-300 text-xl">
          Melalui kualitas produk kami dan dukungan teknis yang handal, kami
          bertujuan untuk membantu pelanggan kami mencapai efisiensi operasional
          maksimal, keandalan, dan keberhasilan jangka panjang
        </div>
      </div>
      <div className="absolute bottom-[-12rem] w-[80%]">
        <div className="w-full h-full flex justify-center space-x-6  ">
          <div
            className="w-[40rem] border-b-[0.5rem] hover:border-[#f98801] border-white ease-in-out duration-500 bg-white shadow-xl overflow-hidden flex flex-col"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex justify-center items-center">
              <img
                src={eni}
                alt="barrelEni"
                className={`${
                  productHover ? "scale-125" : "scale-100"
                } hover:scale-125 ease-in-out duration-500`}
              />
            </div>
            <div className="px-6 py-10">
              <div className="text-black font-bold text-2xl mt-3 py-2">
                Outomotive
              </div>
              <div className="text-gray-400 mt-1">
                Meningkatkan peforma mesin dan memperpanjang usia kendaraan anda
              </div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
          <div
            className="w-[40rem] border-b-[0.5rem] hover:border-[#f98801] border-white ease-in-out duration-500 bg-white shadow-xl overflow-hidden flex flex-col"
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
              <div className="text-gray-400 mt-1">
                Meningkatkan efisiensi dan produktivitas operasi anda
              </div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
          <div
            className="w-[40rem] border-b-[0.5rem] hover:border-[#f98801] border-white ease-in-out duration-500 bg-white shadow-xl overflow-hidden flex flex-col"
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
              <div className="text-gray-400 mt-1">
                Melindungi komponen penting dari keausan dan korosi dengan
                berbagai jenis
              </div>
            </div>
            <div className="w-full h-2 hover:bg-[#f98801]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
