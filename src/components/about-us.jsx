import React from "react";
const AboutUs = ({img}) => {
  return (
    <div className="flex justify-between max-w-7xl px-16 mx-auto mt-9 bg-white py-11">
      <div className="w-1/2 mt-9 px-5">
        <img src={img}  alt="" className="w-full animate-fly" />
      </div>
      <div className="w-1/2 px-4">
        <h3 className="text-2xl mb-2 text-[#ECC50D] font-bold">About Us</h3>
        <h1 className="text-[2.8rem] leading-tight font-bold mb-4">
          We Provide Real News for You
        </h1>
        <p className="mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. We are dedicated to bringing you the latest, most reliable news from around the globe. Our team of experienced journalists works tirelessly to provide you with real-time updates on everything that matters to you. From breaking news to in-depth analysis, we are your trusted source for staying informed.
        </p>
        <button className="bg-white border-2 border-[#ECC50D]  text-black font-bold py-2 px-4 rounded">
          Our Content
        </button>
      </div>
    </div>
  );
};

export default AboutUs;