import img1 from "../assets/img/vektor3.png";
export default function HeroSection() {
  return (
    <div className="lg:bg-white text-[#1D1B4F]  lg:max-w-7xl mx-auto  lg:py-24 xl:pt-32 justify-center flex ">
      <div className="container  flex flex-col md:flex-row items-center justify-center ">
        <div className="xl:w-1/2 lg:w-2/3">
          <h1 className="text-[5rem] font-bold mb-4 leading-tight">
            <span className="text-[#ECC50D]">Zettain</span>ment Your Friendly
            Entertainment
          </h1>
          <p className="text-lg mb-6 pr-12">
          Zettainment is a platform where you can discover the latest news for your feed, featuring trending and significant updates.
          </p>
          <button className=" text-[#010101] font-xl border-2 border-[#ECC50D] font-bold py-2 px-4 rounded-md">
            About
          </button>
        </div>
        <div className=" mt-[-62px] w-[35%]">
          <img className="animate-fly" src={img1} />
        </div>
      </div>
    </div>
  );
}
