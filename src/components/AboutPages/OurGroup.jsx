import { ourGrup } from "../../constant";
export const OurGroup = () => {
  return (
    <div>
      <div className="px-5  mt-[5rem] ">
        <div className="text-center">
          <div className="text-primary">Grup Kami</div>
          <div className="text-3xl font-semibold">Terafiliasi Dengan Kami</div>
        </div>
        <div className="flex mt-5 space-x-6">
          {ourGrup.map((item, index) => (
            <div className="" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
