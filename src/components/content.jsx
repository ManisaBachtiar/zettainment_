import React from "react";
const Content = () => {
  return (
    // <div className="bg-red-900 h-96 flex flex-row ">
    //   <div className="a bg-white h-44 w-1/4">wkqkqw</div>
    //   <div className="b bg-pink-200 h-44 w-1/4">wkkqjqkjqj</div>
    //   <div className="c bg-red-300 h-44 w-1/4">qkwqkwqkq</div>
    //   <div className="d bg-blue-400 h-44 w-1/4">kwqkqkkq</div>
    // </div>
    <>
    <div class="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
    <div class="bg-blue-200 col-span-2">Elemen A (span 2 kolom)</div>
    <div class="bg-green-200 col-span-1 row-span-2">Elemen B (span 1 kolom)</div>
    <div class="bg-yellow-200 col-span-1">Elemen C (span 1 kolom)</div>
    <div class="bg-red-200 col-span-1">Elemen D (span 4 kolom)</div>
    <div class="bg-red-200 col-span-1">Elemen D (span 4 kolom)</div>
    <div class="bg-red-200 col-span-1 ">Elemen D (span 4 kolom)</div>
  </div>
</>
  );
};
export default Content;