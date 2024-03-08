import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img7.jpg";
import img6 from "../assets/img/img6.jpg";

const Content = () => {
  return (
    <>
    <div className="mx-auto max-w-7xl  bg-white pb-16">
    <div className="w-3/4 py-9 grid grid-cols-4 gap-4 max-w-7xl mx-auto">
    <div className="rounded-lg bg-blue-200 col-span-2"><img className="h-72 w-[30rem] rounded-lg" src={img1} alt="" /></div>
    <div className="bg-green-200 col-span-1 row-span-2 rounded-lg"><img src={img5} className="h-[28.5rem] rounded-lg" alt="" /></div>
    <div className="rounded-lg bg-yellow-200 col-span-1"><img src={img2} className="h-72 w-96 rounded-lg" alt="" /></div>
    <div className="bg-red-200  col-span-1 rounded-lg"><img className="rounded-lg" src={img3} alt="" /></div>
    <div className="bg-red-200 col-span-1 rounded-lg"><img className="rounded-lg" src={img3} alt="" /></div>
    <div className="bg-red-200 col-span-1 rounded-lg "><img className="rounded-lg" src={img6} alt="" /></div>
  </div>
  </div>
</>
  );
};
export default Content;