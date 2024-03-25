import { useState } from "react";
import { automotiveProducts, marineOil, dieselOil } from "../../constant";

export const AutomotiveList = () => {
  const [selected, setSelected] = useState(automotiveProducts[0]);
  const [currentList, setCurrentList] = useState(marineOil);

  const handleProductChange = (productType) => {
    if (productType === "Marine Oil") {
      setCurrentList(marineOil);
    } else if (productType === "Diesel Oil") {
      setCurrentList(dieselOil);
    }
    setSelected(productType);
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
          {automotiveProducts.map((item) => (
            <div className="space-y-6">
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
                  <button className="text-primary">Detail Product</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
