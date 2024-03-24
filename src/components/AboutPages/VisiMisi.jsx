import workMining from "../../assets/workMining.svg";
import { visi, misi } from "../../constant/index";
import listIcon from "../../assets/listIcon.svg";
export const VisiMisi = () => {
  return (
    <div>
      <div className="bg-[#061d29] mt-6 relative">
        <div className="text-white px-5 py-[5rem]  relative flex flex-col desktop:flex-row">
          <div className=" ">
            <div className="tablet:flex justify-center items-center">
              <img src={workMining} alt="minings" className="z-10 relative " />
            </div>
            <div className="z-0 absolute top-0 left-0 bg-primary w-[11rem] h-[11rem]"></div>
            <div className="py-10 widescreen:ml-[5rem] widescreen:px-4">
              <div className="relative z-10 text-4xl font-semibold ">Visi </div>
              <ul className="mt-5">
                {visi.map((item, index) => (
                  <li className="flex" key={index}>
                    <div>
                      <img
                        src={item.img}
                        alt="list"
                        className="min-w-6 min-h-6  "
                      />
                    </div>
                    <div className="text-[16px] px-7">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="desktop:ml-[2rem] desktop:px-5 widescreen:w-[50%] widescreen:px-[3.5rem]">
            <div className="text-4xl font-semibold">Misi</div>
            <ul className="mt-5 space-y-5 widescreen:space-y-8 widescreen:mt-10 ">
              {misi.map((item, index) => (
                <li className="flex  widescreen:pr-4" key={index}>
                  <div>
                    <img
                      src={item.img}
                      alt="list"
                      className="min-w-6 min-h-6  "
                    />
                  </div>
                  <div className="text-[16px] px-7 text-greys ">
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
