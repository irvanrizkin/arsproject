import indicator from "../assets/indicator.png";
import solar from "../assets/solar.png";
import pipe from "../assets/pipe.png";
export const Service = () => {
  return (
    <div className="absolute mt-[-5rem] rounded-xl w-[80rem] h-[20rem] bg-white px-8 py-8 shadow-xl">
      <div className="flex justify-between">
        <div className="w-[32%] h-[15rem] border-r-2 border-gray-100 pr-6">
          <img src={indicator} alt="indicator" />
          <div className="text-xl font-bold mt-6">Pelumas Masa Depan</div>
          <div className="mt-4 text-gray-400">
            Komitmen berkelanjutan untuk menyuplai oli yang mendukung efisiensi
            dan kelestarian
          </div>
        </div>
        <div className="w-[32%] border-r-2 border-gray-100 pr-6">
          <img src={solar} alt="solar" />
          <div className="text-xl font-bold mt-6">Perlindungan Total</div>
          <div className="mt-4 text-gray-400">
            Kepuasan Utama - Memberikan perlindungan total untuk mesin Anda,
            memastikan kepuasan dan ketenangan pikiran pelanggan
          </div>
        </div>
        <div className="w-[32%] border-r-2 border-gray-100 pr-6">
          <img src={pipe} alt="pipe" />
          <div className="text-xl font-bold mt-6">Inovasi Berkelanjutan</div>
          <div className="mt-4 text-gray-400">
            Komitmen pada inovasi berkelanjutan untuk melindungi mesin dan
            planet kita
          </div>
        </div>
      </div>
    </div>
  );
};
