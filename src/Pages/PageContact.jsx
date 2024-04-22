import bgContact from "../assets/backContact.svg";
import { CopyRights } from "../components/Footer/CopyRights";
import { Footer } from "../components/Footer/Footer";
import { Forms } from "../components/components/Forms";
export const PageContact = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgContact})` }}
        className="w-full h-[25rem] px-5 widescreen:px-[10rem] relative font-headLine"
      >
        <div className="w-[full] relative">
          <div className="absolute bg-white w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl">
            <div className="text-primary">Hubungi Kami</div>
            <div className="text-4xl font-semibold">Kirimkan Kami Pesan</div>
            <div className="text-greys mt-4">
              Kami sangat menghargai kunjungan Anda. Apakah Anda membutuhkan
              informasi lebih lanjut, memiliki pertanyaan, atau ingin berdiskusi
              tentang apa pun? Kami siap membantu Anda!
            </div>
          </div>
        </div>
      </div>
      <Forms />
      <Footer />
      <CopyRights />
    </div>
  );
};
