import logoColor from "../../assets/logoWarna.png";
import mapsLocation from "../../assets/mapsLocation.svg";
export const Footer = () => {
  return (
    <div className="bg-[#fef2e6] mt-[12rem] py-10 px-4">
      <img src={logoColor} alt="logo" />
      <div className="mt-2">
        Perusahaan yang bergerak dibidang distributor pelumas. Alat transportasi
        Laut dan Suku Cadangnya, Alat Mekanikal, Elektrikal, dan BBM
      </div>
      <div className="mt-10 text-xl font-semibold">Information</div>
      <div className="flex w-full  mt-6">
        <div className="w-[50%] text-xl">
          <div>Home</div>
          <div className="mt-3">Tentang Kami</div>
        </div>
        <div className="w-[50%] text-xl">
          <div>Produk</div>
          <div className="mt-3">Hubungi Kami</div>
        </div>
      </div>
      <div className="mt-10 text-xl font-semibold">Contact</div>
      <div className="space-y-5">
        <div className="mt-4">Phone : 021-27847161</div>
        <div>
          <div>Email : officeanugerahraprisejahterah.com</div>
          <div>/ sales@anugerahraprisejahterah.com</div>
        </div>
        <div>
          <div>Location : QP Grand Office. Grand Sipil Tower</div>
          <div>Lantai 5 Unit i.1 Jl. S. Parman Kav 22-24,</div>
          <div>001/004, Palmerah, Jakarta Barat, 11480</div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <img src={mapsLocation} alt="location" />
        </div>
      </div>
    </div>
  );
};
