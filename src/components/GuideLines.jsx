import React, { useState } from "react";
import g1 from "../assets/backAbout.svg";
import g2 from "../assets/backContact.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const GuideLines = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = 200; // Ubah sesuai kebutuhan Anda
    if (direction === "forward") {
      setScrollPosition((prevPosition) => prevPosition + scrollAmount);
    } else {
      setScrollPosition((prevPosition) => prevPosition - scrollAmount);
    }
  };

  return (
    <>
      <div className="mt-[6rem]">
        <div className="text-primary">Pedoman</div>
        <div className="text-2xl">Apa yang kami yakini</div>
      </div>
      <div
        className="relative overflow-x-scroll py-3"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          className="flex"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <img
            src={g1}
            alt=""
            className="max-w-[18rem] h-[20rem] object-cover"
          />
          <img src={g2} alt="" />
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
      </div>
    </>
  );
};
