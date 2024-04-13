import { useRef, useState } from "react";
import {
  automotiveProducts,
  marineOil,
  dieselOil,
  gasEngineOil,
  transmissionGearOil,
} from "../../constant";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

export const AutomotiveList = () => {
  const containerRef = useRef(null);
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
          <div className="bg-white w-[40rem] relative py-2 px-3">
            <div className="flex bg-green-300 justify-between">
              <div>Nama</div>
              <div>
                <button className="m-4 text-white z-10">
                  <IoIosClose
                    size={40}
                    onClick={closeImagePopup}
                    className="text-primary rounded-full border-solid border-2 border-primary"
                  />
                </button>
              </div>
            </div>
            <div
              className="relative overflow-hidden py-3 "
              style={{ scrollBehavior: "smooth" }}
              ref={containerRef}
            >
              <div className="flex items-center justify-center">
                {currentList.map((item, index) => (
                  <div
                    key={index}
                    style={{ minWidth: "rem" }}
                    className={`flex items-start justify-center ${
                      selectedImageIndex === index
                        ? "bg-yellow-200"
                        : "bg-gray-200"
                    }`}
                  >
                    <div className="px-5 py-5">
                      <img src={item.img} alt="popupImage" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-200 flex justify-between">
              <div>Type</div>
              <div>
                <button
                  className="m-2 text-white z-10 border-2 px-1 py-1 border-primary"
                  onClick={() => handlePopupScroll("backward")}
                >
                  <IoIosArrowBack size={40} className="text-primary" />
                </button>
                <button
                  className="m-2 text-white z-10 border-2 px-1 py-1 border-primary"
                  onClick={() => handlePopupScroll("forward")}
                >
                  <IoIosArrowForward size={40} className="text-primary" />
                </button>
              </div>
            </div>
            <div>MU</div>
            <div className="text-greys">
              Selamat datang di PT. Anugerah Rapri Sejahtera, sebuah perusahaan
              yang berkomitmen dalam menyediakan solusi terbaik untuk kebutuhan
              industri perminyakan, transportasi laut, dan sektor-sektor terkait
              lainnya. Sebagai distributor terkemuka, kami menyediakan beragam
              produk berkualitas tinggi
            </div>
          </div>
        </div>
      )}
    </>
  );
};
