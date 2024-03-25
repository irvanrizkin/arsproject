import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const GuideLines = () => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 200; // Ubah sesuai kebutuhan Anda
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
      <div className="mt-[6rem]">
        <div className="text-primary">Pedoman</div>
        <div className="text-2xl">Apa yang kami yakini</div>
      </div>
      <div
        className="relative overflow-hidden py-3"
        style={{ scrollBehavior: "smooth" }}
        ref={containerRef}
      >
        <div className="flex">
          {/* Card 1 */}
          <div className="bg-green-300 m-4" style={{ minWidth: "30rem" }}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p>Deskripsi Card 1</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-blue-300 m-4" style={{ minWidth: "30rem" }}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 2</h2>
              <p>Deskripsi Card 2</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-yellow-300 m-4" style={{ minWidth: "30rem" }}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 3</h2>
              <p>Deskripsi Card 3</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-red-300 m-4" style={{ minWidth: "30rem" }}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 4</h2>
              <p>Deskripsi Card 4</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-purple-300 m-4" style={{ minWidth: "30rem" }}>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 5</h2>
              <p>Deskripsi Card 5</p>
            </div>
          </div>
          {/* Tambahkan card lainnya sesuai kebutuhan */}
        </div>
      </div>
      <div className="flex absolute gap-5 mt-4 ml-[4rem]">
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
    </>
  );
};

// import { useEffect, useState } from "react";
// import { carouselBanners } from "../constant";

// export const PageProduct = () => {
//   const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBannerIndex((prevIndex) =>
//         prevIndex === carouselBanners.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(-${currentBannerIndex * 33.33}%)`,
//             width: `${carouselBanners.length * 100}%`,
//           }}
//         >
//           {carouselBanners.map((banner, index) => (
//             <div
//               key={index}
//               className="w-full h-[40rem] bg-cover bg-no-repeat relative"
//               style={{ backgroundImage: `url(${banner.img})` }}
//             >
//               <div
//                 className="absolute w-full h-full pt-[15rem] px-4 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center"
//                 style={{ backdropFilter: "brightness(90%)" }}
//               >
//                 <div className="px-2">
//                   <div className="text-white text-[2.5rem] desktop:text-[3rem] font-bold">
//                     {banner.title}
//                   </div>
//                   <div className="text-white mt-[1rem] text-md">
//                     {banner.desc}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>Product</div>
//       </div>
//     </>
//   );
// };
