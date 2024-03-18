import facto from "../assets/facto.png";
import indicatorLg from "../assets/indicatorLg.png";
import pipeLg from "../assets/pipeLg.png";
export const Portfolio = () => {
  return (
    <div className="w-full mt-2 px-4  lg:mt-[12rem] py-[8rem]">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-[#f98801] text-xl font-bold">Layanan kami</div>
        <div className="text-5xl font-bold mt-5">Portfolio Kami</div>
        <div className="text-xl text-gray-400 mt-6">
          Pilihan utama untuk Produk Pelumas, Suku Cadang, dan Peralatan
          Industri yang Handal
        </div>
        <div className="w-full rounded-xl flex flex-col lg:flex-row justify-evenly lg:space-x-3 py-10 mt-8 lg:px-[4rem]">
          <div className="lg:w-[24rem] shadow-xl rounded-xl px-8 py-10">
            <img src={facto} alt="facto" />
            <div className="text-xl font-bold mt-5">Sejak Tahun 2019</div>
            <div className="text-gray-400 mt-4 text-sm">
              Melayani Customer B2B hingga B2C
            </div>
          </div>
          <div className="lg:w-[24rem] shadow-xl rounded-xl px-8 py-10">
            <img src={indicatorLg} alt="indicator" />
            <div className="text-xl font-bold mt-5">Revinery</div>
            <div className="text-gray-400 mt-4 text-sm">
              ENI merupakan Revinery di gempol melalui PT. Alp Petro Industry
            </div>
          </div>
          <div className="lg:w-[24rem] shadow-xl rounded-xl px-8 py-10">
            <img src={pipeLg} alt="pipe" />
            <div className="text-xl font-bold mt-5">100+ Product</div>
            <div className="text-gray-400 mt-4 text-sm">
              Mempunyai produk untuk seluruh kebutuhan industri dan transportasi
              anda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
