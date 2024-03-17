import indicator from "../assets/indicator.png";
import solar from "../assets/solar.png";
import pipe from "../assets/pipe.png";
export const Service = () => {
  return (
    <div className="mt-[-5rem] bg-white rounded-xl w-full px-2  py-8 shadow-xl">
      <div className="flex flex-col lg:flex-row justify-between px-4 ">
        <div className="border-b-2 lg:border-b-0 md:mt-5 lg:px-1 lg:border-r-2 pb-8 border-gray-100  lg:w-[50rem]">
          <img src={indicator} alt="indicator" />
          <div className="text-xl hidden md:block font-bold mt-6 lg:text-[16px] xl:text-xl ">
            Pelumas Masa Depan
          </div>
          <div className="text-xl font-bold mt-6 md:hidden">
            Peforma Masa Depan
          </div>
          <div className="mt-4 text-gray-400 text-md md:hidden">
            Formula khusus yang dirancang untuk mengoptimalkan kinerja mesin
          </div>
          <div className="mt-4 hidden md:block text-gray-400 lg:text-[14px] pr-[1rem] xl:pr-[130px] xl:text-md">
            Komitmen berkelanjutan untuk menyuplai oli yang mendukung efisiensi
            dan kelestarian
          </div>
        </div>
        <div className="border-b-2 lg:border-b-0 md:mt-5 lg:border-r-2 lg:px-6 pb-8 border-gray-100  lg:w-[50rem]">
          <img src={solar} alt="solar" />
          <div className="text-xl hidden md:block font-bold mt-6 lg:text-[16px] xl:text-xl">
            Perlindungan Total
          </div>
          <div className="text-xl font-bold mt-6 md:hidden">Ragam Produk</div>
          <div className="mt-4 md:hidden text-gray-400 text-md pr-6">
            Solusi lengkap untuk kebutuhan anda dari kualitas terbaik
          </div>
          <div className="mt-4 text-gray-400 hidden md:block lg:text-[14px] pr-[1rem] xl:pr-[130px] xl:text-md">
            Kepuasan Utama - Memberikan perlindungan total untuk mesin Anda,
            memastikan kepuasan dan ketenangan pikiran pelanggan
          </div>
        </div>
        <div className="border-b-2 lg:border-b-0 md:mt-5 lg:px-6 pb-8 border-gray-100 lg:border-r-2  lg:w-[50rem]">
          <img src={pipe} alt="pipe" />
          <div className="text-xl font-bold mt-6 lg:text-[16px] xl:text-xl">
            Inovasi Berkelanjutan
          </div>
          <div className="mt-4 text-gray-400 text-md pr-5 md:text-md lg:text-[14px] xl:pr-[130px] xl:text-md">
            Komitmen pada inovasi berkelanjutan untuk melindungi mesin dan
            planet kita.
          </div>
        </div>
      </div>
    </div>
  );
};
