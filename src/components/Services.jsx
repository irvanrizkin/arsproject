import indicator from "../assets/indicator.png";
import solar from "../assets/solar.png";
import pipe from "../assets/pipe.png";
export const Service = () => {
  return (
    <div className="mt-[-5rem] bg-white rounded-xl w-full px-2  py-8 shadow-xl">
      <div className="flex flex-col desktop:flex-row justify-between px-4 ">
        <div className="border-b-2 desktop:border-b-0 tablet:mt-5 desktop:px-1 desktop:border-r-2 pb-8 border-gray-100  desktop:w-[50rem]">
          <img src={indicator} alt="indicator" />
          <div className="text-xl hidden tablet:block font-bold mt-6 tablet:text-[16px] widescreen:text-xl ">
            Pelumas Masa Depan
          </div>
          <div className="text-xl font-bold mt-6 tablet:hidden">
            Peforma Masa Depan
          </div>
          <div className="mt-4 text-gray-400 text-md tablet:hidden">
            Formula khusus yang dirancang untuk mengoptimalkan kinerja mesin
          </div>
          <div className="mt-4 hidden tablet:block text-gray-400 desktop:text-[14px] pr-[1rem] widescreen:pr-[130px] widescreen:text-md">
            Komitmen berkelanjutan untuk menyuplai oli yang mendukung efisiensi
            dan kelestarian
          </div>
        </div>
        <div className="border-b-2 lg:border-b-0 tablet:mt-5 desktop:border-r-2 desktop:px-6 pb-8 border-gray-100  desktop:w-[50rem]">
          <img src={solar} alt="solar" />
          <div className="text-xl hidden tablet:block font-bold mt-6 desktop:text-[16px] widescreen:text-xl">
            Perlindungan Total
          </div>
          <div className="text-xl font-bold mt-6 tablet:hidden">
            Ragam Produk
          </div>
          <div className="mt-4 tablet:hidden text-gray-400 text-md pr-6">
            Solusi lengkap untuk kebutuhan anda dari kualitas terbaik
          </div>
          <div className="mt-4 text-gray-400 hidden tablet:block desktop:text-[14px] pr-[1rem] widescreen:pr-[130px] widescreen:text-md">
            Kepuasan Utama - Memberikan perlindungan total untuk mesin Anda,
            memastikan kepuasan dan ketenangan pikiran pelanggan
          </div>
        </div>
        <div className="border-b-2 desktop:border-b-0 tablet:mt-5 desktop:px-6 pb-8 border-gray-100 desktop:border-r-2  desktop:w-[50rem]">
          <img src={pipe} alt="pipe" />
          <div className="text-xl font-bold mt-6 desktop:text-[16px] widescreen:text-xl">
            Inovasi Berkelanjutan
          </div>
          <div className="mt-4 text-gray-400 text-md pr-5 tablet:text-md desktop:text-[14px] widescreen:pr-[130px] widescreen:text-md">
            Komitmen pada inovasi berkelanjutan untuk melindungi mesin dan
            planet kita.
          </div>
        </div>
      </div>
    </div>
  );
};
