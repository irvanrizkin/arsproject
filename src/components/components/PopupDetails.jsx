import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PopupDetails = ({
  appear,
  selected,
  currentList,
  setSelected,
  setSelectedImageIndex,
  setAppear,
  handlePopupScroll,
  closeImagePopup,
  containerRef,
  selectedImageIndex,
  carouselOffset,
}) => {
  console.log("ini", selected);
  return (
    <>
      {appear && selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[48rem] relative py-2 px-3 z-50">
            <div className="flex justify-between">
              <div className="text-3xl pt-5 pl-2 font-headLine font-semibold">
                {selected.type || selected}
              </div>
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
              className="relative overflow-hidden py-3"
              style={{ scrollBehavior: "smooth" }}
              ref={containerRef}
            >
              <div className="flex items-center overflow-hidden justify-center">
                {currentList.map((item, index) => {
                  const adjustedIndex =
                    (index + carouselOffset) % currentList.length;
                  let positionClass = "flex-1";

                  if (currentList.length === 1) {
                    positionClass =
                      "flex-2 items-center justify-center bg-yellow-300 p-2 min-h-[12rem] min-w-[12rem] flex-grow";
                  } else if (currentList.length === 2) {
                    positionClass =
                      index === 0
                        ? "flex-2 items-center justify-end bg-yellow-300 p-2 min-h-[11.5rem] min-w-[14rem] mr-2 "
                        : "flex-2 items-center justify-start bg-[#f1f5f9] p-2 min-h-[11rem] min-w-[14rem] ml-2";
                  } else if (index === 2) {
                    positionClass =
                      "flex-2 items-center justify-center bg-yellow-300 p-2 min-h-[12rem] min-w-[14rem] flex-grow";
                  } else if (index < 2) {
                    positionClass = "flex-1 bg-[#f1f5f9] ml-2 mr-2 ";
                  } else if (index > 2 && index <= 4) {
                    positionClass = "flex-1 bg-[#f1f5f9] ml-2 mr-2";
                  } else {
                    positionClass = "flex-1 hidden";
                  }

                  return (
                    <div
                      key={index}
                      className={`h-full min-w-[9.5rem] min-h-[8rem] flex justify-center items-center space-x-2 gap-3  ${positionClass} transition-all duration-300 ease-in-out`}
                    >
                      <img
                        src={currentList[adjustedIndex].img}
                        alt="popupImage"
                        className="w-full h-full object-contain "
                        style={
                          index === 2
                            ? { maxHeight: "10rem", maxWidth: "100%" }
                            : { maxHeight: "5rem", maxWidth: "100%" }
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-headLine mt-5 mr-4">
                {selectedImageIndex + 1}/{currentList.length}
              </div>
              <div>
                <button
                  className="m-2 text-white z-10 border-2 px-1 py-1 border-primary"
                  onClick={() => {
                    handlePopupScroll("backward");
                    containerRef.current.scrollLeft -= 200; // adjust the value as needed
                  }}
                >
                  <IoIosArrowBack size={40} className="text-primary" />
                </button>
                <button
                  className="m-2 text-white z-10 border-2 px-1 py-1 border-primary"
                  onClick={() => {
                    handlePopupScroll("forward");
                    containerRef.current.scrollLeft += 200;
                  }}
                >
                  <IoIosArrowForward size={40} className="text-primary" />
                </button>
              </div>
            </div>
            <div className="font-bold text-2xl">
              {currentList[selectedImageIndex]?.name}
            </div>{" "}
            <div className="text-greys py-5">
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
