import bgProduct from "../assets/mining.png";
import { CopyRights } from "../components/Footer/CopyRights";
import { Footer } from "../components/Footer/Footer";
export const PageProduct = () => {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${bgProduct})` }}
          className="w-full h-[25rem] px-5 widescreen:px-[10rem] relative"
        >
          <div
            className="w-[full] relative "
            style={{ backdropFilter: "brightness(90%)" }}
          >
            <div className="absolute bg-white w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl">
              <div className="text-primary">Produk Kami</div>
              <div className="text-4xl font-semibold">Kirimkan Kami Pesan</div>
              <div className="text-greys mt-4">
                Kami sangat menghargai kunjungan Anda. Apakah Anda membutuhkan
                informasi lebih lanjut, memiliki pertanyaan, atau ingin
                berdiskusi tentang apa pun? Kami siap membantu Anda!
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <CopyRights />
      </div>
    </>
  );
};
