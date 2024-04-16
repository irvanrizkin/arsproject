import React, { useRef, useState } from "react";
import { ourGallery } from "../../constant";
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from "react-icons/io";

export const Gallery = () => {
  const containerRef = useRef(null);
  const [appear, setAppear] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleScroll = (direction) => {
    console.log("Handle scroll called with direction:", direction);
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

  const openImagePopup = (index) => {
    setSelectedImageIndex(index);
    setAppear(true);
  };

  const closeImagePopup = () => {
    setAppear(false);
    setSelectedImageIndex(null);
  };

  const handlePopupScroll = (direction) => {
    if (selectedImageIndex === null) return;

    const scrollAmount = 400;
    const newIndex =
      direction === "forward" ? selectedImageIndex + 1 : selectedImageIndex - 1;

    if (newIndex >= 0 && newIndex < ourGallery.length) {
      setSelectedImageIndex(newIndex);
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
        <div
          className="relative overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
          ref={containerRef}
        >
          <div className="flex">
            {ourGallery.map((item, index) => (
              <div
                key={index}
                className="m-5 min-w-[15rem] desktop:min-w-[40rem] cursor-pointer relative"
                onClick={() => openImagePopup(index)}
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
      {/* Popup Gambar */}
      {appear && selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-[-6rem] m-4 text-white z-10 border-2 px-3 py-3 border-primary"
              onClick={() => handlePopupScroll("backward")}
            >
              <IoIosArrowBack size={40} className="text-primary " />
            </button>
            <img
              src={ourGallery[selectedImageIndex].img}
              alt="popupImage"
              className="max-h-[80vh] max-w-[80vw] object-contain z-0"
            />
            <button
              className="absolute right-[-6rem] m-4 text-white z-10 border-2 px-3 py-3 border-primary"
              onClick={() => handlePopupScroll("forward")}
            >
              <IoIosArrowForward size={40} className="text-primary" />
            </button>
            <button
              className="absolute top-0 right-0 m-4 text-white z-10"
              onClick={closeImagePopup}
            >
              <IoIosClose size={40} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
