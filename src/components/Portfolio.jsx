export const Portfolio = () => {
  return (
    <div className="w-full h-[20rem]  mt-[12rem] ">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-[#f98801] text-xl font-bold">Layanan kami</div>
        <div className="text-5xl font-bold mt-5">Portfolio Kami</div>
        <div className="text-xl text-gray-400 mt-6">
          Pilihan utama untuk Produk Pelumas, Suku Cadang, dan Peralatan
          Industri yang Handal
        </div>
        <div className="w-[75rem] rounded-xl flex justify-evenly py-10 mt-8 space-x-6">
          <div className="w-[24rem] h-[10rem] shadow-xl rounded-xl px-8 py-6">
            <div className="text-xl font-bold">Sejak Tahun 2019</div>
            <div className="text-gray-400 mt-4 text-sm">
              Melayani Customer B2B hingga B2C
            </div>
          </div>
          <div className="w-[24rem] h-[10rem] shadow-xl rounded-xl px-8 py-6">
            <div className="text-xl font-bold">Revinery</div>
            <div className="text-gray-400 mt-4 text-sm">
              ENI merupakan Revinery di gempol melalui PT. Alp Petro Industry
            </div>
          </div>
          <div className="w-[24rem] h-[10rem] shadow-xl rounded-xl px-8 py-6">
            <div className="text-xl font-bold">100+ Product</div>
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
