import { Service } from "./Services";
import eni from "../assets/eni.png";
import worker from "../assets/worker.png";

export const About = () => {
  return (
    <>
      <div className="w-full h-[20rem] relative flex justify-center ">
        <Service />
      </div>
      <div className="flex justify-center ">
        <div className=" ">
          <div className="flex">
            <img src={eni} alt="eni" />
          </div>
        </div>
        <div className="w-[34rem] mt-[8rem] ml-[10rem] ">
          <div className="text-[#f98801] text-2xl">Tentang Kami</div>
          <div className="text-5xl mt-6 font-bold">Masa Depan Kami</div>
          <div className="text-gray-400 mt-10 text-xl text-justify">
            Kami adalah perusahaan energi global yang digerakkan oleh teknologi.
            Kami secara aktif mendukung transisi energi yang adil secara sosial
            dengan menciptakan nilai jangka panjang.
          </div>
          <div className="flex mt-[6rem] ">
            <div className="mt-4">
              <img src={worker} alt="wroker" />
            </div>
            <div className="flex flex-col ml-10">
              <div className=" font-bold text-xl">Inovasi Transisi Energi</div>
              <div className="mt-2 w-[13rem] text-gray-400">
                Dengan komitmen terhadap presisi dan keunggulan
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
