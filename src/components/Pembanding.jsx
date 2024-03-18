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
