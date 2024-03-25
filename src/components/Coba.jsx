import { useEffect, useState } from "react";
import { navItems } from "../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import logoWarna from "../assets/logoWarna.png";
import { HamburgerMenu } from "./HamburgerMenu";
import { useLocation } from "react-router-dom";
export const Coba = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsAboutActive(location.pathname === "/about");
    setIsHomeActive(location.pathname === "/");
    setIsContactActive(location.pathname === "/contact");
    setIsProductActive(location.pathname === "/product");
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <div className="w-full fixed top-0 right-0 text-white mobile:bg-transparent  z-20">
        <div
          className={`flex justify-between widescreen:px-[6rem] desktop:px-[3rem] px-8 ${
            isSticky
              ? "sticky top-0 left-0 right-0 py-1 border-b text-black bg-white duration-300"
              : "py-12"
          }`}
        >
          <div className={`py-2 ${navbar ? "hidden" : "block"}`}>
            {isSticky ? (
              <img src={logoWarna} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <nav className="hidden tablet:flex tablet:gap-3 tablet:text-sm desktop:gap-6 widescreen:gap-10 py-2">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="py-5 flex"
                onMouseEnter={() =>
                  item.name === "Produk" && setShowDropdown(true)
                } // Tampilkan dropdown saat hover
                onMouseLeave={() =>
                  item.name === "Produk" && setShowDropdown(false)
                }
              >
                <a
                  href={`${item.path}`}
                  className={`${
                    isAboutActive && item.path === "/about"
                      ? "text-primary"
                      : ""
                  }
                    ${
                      isHomeActive && item.path === "/" ? "text-primary" : ""
                    } ${
                    isContactActive && item.path === "/contact"
                      ? "text-primary"
                      : ""
                  } ${
                    isProductActive && item.path === "/product"
                      ? "text-primary"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
                <div className="ml-2 mt-1">{item.icon}</div>
                {item.name === "Produk" && showDropdown && (
                  <div
                    className={`absolute bg-transparant ${
                      isSticky
                        ? "top-[3rem] bg-white text-black"
                        : "top-[6rem] text-white"
                    } pl-3 pr-10 py-4 flex flex-col space-y-5 rounded-xl left-50% mt-1 z-10`}
                  >
                    <a href="/product">Automotive</a>
                    <a href="/product">Industrial</a>
                    <a href="/product">Grease</a>
                  </div>
                )}
              </div>
            ))}
            <div className="hidden tablet:block mt-2">
              <button className="bg-primary text-white px-8 pt-[13px] pb-[13px] ml-2">
                Hubungi Sekarang
              </button>
            </div>
          </nav>
          <div className="mt-5 text-2xl ml-4 tablet:hidden ">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? "" : <GiHamburgerMenu size={30} />}
            </button>
          </div>
        </div>
        <HamburgerMenu navbar={navbar} setNavbar={setNavbar} />
      </div>
    </div>
  );
};
