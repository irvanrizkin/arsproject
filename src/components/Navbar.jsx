import { useEffect, useState } from "react";
import { navItems } from "../constant";
import logo from "../assets/logo.png";
import logoWarna from "../assets/logoWarna.png";
export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
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
    <header className="w-full fixed top-0 left-0 right-0 text-white bg-white md:bg-transparent z-20">
      <nav
        className={`py-10 ${
          isSticky
            ? "sticky top-0 left-0 py-2 right-0 border-b text-black bg-white duration-300"
            : ""
        }`}
      >
        <div className="w-full flex justify-evenly py-2 pr-[9.5rem] z-10">
          <div className="ml-[6rem]">
            {isSticky ? (
              <img src={logoWarna} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
            {/* <img src={logo} alt="logo" /> */}
          </div>
          <ul className="flex space-x-8 py-4 ml-[25rem]">
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={`#${item.path}`}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-[#f98801] text-white px-4 py-3 mt-1 ml-5">
              Hubungi Sekarang
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
