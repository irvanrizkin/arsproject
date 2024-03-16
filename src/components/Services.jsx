import indicator from "../assets/indicator.png";
import solar from "../assets/solar.png";
import pipe from "../assets/pipe.png";
export const Service = () => {
  return (
    <div className="mt-[-5rem] bg-white rounded-xl w-full px-2 py-8 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between px-8">
        <div className="lg:border-r-2 lg:border-gray-100 lg:pr-10 lg:px-6">
          {/* </div> */}
          {/* <div className="lg:w-[32%] h-[15rem] lg:border-r-2 lg:border-gray-100 px-5 lg:pr-6"> */}
          <img src={indicator} alt="indicator" />
          <div className="text-xl font-bold mt-6">Pelumas Masa Depan</div>
          <div className="mt-4 text-gray-400">
            Komitmen berkelanjutan untuk menyuplai oli yang mendukung efisiensi
            dan kelestarian
          </div>
        </div>
        <div className="lg:border-r-2 lg:border-gray-100 lg:pr-10 lg:px-6 mt-10 md:mt-0">
          {/* </div> */}
          {/* <div className="lg:w-[32%] h-[15rem] lg:border-r-2 lg:border-gray-100 px-5 lg:pr-6"> */}
          <img src={solar} alt="solar" />
          <div className="text-xl font-bold mt-6">Perlindungan Total</div>
          <div className="mt-4 text-gray-400">
            Kepuasan Utama - Memberikan perlindungan total untuk mesin Anda,
            memastikan kepuasan dan ketenangan pikiran pelanggan
          </div>
        </div>
        <div className="lg:border-r-2 lg:border-gray-100 lg:pr-10 lg:px-6 mt-10 md:mt-0">
          {/* </div> */}
          {/* <div className="lg:w-[32%] h-[15rem] lg:border-r-2 lg:border-gray-100 px-5 lg:pr-6"> */}
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
