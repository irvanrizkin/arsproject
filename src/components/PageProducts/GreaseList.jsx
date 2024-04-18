import { useEffect, useRef, useState } from "react";
import {
  greaseProduct,
  multiPurposeGrease,
  specialityGrease,
} from "../../constant";
import { PopupDetails } from "../components/PopupDetails";

export const GreaseList = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(greaseProduct[0]);
  const [currentList, setCurrentList] = useState(multiPurposeGrease);
  const [appear, setAppear] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [carouselOffset, setCarouselOffset] = useState(0);

  useEffect(() => {
    if (appear && selectedImageIndex !== null) {
      const offset = selectedImageIndex - 2;
      if (offset >= 0) {
        setCarouselOffset(offset);
      } else {
        setCarouselOffset(currentList.length + offset);
      }
    }
  }, [appear, selectedImageIndex, currentList.length]);
  const handleProductChange = (productType) => {
    if (productType === "Multipurpose Grease") {
      setCurrentList(multiPurposeGrease);
    } else if (productType === "Speciality Grease") {
      setCurrentList(specialityGrease);
    }
    setSelected(productType);
  };
  const handleDetailClick = (index) => {
    setSelectedImageIndex(index);
    setAppear(true);
  };
  const handlePopupScroll = (direction) => {
    if (direction === "forward") {
      setSelectedImageIndex((prev) => (prev + 1) % currentList.length);
    } else if (direction === "backward") {
      setSelectedImageIndex((prev) =>
        prev === 0 ? currentList.length - 1 : prev - 1
      );
    }
  };
  const closeImagePopup = () => {
    setAppear(false);
    setSelectedImageIndex(null);
    setCarouselOffset(0);
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
            {greaseProduct.map((item, index) => (
              <option
                key={index}
                value={item.type}
                onChange={(e) => handleProductChange(e.target.value)}
              >
                {item.type}
              </option>
            ))}
          </select>
        </div>
        <div className="py-5  text-greys px-5 shadow-xl desktop:shadow-none desktop:border-r-4 desktop:border-primary desktop:w-[30%] desktop:h-[18rem] hidden desktop:block">
          {greaseProduct.map((item, index) => (
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
            <div className="text-primary">Industrial Product</div>
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
      <PopupDetails
        appear={appear}
        selected={selected}
        currentList={currentList}
        setSelected={setSelected}
        setSelectedImageIndex={setSelectedImageIndex}
        setAppear={setAppear}
        handlePopupScroll={handlePopupScroll}
        closeImagePopup={closeImagePopup}
        containerRef={containerRef}
        selectedImageIndex={selectedImageIndex}
        carouselOffset={carouselOffset}
      />
    </>
  );
};
