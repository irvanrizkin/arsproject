import dumpTruck from "../assets/dumptruck.svg";
import ceoPic from "../assets/ceoPic.svg";
export const Notes = () => {
  return (
    <>
      <div className="bg-[#fef2e6] desktop:py-[5rem]">
        <div
          className="bg-cover widescreen:bg-contain bg-no-repeat w-full px-5 h-[35rem] relative flex justify-center text-white desktop:px-[5rem] widescreen:px-[14rem] "
          style={{ backgroundImage: `url(${dumpTruck})` }}
        >
          <div className="absolute px-4 bottom-[-10rem] desktop:px-0 desktop:top-[-3rem] desktop:right-0 flex flex-col desktop:w-[35rem] widescreen:w-[59rem] ">
            <div className="bg-white text-black px-6 desktop:px-[4rem] rounded-xl py-5 space-y-5 desktop:h-[42rem] widescreen:px-[8rem] widescreen:py-[5rem] ">
              <div className="border-b-2 pb-10 text-2xl desktop:font-semibold widescreen:text-4xl">
                Pertambangan adalah industri untuk hari ini dan besok. Disini,
                kami sudah menyediakan bahan dan pekerjaan yang penting untuk
                masa depan dan kami melihat peluang yang jelas untuk menggunakan
                kekuatan kami untuk terus bertumbuh nilai bagi para pemegang
                saham. Saya sangat optimis
              </div>
              <div className="flex space-x-6">
                <div className="desktop:mt-[5rem]">
                  <img src={ceoPic} alt="ceo" />
                </div>
                <div className="mt-3 desktop:mt-[6rem]">
                  <div className="text-xl">Suryo Widjojo</div>
                  <div className="text-greys">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
