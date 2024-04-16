import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { guideList } from "../../constant";

export const Guide = () => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    console.log("Handle scroll called with direction:", direction);
    const scrollAmount = 400;
    const container = containerRef.current;

    if (container) {
      console.log("Container found:", container); // Log untuk debugging
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
    } else {
      console.log("Container not found");
    }
  };
  return (
    <>
      <>
        <div className="mt-[6rem] px-5 desktop:items-center desktop:flex desktop:flex-col">
          <div className="text-primary">Pedoman</div>
          <div className="text-2xl desktop:text-4xl font-semibold">
            Apa yang kami yakini
          </div>
        </div>
        <div className="dekstop:flex">
          <div className="px-[8rem] py-5 desktop:px-[5rem] desktop:w-[full]  hidden desktop:flex desktop:flex-wrap desktop:justify-center desktop:items-center">
            {guideList.map((guide, index) => (
              <div
                key={index}
                className="bg-gray-200 m-4 shadow-xl w-[16rem] h-[22rem] widescreen:w-[20rem] pr-[10px]"
              >
                <div className="px-5 py-10 ">
                  <div className=" h-[4rem]">
                    <img
                      src={guide.img}
                      alt="guideListImage"
                      className="mb-4 "
                    />
                  </div>
                  <h2 className="text-xl widescreen:text-3xl font-semibold mt-5  h-[4rem]">
                    {guide.title}
                  </h2>
                  <div className="pr-[13px]">
                    <p className="mt-4 widescreen:mt-6 text-md text-gray-400">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative overflow-hidden py-3 desktop:hidden"
          style={{ scrollBehavior: "smooth" }}
          ref={containerRef}
        >
          <div className="flex">
            {guideList.map((guide, index) => (
              <div
                key={index}
                className="bg-gray-200 m-4 shadow-xl"
                style={{ minWidth: "14rem" }}
              >
                <div className="px-5 py-5">
                  <img src={guide.img} alt="guideListImage" />
                  <h2 className="text-xl font-semibold mt-4">{guide.title}</h2>
                  <p className="mt-4 text-md text-gray-400">{guide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex absolute gap-5 mt-4 ml-[6rem] desktop:hidden">
          <button
            className="border-2 px-3 py-3 border-primary"
            onClick={() => {
              console.log("Backward button clicked");
              handleScroll("backward");
            }}
          >
            <IoIosArrowBack size={30} className="text-primary" />
          </button>
          <button
            className="border-2 px-3 py-3 border-primary"
            onClick={() => {
              console.log("Forward button clicked");
              handleScroll("forward");
            }}
          >
            <IoIosArrowForward size={30} className="text-primary" />
          </button>
        </div>
      </>
    </>
  );
};
