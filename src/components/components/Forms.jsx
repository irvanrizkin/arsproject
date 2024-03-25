import { MdOutlineMail } from "react-icons/md";
import { PiBuildingsLight } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
export const Forms = () => {
  return (
    <>
      <div className="mt-[18rem] px-5 flex flex-col desktop:flex-row space-y-5">
        <div className="py-5 text-greys px-5 shadow-xl desktop:shadow-none desktop:border-r-4 desktop:border-primary desktop:w-[40%] desktop:h-[18rem]">
          <div className="flex space-x-4">
            <MdOutlineMail size={30} />
            <div>office@anugerahraprisejahtera.com</div>
          </div>
          <div className="flex space-x-4 mt-6">
            <MdOutlineMail size={30} />
            <div>sales@anugerahraprisejahtera.com</div>
          </div>
          <div className="flex space-x-4 mt-6">
            <LuPhone size={30} />
            <div>021-27847161</div>
          </div>
          <div className="flex space-x-4">
            <PiBuildingsLight size={80} />
            <div className="mt-7">
              QP Office. Grand Slipi Tower Lantai 5 Unit i.1, JI. S Parman Kav
              22-24, 001/004, Palmerah, Jakarta Barat, 11480
            </div>
          </div>
        </div>
        <div className="desktop:w-[60%] desktop:px-5">
          <div>
            <div className="text-primary">Tentang Kami</div>
            <div className="text-3xl font-semibold">Kirim Kami Pesan</div>
          </div>
          <form action="submit">
            <div className="mt-4 ">
              <div className="space-y-2">
                <div>Nama Lengkap</div>
                <input
                  type="text"
                  className="border rounded-md w-full p-2"
                  placeholder="Contoh : Afdal Maulana"
                />
              </div>
              <div className="desktop:flex desktop:flex-row desktop:gap-3">
                <div className="mt-4 space-y-2 desktop:w-[50%]">
                  <div>Alamat Email</div>
                  <input
                    type="text"
                    className="border rounded-md w-full p-2"
                    placeholder="Contoh : emailanda@domain.com"
                  />
                </div>
                <div className="mt-4 space-y-2 desktop:w-[50%]">
                  <div>Nomor Telepon (Opsional)</div>
                  <input
                    type="text"
                    className="border rounded-md w-full p-2"
                    placeholder="Contoh : 085525525315"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label>Subjek</label>
                <select
                  id="cars"
                  name="cars"
                  className="border rounded-md w-full p-2 text-greys"
                  placeholder="Pilih Subjek Pesan"
                  defaultValue="default"
                >
                  <option value="default">Pilih Subjek</option>
                  <option value="halo">Halo</option>
                </select>
              </div>
              <div className="mt-4 space-y-2">
                <div>Pesan Anda</div>
                <textarea
                  type="textarea"
                  className="w-full border h-[8rem] p-2"
                  placeholder="Contoh : Saya ingin bekerja sama"
                />
              </div>
            </div>
          </form>
          <button className="bg-primary p-4 w-full text-white font-semibold">
            Kirim Pesan
          </button>
        </div>
      </div>
    </>
  );
};
