import React, { useRef, useState } from "react";
import { ourGallery } from "../constant";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export const Gallery = () => {
  const containerRef = useRef(null);
  const [appear, setAppear] = useState(false);

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
      <div className="mt-[15rem] px-5">
        <div className="flex flex-col items-center">
          <div className="text-primary desktop:text-2xl">Layanan Kami</div>
          <div className="text-2xl font-semibold desktop:text-5xl">
            Galeri Aktivitas
          </div>
        </div>
        {/* <div className="dekstop:flex desktop:flex-row">
          <div className="py-5 bg-yellow-100 desktop:w-[full] hidden desktop:flex desktop:flex-wrap desktop:flex-row justify-between">
            {ourGallery.map((item, index) => (
              <div key={index} className="bg-gray-200 shadow-xl ">
                <div className="px-5 py-10 ">
                  <div className="">
                    <img src={item.img} alt="itemListImage" className="mb-4 " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div
          className="relative  overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
          ref={containerRef}
        >
          <div className="flex">
            {ourGallery.map((item, index) => (
              <div
                key={index}
                className="m-5 min-w-[15rem] desktop:min-w-[40rem] cursor-pointer relative"
                onMouseEnter={() => setAppear(true)}
                onMouseLeave={() => setAppear(false)}
              >
                <div className="">
                  <img src={item.img} alt="guideListImage" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex absolute gap-5 mt-4 ml-[6rem] ">
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
