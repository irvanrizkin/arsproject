import { Service } from "./Services";
import eni from "../assets/eni.png";
import worker from "../assets/worker.png";
import workerEni from "../assets/miningWorker.svg";
import backEni from "../assets/backEni.svg";

export const About = () => {
  return (
    <>
      <div className="px-5 relative">
        <div className="w-full bg-white relative flex md:px-[3rem]">
          <Service />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex mt-[6rem] relative lg:w-[50%] justify-center items-center">
            <div className="absolute h-[10rem] md:h-[19rem] md:ml-[-28rem]  w-[5rem] md:w-[10rem] bg-[#f98801] ml-[-17rem] md:mt-[-8.5rem]  mt-[-9.5rem] -z-10"></div>
            <div className="md:hidden">
              <img src={workerEni} alt="eni" />
            </div>
            <div className="hidden md:block ml-3">
              <img src={eni} alt="eni" />
            </div>
            <div className="absolute h-[10rem] md:h-[15rem] w-[11rem] md:w-[20rem] bg-[#f98801] ml-[9rem] md:ml-[13rem] bottom-[-2rem] -z-10"></div>
            <div className="absolute hidden md:block  bg-white bottom-[-0.5rem] left-[6.5rem] shadow-xl px-12 py-8">
              <div className="font-bold">PT. Anugerah Rapri Sejahtera</div>
              <div className="text-gray-400 mt-2">
                <div>Official ENI Distributor by PT.</div>
                <div>Gani Distribusi Lubrindo</div>
              </div>
            </div>
            <div className="absolute md:hidden w-[14rem] bg-white bottom-[-1rem] md:left-[11.5rem] left-[-2rem] shadow-xl px-5 py-4">
              <div className="">Official Eni Oil Distributor</div>
              <div className="text-gray-400 mt-2">
                <div>Licensed by PT. Gani</div>
                <div>Distribusi Lubrindo</div>
              </div>
            </div>
          </div>
          <div className="w-[full] md:pr-[8rem] mt-[5rem] md:w-[50%] py-5">
            <div className="text-[#f98801] text-2xl">Tentang Kami</div>
            <div className="text-3xl font-bold md:mt-2 md:text-4xl">
              Masa Depan Kami
            </div>
            <div className="text-gray-400 mt-10 md:mt-6 text-sm md:text-xl pr-8">
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
              <div className="flex flex-col mt-5 md:hidden">
                <div className="text-[#f98801] text-2xl">289+</div>
                <div>Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
