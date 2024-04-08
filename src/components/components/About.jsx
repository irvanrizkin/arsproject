import eni from "../../assets/eni.png";
import worker from "../../assets/worker.png";
import workerEni from "../../assets/miningWorker.svg";
import { Service } from "./Services";

export const About = () => {
  return (
    <>
      <div className="px-5 relative">
        <div className="w-full bg-white relative flex tablet:px-[3rem] desktop:px-[4rem]">
          <Service />
        </div>
        <div className="flex flex-col desktop:flex-row desktop:justify-center justify-center items-center">
          <div className="flex mt-[6rem] relative desktop:w-[50%] justify-center items-center">
            <div className="absolute h-[8rem] tablet:h-[19rem] widescreen:h-[16rem] tablet:ml-[-28rem] w-[8rem] tablet:w-[10rem] widescreen:w-[18rem] bg-primary ml-[-12rem] desktop:ml-[-18rem] widescreen:ml-[-16rem] tablet:mt-[-8.5rem] mt-[-9.5rem] -z-10 animate-bg"></div>
            <div className="tablet:hidden desktop:hidden animate-eni">
              <img src={workerEni} alt="eni" />
            </div>
            <div className="ml-3 hidden tablet:block desktop:block desktop:ml-10 animate-eni">
              <img src={eni} alt="eni" />
            </div>
            <div className="absolute h-[10rem] tablet:h-[15rem] w-[11rem] tablet:w-[20rem] bg-primary ml-[9rem] tablet:ml-[13rem] bottom-[-2rem] -z-10 animate-bg"></div>
            <div className="absolute hidden tablet:block bg-white bottom-[-0.5rem] left-[6.5rem] desktop:left-[1rem] widescreen:left-[8rem] tablet:left-[-0.5rem] shadow-xl px-12 py-8 animate-company">
              <div className="font-bold">PT. Anugerah Rapri Sejahtera</div>
              <div className="text-gray-400 mt-2">
                <div>Official ENI Distributor by PT.</div>
                <div>Gani Distribusi Lubrindo</div>
              </div>
            </div>
            <div className="absolute tablet:hidden w-[14rem] bg-white bottom-[-1rem] tablet:left-[11.5rem] left-[-2rem] shadow-xl px-5 py-4">
              <div className="">Official Eni Oil Distributor</div>
              <div className="text-gray-400 mt-2">
                <div>Licensed by PT. Gani</div>
                <div>Distribusi Lubrindo</div>
              </div>
            </div>
          </div>
          <div className="w-[full] desktop:w-[50%] tablet:px-[8rem] desktop:px-5 desktop:ml-10 mt-[5rem] py-5 ">
            <div className="text-primary text-xl">Tentang Kami</div>
            <div className="text-3xl font-bold tablet:mt-2 tablet:text-4xl desktop:text-3xl">
              Masa Depan Kami
            </div>
            <div className="text-gray-400 mt-10 tablet:mt-6 text-sm tablet:text-md pr-8 widescreen:text-xl desktop:pr-[6rem]">
              Kami adalah perusahaan energi global yang digerakkan oleh
              teknologi. Kami secara aktif mendukung transisi energi yang adil
              secara sosial dengan menciptakan nilai jangka panjang.
            </div>
            <div className="flex mt-[3rem] ">
              <div className="mt-4">
                <img src={worker} alt="wroker" />
              </div>
              <div className="flex flex-col mt-3 ml-4">
                <div className=" font-bold text-md">
                  Inovasi Transisi Energi
                </div>
                <div className="mt-1 w-[13rem] text-gray-400 text-sm">
                  Dengan komitmen terhadap presisi dan keunggulan
                </div>
              </div>
              <div className="flex flex-col mt-5 desktop:hidden">
                <div className="text-primary text-2xl">289+</div>
                <div>Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
