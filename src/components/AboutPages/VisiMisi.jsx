import workMining from "../../assets/workMining.svg";

export const VisiMisi = () => {
  return (
    <div>
      <div className="bg-[#061d29] mt-6 relative">
        <div className="text-white px-5 py-[5rem]  relative flex flex-col desktop:flex-row">
          <div className="">
            <img src={workMining} alt="minings" className="z-10 relative" />
            <div className="z-0 absolute top-0 left-0 bg-primary w-[11rem] h-[11rem]"></div>
            <div>
              <div className="relative z-10 text-4xl font-semibold">Visi </div>
              <div>
                Menjadi perusahaan terpercaya yang mampu memenuhi kebutuhan
                masyarakat akan produk
              </div>
            </div>
          </div>
          <div>
            <div className="text-4xl font-semibold">Misi</div>
          </div>
        </div>
      </div>
    </div>
  );
};
