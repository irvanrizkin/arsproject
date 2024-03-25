import seaMining from "../../assets/seaFactory.svg";
import listIcon from "../../assets/listIcon.svg";
export const Quotes = () => {
  return (
    <div className="relative mt-[65rem] desktop:mt-[20rem] widescreen:mt-[25rem] flex flex-col desktop:flex-row py-4 desktop:py-0">
      <div className="hidden desktop:block desktop:w-[25rem] widescreen:w-[40rem] relative font-bold">
        <div className="h-[12rem] absolute bottom-0 py-8 text-white bg-primary w-full flex flex-col pl-[5rem] desktop:pl-[3rem] widescreen:pl-[6rem] justify-end">
          <div className="text-white text-5xl desktop:text-6xl">5</div>
          <div className="text-xl mt-3 desktop:text-sm widescreen:text-xl">
            Tahun Energi
          </div>
          <div className="text-xl desktop:text-sm widescreen:text-xl">
            Pengalaman Industri
          </div>
        </div>
      </div>
      <div className="bg-[#061d29] py-5 relative px-5 widescreen:px-10 widescreen:py-2 widescreen:pb-10 text-white">
        <div className="text-primary widescreen:font-bold widescreen:text-xl">
          Quotes
        </div>
        <div className="text-white text-xl font-bold widescreen:mt-5 widescreen:text-4xl">
          Core Value
        </div>
        <div className=" mt-8 space-y-8  ">
          <ul className="text-white desktop:mt-8 desktop:font-bold  desktop:pr-[20rem] widescreen:pr-[28rem]">
            <li className="text-xl flex desktop:text-sm widescreen:text-xl">
              <div className="mr-5 desktop:mr-2 mt-1 widescreen:mr-6">
                <img
                  src={listIcon}
                  alt="list icon"
                  className="w-5 h-5 desktop:w-3 widescreen:w-6 widescreen:h-6"
                />
              </div>
              Integritas dan Transparansi
            </li>
            <ol className="pl-10 desktop:pl-5  widescreen:pl-12">
              <li className="text-xl mt-2 text-gray-400 desktop:text-sm widescreen:text-xl">
                Beroperasi dengan Integritas dan Transparansi yang tak
                tergoyahkan, membangun kepercayaan dalam setiap aspek bisnis
                kami
              </li>
            </ol>
          </ul>
          <ul className="text-white desktop:mt-8 desktop:font-bold  desktop:pr-[20rem] widescreen:pr-[28rem]">
            <li className="text-xl flex desktop:text-sm widescreen:text-xl">
              <div className="mr-5 desktop:mr-2 mt-1 widescreen:mr-6">
                <img
                  src={listIcon}
                  alt="list icon"
                  className="w-5 h-5 desktop:w-3 widescreen:w-6 widescreen:h-6"
                />
              </div>
              Pendekatan yang Berpusat pada Pelanggan
            </li>
            <ol className="pl-10 desktop:pl-5  widescreen:pl-12">
              <li className="text-xl mt-2 text-gray-400 desktop:text-sm widescreen:text-xl">
                Didorong oleh pendekatan yang berpusat pada pelanggan,
                didedikasikan untuk memenuhi kebutuhan mereka yang kami layani
                dengan ketepatan dan kehati-hatian.
              </li>
            </ol>
          </ul>
          <ul className="text-white desktop:mt-8 desktop:font-bold  desktop:pr-[20rem] widescreen:pr-[28rem]">
            <li className="text-xl flex desktop:text-sm widescreen:text-xl">
              <div className="mr-5 desktop:mr-2 mt-1 widescreen:mr-6">
                <img
                  src={listIcon}
                  alt="list icon"
                  className="w-5 h-5 desktop:w-3 widescreen:w-6 widescreen:h-6"
                />
              </div>
              Kolaborasi dari Kemitraan
            </li>
            <ol className="pl-10 desktop:pl-5  widescreen:pl-12">
              <li className="text-xl mt-2 text-gray-400 desktop:text-sm widescreen:text-xl">
                Percaya pada kekuatan kolaborasi dan kemitraan untuk mendorong
                masa depan distribusi energi.
              </li>
            </ol>
          </ul>
        </div>
        <div
          className=" hidden desktop:flex justify-center desktop:absolute top-[-1rem] widescreen:top-[-4rem] desktop:right-[5rem] widescreen:right-[8rem] desktop:w-[15rem] desktop:h-[27.5rem] widescreen:w-[20rem] widescreen:h-[40rem] bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${seaMining})` }}
        ></div>
      </div>
      <div className=" flex justify-center desktop:hidden">
        <img src={seaMining} alt="sea" />
      </div>
      <div className="w-[15rem] h-[10rem] bg-primary desktop:hidden absolute bottom-[-2rem] right-0 py-8 px-5 text-white">
        <div className="text-white text-5xl">5</div>
        <div className="text-xl mt-3">Tahun Energi</div>
        <div className="text-xl">Pengalaman Industri</div>
      </div>
    </div>
  );
};
