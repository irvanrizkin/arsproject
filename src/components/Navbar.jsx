import { navItems } from "../constant";
export const Navbar = () => {
  console.log(navItems);
  return (
    <div className="w-full flex justify-end py-10 pr-[9.5rem] z-10 absolute">
      <ul className="flex space-x-8 py-4 text-white">
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
  );
};
