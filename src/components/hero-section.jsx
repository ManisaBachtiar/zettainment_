import img1 from "../assets/img/team1.svg";
export default function HeroSection() {
  return (
    <div className=" text-[#1D1B4F]  lg:max-w-7xl mx-auto py-12 justify-center flex ">
      <div className="container  flex flex-col md:flex-row items-center justify-center px-16">
        <div className=" w-1/2">
          <h1 className="text-[5rem] font-bold mb-4 leading-tight">
            <span className="text-[#ECC50D]">Zettain</span>ment Your Friendly
            Entertainment
          </h1>
          <p className="text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet uwu hahahah a haha
          </p>
          <button className=" text-[#010101] font-xl border-2 border-[#ECC50D] font-bold py-2 px-4 rounded">
            About
          </button>
        </div>
        <div className="mt-6 md:mt-0 w-[40%]">
          <img src={img1} />
        </div>
      </div>
    </div>
  );
}
