import { navItems } from "../../constant";
import logoWarna from "../../assets/logoWarna.png";
import { IoMdClose } from "react-icons/io";
export const HamburgerMenu = ({ navbar, setNavbar }) => {
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
              <a href={`${item.path}`}>{item.name}</a>
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
