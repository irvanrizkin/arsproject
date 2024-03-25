import { useEffect } from "react";
import bgProduct from "../../assets/mining.png";
import { CopyRights } from "../Footer/CopyRights";
import { Footer } from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { productList } from "../../constant";

export const Automotive = () => {
  const location = useLocation();
  const currentProduct = productList.find(
    (product) => product.path === location.pathname
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on component mount
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${bgProduct})`,
          }}
          className="w-full h-[25rem] px-5 bg-cover widescreen:px-[10rem] relative z-0"
        >
          <div
            className="absolute w-full h-[25rem] left-0 top-0 bg-black bg-opacity-50 z-10"
            style={{ backdropFilter: "brightness(90%)" }}
          ></div>
          <div className="w-[full] relative ">
            <div className="absolute bg-white w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl z-20">
              <div className="flex gap-3">
                <div className="text-primary">Produk Kami</div>
                <div className="text-primary">{">"}</div>
                <div>{currentProduct ? currentProduct.name : ""}</div>
              </div>
              <div className="text-4xl font-semibold">
                {currentProduct ? currentProduct.name : ""}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <CopyRights />
      </div>
    </>
  );
};
