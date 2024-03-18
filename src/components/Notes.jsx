import dumpTruck from "../assets/dumptruck.svg";
import ceoPic from "../assets/ceoPic.svg";
export const Notes = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat w-full px-5 h-[35rem] relative flex justify-center text-white desktop:px-[5rem] widescreen:px-[14rem] "
        style={{ backgroundImage: `url(${dumpTruck})` }}
      >
        <div className="absolute px-4 bottom-[-10rem] flex flex-col">
          <div className="bg-white text-black px-6 rounded-xl py-5 space-y-5">
            <div className="border-b-2 pb-10 text-2xl">
              Pertambangan adalah industri untuk hari ini dan besok. Disini,
              kami sudah menyediakan bahan dan pekerjaan yang penting untuk masa
              depan dan kami melihat peluang yang jelas untuk menggunakan
              kekuatan kami untuk terus bertumbuh nilai bagi para pemegang
              saham. Saya sangat optimis
            </div>
            <div className="flex space-x-6">
              <div>
                <img src={ceoPic} alt="ceo" />
              </div>
              <div className="mt-3">
                <div className="text-xl">Suryo Widjojo</div>
                <div className="text-greys">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
