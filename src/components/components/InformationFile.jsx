import React, { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { infoProfile } from "../../constant";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

export const InformationFile = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScroll = (direction) => {
    const scrollAmount = 400; // Ubah sesuai kebutuhan Anda
    const container = containerRef.current;

    if (direction === "forward") {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className=" relative pb-[6rem] flex flex-col desktop:flex-row desktop:px-[4rem] widescreen:mt-[6rem]">
        <div className="mt-[6rem] px-5 desktop:w-[42rem] desktop:mt-[2.5rem] widescreen:w-[35rem] widescreen:px-[5rem]">
          <div className="text-primary widescreen:text-2xl">Laporan</div>
          <div className="text-2xl widescreen:text-4xl font-semibold widescreen:mt-2">
            Informasi Lainnya
          </div>
          <div className="text-greys mt-5 widescreen:mt-8">
            Kenali kami lebih dalam melalui profile perusahaan kami. Dapatkan
            seluruh list produk kami. Unduh sekarang untuk informasi lebih
            lanjut!
          </div>
        </div>
        <div
          className="relative overflow-hidden py-3"
          style={{ scrollBehavior: "smooth" }}
          ref={containerRef}
        >
          <div className="flex">
            {infoProfile.map((info, index) => (
              <div
                key={index}
                className="bg-white m-4 shadow-xl border-b-[0.5rem] hover:border-primary hover:cursor-pointer  ease-in-out duration-500 border-white"
                style={{ minWidth: "14rem" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="px-5 py-5 ">
                  <img
                    src={info.img}
                    alt="infoListImage"
                    className={`${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    } hover:scale-110 ease-in-out duration-500`}
                  />
                  <h2 className="text-xl font-semibold mt-4">{info.title}</h2>
                  <div className="flex mt-5 justify-between">
                    <button className="text-greys border-b-[1px] widescreen:mt-6">
                      Download File Pdf
                    </button>
                    <BsFileEarmarkArrowDown
                      size={30}
                      className="text-primary  widescreen:mt-4 "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex desktop:hidden absolute gap-5 ml-[6rem]  bottom-6">
          <button
            className="border-2 px-3 py-3 border-primary"
            onClick={() => handleScroll("backward")}
          >
            <IoIosArrowBack size={30} className="text-primary" />
          </button>
          <button
            className="border-2 px-3 py-3 border-primary"
            onClick={() => handleScroll("forward")}
          >
            <IoIosArrowForward size={30} className="text-primary" />
          </button>
        </div>
      </div>
    </>
  );
};
