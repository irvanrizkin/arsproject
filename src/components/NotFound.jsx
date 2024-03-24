import notfounds from "../assets/notFounds.svg";
import { CopyRights } from "./Footer/CopyRights";
import { Footer } from "./Footer/Footer";
export const NotFound = () => {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${notfounds})` }}
          className="w-full h-[30rem] px-[10rem] py-[8rem] relative"
        >
          <div className="flex space-x-2">
            <div className="w-[50%] pr-[5rem] flex flex-col space-y-3">
              <div className="text-primary">Halaman 404 Tidak Ditemukan</div>
              <div className="text-4xl font-semibold">Ups, Halaman</div>
              <div className="text-4xl font-semibold">Tidak Ditemukan</div>
              <div className="text-greys">
                Ups! Halaman yang Anda cari tidak ada di sini. Silakan periksa
                kembali URL atau kembali ke beranda kami. Terima kasih atas
                pengertian Anda.
              </div>
            </div>
            <div className="w-[50%] flex justify-center">
              <div className="text-5xl text-primary">404</div>
            </div>
          </div>
        </div>
        <div className="mt-[-12rem]">
          <Footer />
          <CopyRights />
        </div>
      </div>
    </>
  );
};
