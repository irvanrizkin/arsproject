import { navItems } from "../../constant";
import logoWarna from "../../assets/logoWarna.png";
import { IoMdClose, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HamburgerMenu = ({ navbar, setNavbar }) => {
  const navigate = useNavigate();

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  return (
    <div
      className={`absolute top-0 right-0 transform transition-transform duration-500 ease-in-out ${
        navbar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-white flex flex-col text-black right-0 px-5 py-8 h-[100vh] ">
        <div className="flex justify-between w-[20rem] ">
          <img src={logoWarna} alt="logo" />
          <button onClick={() => setNavbar(!navbar)}>
            <IoMdClose size={50} />
          </button>
        </div>
        <div className="flex flex-col mt-10 space-y-8 ">
          {navItems.map((item) => (
            <div key={item.path} className="border-b-2 py-3 ">
              {item.name === "Produk" ? (
                <div className="relative">
                  <button onClick={toggleProductsDropdown}>
                    {item.name}
                    {showProductsDropdown ? (
                      <IoIosArrowUp className="inline ml-[16rem]" />
                    ) : (
                      <IoIosArrowDown className="inline ml-[16rem]" />
                    )}
                  </button>
                  {showProductsDropdown && (
                    <div className="bg-white z-10 py-2 mt-2 space-y-4">
                      <button
                        className="block py-2 hover:bg-gray-200 w-full text-left border-b-2"
                        onClick={() => {
                          navigate("/automotive");
                          setNavbar(!navbar);
                          setShowProductsDropdown(!showProductsDropdown);
                        }}
                      >
                        Automotive
                      </button>
                      <button
                        className="block py-2 hover:bg-gray-200 w-full text-left border-b-2"
                        onClick={() => {
                          navigate("/industrial");
                          setNavbar(!navbar);
                          setShowProductsDropdown(!showProductsDropdown);
                        }}
                      >
                        Industrial
                      </button>
                      <button
                        className="block py-2 hover:bg-gray-200 w-full text-left border-b-2"
                        onClick={() => {
                          navigate("/greases");
                          setNavbar(!navbar);
                          setShowProductsDropdown(!showProductsDropdown);
                        }}
                      >
                        Grease
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between">
                  <a href={`${item.path}`}>{item.name}</a>
                  <div>{item.icon}</div>
                </div>
              )}
            </div>
          ))}
          <div className="mt-2">
            <button className="bg-primary text-white px-8 pt-[13px] pb-[13px] w-full">
              Hubungi Sekarang
            </button>
          </div>
          <div className="text-primary pt-[4rem]">
            Copyrigth &copy; Anugerah Rapri Sejahterah 2024
          </div>
        </div>
      </div>
    </div>
  );
};
