import { useEffect, useState } from "react";
import { navItems } from "../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import logoWarna from "../assets/logoWarna.png";
export const Coba = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbar, setNavbar] = useState(false);
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
      <div className="w-full fixed top-0 right-0 text-white sm:bg-transparent  z-20">
        <div
          className={`flex justify-between xl:px-[6rem] lg:px-[3rem] px-8 ${
            isSticky
              ? "sticky top-0 left-0 right-0 py-1 border-b text-black bg-white duration-300"
              : "py-12"
          }`}
        >
          <div className="py-2">
            {isSticky ? (
              <img src={logoWarna} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <nav className="hidden md:flex lg:gap-6 xl:gap-10 py-2">
            {navItems.map((item) => (
              <div key={item.path} className="py-5">
                <a href={`#${item.path}`}>{item.name}</a>
              </div>
            ))}
            <div className="hidden md:block mt-2">
              <button className="bg-[#f98801] text-white px-8 pt-[13px] pb-[13px] ml-2">
                Hubungi Sekarang
              </button>
            </div>
          </nav>
          <div className="mt-4 text-2xl ml-4 md:hidden ">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
