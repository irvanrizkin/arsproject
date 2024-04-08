import { useState } from "react";
import {
  automotiveProducts,
  marineOil,
  dieselOil,
  gasEngineOil,
  transmissionGearOil,
} from "../../constant";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

export const AutomotiveList = () => {
  const [selected, setSelected] = useState(automotiveProducts[0]);
  const [currentList, setCurrentList] = useState(marineOil);
  const [appear, setAppear] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleProductChange = (productType) => {
    switch (productType) {
      case "Marine Oil":
        setCurrentList(marineOil);
        break;
      case "Diesel Oil":
        setCurrentList(dieselOil);
        break;
      case "Gas Engine Oil":
        setCurrentList(gasEngineOil);
        break;
      case "Transmission & Gear Oil":
        setCurrentList(transmissionGearOil);
        break;
      default:
        break;
    }
    setSelected(productType);
  };

  const handleDetailClick = (index) => {
    setSelectedImageIndex(index);
    setAppear(true);
  };

  const handlePopupScroll = (direction) => {
    if (
      direction === "forward" &&
      selectedImageIndex < currentList.length - 1
    ) {
      setSelectedImageIndex((prev) => prev + 1);
    } else if (direction === "backward" && selectedImageIndex > 0) {
      setSelectedImageIndex((prev) => prev - 1);
    }
  };

  const closeImagePopup = () => {
    setAppear(false);
    setSelectedImageIndex(null);
  };

  return (
    <>
      <div className="mt-[5rem] px-5 desktop:px-[6rem] flex flex-col desktop:flex-row space-y-5">
        <div>
          <div className="tablet:hidden">
            <div className="text-primary">Automotive Product</div>
            <div className="text-3xl font-semibold">
              Terdepan dalam menyediakan Automotive
            </div>
          </div>
          <select
            id="cars"
            name="cars"
            className="border rounded-md w-full p-2 text-greys tablet:hidden"
            placeholder="Pilih Subjek Pesan"
            defaultValue="default"
            onChange={(e) => handleProductChange(e.target.value)}
          >
            {automotiveProducts.map((item, index) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>
        <div className="py-5  text-greys px-5 shadow-xl desktop:shadow-none desktop:border-r-4 desktop:border-primary desktop:w-[30%] desktop:h-[18rem] hidden desktop:block">
          {automotiveProducts.map((item, index) => (
            <div className="space-y-6" key={index}>
              <button
                className={`flex items-start p-4 hover:bg-primary hover:text-white rounded-xl w-full ${
                  selected === item.type ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleProductChange(item.type)}
              >
                <span>{item.type}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="desktop:w-[60%] px-5">
          <div className="hidden desktop:block">
            <div className="text-primary">Automotive Product</div>
            <div className="text-3xl font-semibold">
              Terdepan dalam menyediakan Automotive
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 desktop:grid-cols-4">
            {currentList.map((item, index) => (
              <div className="flex flex-col py-4 shadow-xl" key={index}>
                <img src={item.img} alt="automotiveproduct" />
                <div className="mt-3 px-3">
                  <div>{item.name}</div>
                  <button
                    className="text-primary"
                    onClick={() => handleDetailClick(index)}
                  >
                    Detail Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Product Popup */}
      {appear && selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="">
            <div>Nama</div>
            <div className="relative flex items-center justify-center h-[20rem] ">
              <button
                className="absolute left-[-6rem] m-4 text-white z-10 border-2 px-3 py-3 border-primary"
                onClick={() => handlePopupScroll("backward")}
              >
                <IoIosArrowBack size={40} className="text-primary" />
              </button>
              <div className="max-h-[80vh] max-w-[80vw] object-contain z-0 flex">
                {currentList.map((item, index) => (
                  <div
                    key={index}
                    className={`w-1/5 ${
                      selectedImageIndex === index
                        ? "bg-yellow-200"
                        : "bg-gray-200"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="popupImage"
                      className="w-full h-32 object-contain"
                    />
                  </div>
                ))}
              </div>
              <button
                className="absolute right-[-6rem] m-4 text-white z-10 border-2 px-3 py-3 border-primary"
                onClick={() => handlePopupScroll("forward")}
              >
                <IoIosArrowForward size={40} className="text-primary" />
              </button>
              <button className="absolute top-0 right-0 m-4 text-white z-10">
                <IoIosClose
                  size={40}
                  onClick={closeImagePopup}
                  className="text-primary rounded-full border-solid border-2 border-primary"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
