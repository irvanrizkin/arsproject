import companyVideo from "../../assets/companyVideo.svg";
export const About = () => {
  return (
    <div className="px-5">
      <div className=" flex flex-col">
        <div className="text-primary mt-[16rem]">Tentang Kami</div>
        <div className="font-semibold text-2xl">
          Menuju Era Baru Mobilitas dan Produktivitas dengan Profesionalisme dan
          Keunggulan
        </div>
        <div className="mt-8 text-greys pr-4">
          PT Anugerah Rapri Sejahtera, kami merupakan distributor resmi Oli ENI
          melalui PT Gani Distribusi Lubrindo, sebuah perusahaan yang
          berkomitmen dalam menyediakan solusi terbaik untuk kebutuhan indistri
          dan otomotif Anda dalam pelumas. Bersama anak perusahaan kami, PT
          Berkat Rapri Sejahtera, kami juga memperluas jejak kami dalam
          distribusi sparepart berkualitas. Dengan dedikasi untuk inovasi dan
          kualitas, kami memastikan mesin dan operasional Anda dalam performa
          yang maksimal.
        </div>
        <div className="flex justify-center items-center mt-5">
          <img src={companyVideo} alt="video" />
        </div>
      </div>
    </div>
  );
};
