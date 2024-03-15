import backProduct from "../assets/backProduct.png";
export const Product = () => {
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[35rem] relative flex justify-center text-white px-[14rem] "
      style={{ backgroundImage: `url(${backProduct})` }}
    >
      <div className=" w-full flex items-center flex-col px-6">
        <div className=" text-5xl mt-[5rem] font-bold">Produk Kami</div>
        <div className="text-center mt-[4rem] text-gray-300 text-xl">
          Melalui kualitas produk kami dan dukungan teknis yang handal, kami
          bertujuan untuk membantu pelanggan kami mencapai efisiensi operasional
          maksimal, keandalan, dan keberhasilan jangka panjang
        </div>
      </div>
      <div className="absolute bottom-14 w-[80%] h-[10rem] bg-green-300">
        <div className="w-full h-full flex justify-center space-x-6 ">
          <div className="w-[30rem] h-[5rem] bg-white"></div>
          <div className="w-[30rem] h-[5rem] bg-white"></div>
          <div className="w-[30rem] h-[5rem] bg-white"></div>
        </div>
      </div>
    </div>
  );
};
