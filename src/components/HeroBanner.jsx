import { useEffect, useState } from "react";
import { carouselBanners } from "../constant";

export const HeroBanner = () => {
  console.log(carouselBanners);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengubah indeks ke banner berikutnya
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === carouselBanners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Mengganti setiap 4 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        {carouselBanners.map((banner, index) => (
          <div
            className="flex bg-no-repeat w-full relative  h-[45rem] transition-transform ease-in-out duration-500"
            key={banner.id}
            style={{
              backgroundImage: `url(${banner.img})`,
              transform: `translateX(${-(index - currentBannerIndex) * 100}%)`,
              display: index === currentBannerIndex ? "block" : "none", // Menampilkan hanya gambar yang sesuai dengan indeks saat ini
              backgroundSize: "cover", // Menyesuaikan ukuran latar belakang dengan konten
              backgroundPosition: "center", // Menempatkan latar belakang di tengah
            }}
          >
            <div
              className="absolute w-full h-full pt-[15rem] px-4 bg-black bg-opacity-50 flex-col justify-center items-center text-center"
              style={{ backdropFilter: "brightness(80%)" }}
            >
              <div className=" px-2">
                <div className="text-white text-[2.5rem] desktop:text-[3rem] font-bold">
                  {banner.title}
                </div>
                <div className="text-white mt-[1rem] text-md">
                  {banner.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[50%] mt-[10rem] text-black text-4xl w-[100%] flex desktop:flex-col justify-center items-center">
        <div className="flex text-white">
          <button
            className={`flex text-2xl border-2 w-[50px] h-[50px] p-7 rounded-full ${
              currentBannerIndex === 0
                ? "border-primary text-primary"
                : "bg-gray-200 bg-opacity-50"
            } backdrop-blur-sm  items-center justify-center`}
            onClick={() => handleButtonClick(0)}
          >
            01
          </button>
          <div className="h-0.5 w-10 tablet:w-[6rem] desktop:w-[15rem] bg-gray-300 mt-7 backdrop-blur-sm"></div>
          <button
            className={`flex text-2xl border-2 w-[50px] p-7 h-[50px] rounded-full ${
              currentBannerIndex === 1
                ? "border-primary text-primary"
                : "bg-gray-200 bg-opacity-50"
            } backdrop-blur-sm  items-center justify-center`}
            onClick={() => handleButtonClick(1)}
          >
            02
          </button>
          <div className="h-0.5 w-10 tablet:w-[6rem] desktop:w-[15rem] mt-7 bg-gray-300 backdrop-blur-sm"></div>
          <button
            className={`flex text-2xl border-2 w-[50px] p-7 h-[50px] rounded-full ${
              currentBannerIndex === 2
                ? "border-primary text-primary"
                : "bg-gray-200 bg-opacity-50"
            } backdrop-blur-sm  items-center justify-center`}
            onClick={() => handleButtonClick(2)}
          >
            03
          </button>
        </div>
        <div className=" hidden desktop:flex text-white w-full px-10 items-center justify-evenly mt-4 ml-10 space-x-[2rem]">
          <div
            className={`text-sm ${
              currentBannerIndex === 0 ? "text-primary" : "text-white"
            }`}
          >
            Jaringan yang luas
          </div>
          <div
            className={`text-sm ${
              currentBannerIndex === 1 ? "text-primary" : "text-white"
            }`}
          >
            Integritas dan kepercayaan
          </div>
          <div
            className={`text-sm ${
              currentBannerIndex === 2 ? "text-primary" : "text-white"
            }`}
          >
            Kualitas Produk Unggul
          </div>
        </div>
      </div>
    </div>
  );
};
