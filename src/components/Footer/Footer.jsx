import logoColor from "../../assets/logoWarna.png";
import mapsLocation from "../../assets/mapsLocation.svg";
export const Footer = () => {
  return (
    <div className="bg-[#fef2e6] mt-[12rem] py-10 px-4 flex desktop:flex-row flex-col desktop:px-[2rem] widescreen:px-[6rem] font-headLine">
      <div className=" flex flex-col desktop:w-[16rem] desktop:pr-[1rem] widescreen:pr-[7.5rem] desktop:mt-8 widescreen:mt-0 widescreen:w-[20rem]">
        <div>
          <img src={logoColor} alt="logo" />
        </div>
        <div className="mt-2 desktop:text-[14px] text-greys">
          Perusahaan yang bergerak dibidang distributor pelumas. Alat
          transportasi Laut dan Suku Cadangnya, Alat Mekanikal, Elektrikal, dan
          BBM
        </div>
      </div>
      <div className="desktop:w-[12rem] widescreen:w-[13rem]">
        <div className="mt-10 text-xl font-semibold widescreen:mt-0">
          Information
        </div>
        <div className="flex w-full  mt-6 desktop:flex-col ">
          <div className="w-[50%] desktop:w-full text-xl  desktop:text-[14px] widescreen:text-[16px]">
            <div>Home</div>
            <div className="mt-3 desktop:mt-1 widescreen:mt-2">
              Tentang Kami
            </div>
          </div>
          <div className="w-[50%] desktop:w-full text-xl desktop:text-[14px] widescreen:text-[16px]">
            <div className="desktop:mt-1 widescreen:mt-2">Produk</div>
            <div className="mt-3 desktop:mt-1 widescreen:mt-2">
              Hubungi Kami
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col tablet:flex-row desktop:flex-row  ">
        <div className=" widescreen:w-[23rem] desktop:w-[23rem]">
          <div className="space-y-5">
            <div className="mt-10 text-xl font-semibold widescreen:mt-0">
              Contact
            </div>
            <div className="mt-4 desktop:text-[14px]">Phone : 021-27847161</div>
            <div className="desktop:text-[14px]">
              <div>Email : officeanugerahraprisejahterah.com</div>
              <div>/ sales@anugerahraprisejahterah.com</div>
            </div>
            <div className="desktop:text-[14px]">
              <div>Location : QP Grand Office. Grand Sipil Tower</div>
              <div>Lantai 5 Unit i.1 Jl. S. Parman Kav 22-24,</div>
              <div>001/004, Palmerah, Jakarta Barat, 11480</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 desktop:mt-0">
          <img src={mapsLocation} alt="location" />
        </div>
      </div>
    </div>
  );
};
