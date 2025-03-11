import React from "react";
import makeImg from "../assets/t1.png";
import makeImg2 from "../assets/make.png";
import arl from "../assets/arrow-left.png"
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-4">
      <div
        className="text-white flex flex-wrap justify-center items-center gap-2 
    md:gap-5 text-center max-w-screen-lg"
      >
        <p className="text-sm md:text-base">Looking to have fun?</p>
        <div className="h-[1px] bg-gray-500 flex-grow md:w-[250px]"></div>
        <p className="text-sm md:text-base">or</p>
        <div className="h-[1px] bg-gray-500 flex-grow   md:w-[250px]"></div>
        <p className="text-sm md:text-base">Ready to throw a party?</p>
      </div>


      <img src={makeImg} alt="Footer Image" className="mt-5 max-w-xs md:max-w-md"/>
      <div>
        <button className="border flex gap-3 items-center justify-center border-black lg:w-[164px] h-[40px]
         rounded-sm text-white bg-gradient-to-r from-[#FF006E] via-[#AA26C4] to-[#8338EC] 
         font-medium text-[15px] hover:border-white transition-colors duration-500"><img src={arl} alt="" />Find Your Fun </button>
        <button></button>
      </div>



    </div>
  );
};

export default Footer;
