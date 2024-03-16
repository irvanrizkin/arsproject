import { Service } from "./Services";
import eni from "../assets/eni.png";
import worker from "../assets/worker.png";
import workerEni from "../assets/miningWorker.svg";
import backEni from "../assets/backEni.svg";

export const About = () => {
  return (
    <>
      <div className="px-6 relative">
        <div className="w-full bg-white relative flex px-6 md:px-[8rem]">
          <Service />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex mt-[6rem] relative lg:w-[50%] justify-center items-center">
            <div className="absolute h-[10rem] w-[5rem] bg-[#f98801] ml-[-17rem]  mt-[-9.5rem] -z-10"></div>
            <img src={workerEni} alt="eni" />
            <div className="absolute h-[10rem] w-[11rem] bg-[#f98801] ml-[9rem] bottom-[-2rem] -z-10"></div>
            <div className="absolute w-[14rem] bg-white bottom-[-1rem] left-[-2rem] shadow-xl px-5 py-4">
              <div className="">Official Eni Oil Distributor</div>
              <div className="text-gray-400 mt-2">
                <div>Licensed by PT. Gani</div>
                <div>Distribusi Lubrindo</div>
              </div>
            </div>
          </div>
          <div className="w-[full] mt-[5rem] md:w-[50%]">
            <div className="text-[#f98801] text-2xl">Tentang Kami</div>
            <div className="text-3xl  font-bold">Masa Depan Kami</div>
            <div className="text-gray-400 mt-10 text-sm pr-8">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
