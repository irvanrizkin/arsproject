import indicator from "../assets/indicator.png";
import solar from "../assets/solar.png";
import pipe from "../assets/pipe.png";
export const Service = () => {
  return (
    <div className="mt-[-5rem] bg-white rounded-xl w-full px-2 md:px-0 py-8 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-4 md:pr-[3rem] md:py-4  ">
        <div className="border-b-2 pb-8 md:border-b-0 md:pb-8 lg:pb-2 border-gray-100 lg:pr-[8.5rem] lg:px-6">
          <img src={indicator} alt="indicator" />
          <div className="text-xl hidden md:block font-bold mt-6 md:mt-4">
            Pelumas Masa Depan
          </div>
          <div className="text-xl font-bold mt-6 md:hidden">
            Peforma Masa Depan
          </div>
          <div className="mt-4 text-gray-400 text-md md:hidden">
            Formula khusus yang dirancang untuk mengoptimalkan kinerja mesin
          </div>
          <div className="mt-4 hidden md:block text-gray-400 md:w-[14rem]">
            Komitmen berkelanjutan untuk menyuplai oli yang mendukung efisiensi
            dan kelestarian
          </div>
        </div>
        <div className="md:border-l-2 border-b-2 pb-8 md:border-b-0 lg:pb-0 border-gray-100 lg:pr-[8.5rem] lg:px-10 mt-10 md:mt-0">
          <img src={solar} alt="solar" />
          <div className="text-xl hidden md:block font-bold mt-6">
            Perlindungan Total
          </div>
          <div className="text-xl font-bold mt-6 md:hidden">Ragam Produk</div>
          <div className="mt-4 md:hidden text-gray-400 text-md pr-6">
            Solusi lengkap untuk kebutuhan anda dari kualitas terbaik
          </div>
          <div className="mt-4 text-gray-400 hidden md:block md:w-[15rem]">
            Kepuasan Utama - Memberikan perlindungan total untuk mesin Anda,
            memastikan kepuasan dan ketenangan pikiran pelanggan
          </div>
        </div>
        <div className="md:border-l-2 lg:border-r-2 border-b-2 pb-8 md:border-b-0 lg:pb-0 border-gray-100 lg:pr-[8.5rem] lg:px-10 mt-10 md:mt-0">
          <img src={pipe} alt="pipe" />
          <div className="text-xl font-bold mt-6">Inovasi Berkelanjutan</div>
          <div className="mt-4 text-gray-400 text-md pr-5 md:text-md">
            Komitmen pada inovasi berkelanjutan untuk melindungi mesin dan
            planet kita.
          </div>
        </div>
      </div>
    </div>
  );
};
