import bgAbout from "../assets/backAbout.svg";
import { About } from "../components/AboutPages/About";
import { CopyRights } from "../components/Footer/CopyRights";
import { Footer } from "../components/Footer/Footer";
import { OurGroup } from "../components/AboutPages/OurGroup";
import { Wrapper } from "../components/Wrapper";
import { VisiMisi } from "../components/AboutPages/VisiMisi";
export const PageAbout = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgAbout})` }}
        className="w-full h-[25rem] px-5 relative"
      >
        <div className="w-[full] relative">
          <div className="absolute bg-white w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl">
            <div className="text-primary">Tentang Kami</div>
            <div className="text-4xl font-semibold">
              PT. Anugerah Rapri Sejahtera
            </div>
            <div className="text-greys mt-4">
              Perusahaan yang bergerak dibidang distributor Pelumas, Suku Cadang
              Alat Transportasi Laut dan Darat, Alat Mekanikal, Chemical, dan
              BBM
            </div>
          </div>
        </div>
      </div>
      <About />
      <VisiMisi />
      <OurGroup />
      <div className="mt-[-8rem]">
        <Footer />
      </div>
      <CopyRights />
    </div>
  );
};
