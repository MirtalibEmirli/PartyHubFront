import React from "react";
import makeImg from "../../assets/t1.png";
import arl from "../../assets/arrow-left.png";
import arR from "../../assets/arR.png";
import insta from "../../assets/instagram.png";
import wp from "../../assets/whatsapp.png";
import dg from "../../assets/designer.svg";
import DiscoAnimation from "./DiscoAnimation ";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-4">
      <div
        className="text-white flex flex-wrap justify-center items-center gap-2 
    md:gap-5 text-center max-w-screen-lg"
      >
        <p className="text-sm md:text-base hover:text-gray-500  transition-colors duration-500">
          Looking to have fun?
        </p>
        <div className="h-[1px] bg-gray-500 flex-grow md:w-[250px]"></div>
        <p className="text-sm md:text-base">or</p>
        <div className="h-[1px] bg-gray-500 flex-grow   md:w-[250px] "></div>
        <p className="text-sm md:text-base hover:text-gray-500  transition-colors duration-500">
          Ready to throw a party?
        </p>
      </div>

      <img
        src={makeImg}
        alt="Footer Image"
        className="mt-5 max-w-xs md:max-w-md"
      />
      <div className="flex items-center justify-center lg:gap-5 gap-2 lg:mt-5">
        <button
          className="border flex gap-3 items-center justify-center border-black lg:w-[164px] h-[40px]
         rounded-sm text-white bg-gradient-to-r from-[#FF006E] via-[#AA26C4] to-[#8338EC] 
         font-medium text-[15px] hover:border-white transition-colors duration-500"
        >
          <img src={arl} alt="" />
          Find Your Fun{" "}
        </button>
        <button
          className="border flex gap-3 items-center justify-center border-white 
        hover:border-black transition-colors duration-500 lg:w-[164px] h-[40px]
           rounded-sm text-white font-medium text-[15px]"
        >
          Post Your Event <img src={arR} alt="" />
        </button>
      </div>
      <div className="flex text-white items-center justify-center lg:gap-20 gap-4 mt-12 mb-5 lg:h-6 ">
        <p className="font-poppins hover:text-gray-500 transition-colors duration-500">
          About
        </p>
        <p className="font-poppins hover:text-gray-500 transition-colors duration-500">
          For Businesses
        </p>
        <p className="font-poppins hover:text-gray-500  transition-colors duration-500">
          Contact us
        </p>
      </div>
      <div className=" w-[93%] bg-gray-500 h-[1px] overflow-hidden"></div>

      <div className="flex items-center lg:justify-around  lg:w-full  ">
       
       
        <div className="flex items-center justify-center space-x-2">
          <a href="#">
            <img src={wp} alt="WhatsApp" />
          </a>
          <a target="_blank" href="https://www.instagram.com/partyhubevent/">
            <img src={insta} alt="Instagram" />
          </a>
        </div>

        <div className="flex items-center justify-center lg:ml-24">
          <DiscoAnimation />
        </div>

        <div className="flex items-center justify-center">
          <img src={dg} alt="Design by Fatima Huseynova" />
        </div>
      </div>



    </div>
  );
};

export default Footer;
//   return (
//     <div className="relative w-full min-h-[70vh] flex  lg:max-h-[100vh] overflow-hidden">
//        <video
//         src={events[0].video}
//         muted
//         autoPlay
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       />

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

//       <div className="relative z-20 flex flex-col gap-4 px-6 md:px-16 max-w-[800px] py-10 lg:py-[56vh]">
//         <h2 className="text-white font-orbitron text-3xl md:text-4xl leading-tight">
//           {events[0].Title}
//         </h2>
//         <p className="text-[#CECECE]  font-poppins text-base md:text-base lg:w-[90vh] leading-relaxed">
//           {events[0].Description}
//         </p>
//         <button className="flex items-center gap-3 bg-gradient-to-r from-[#FF006E]
//          via-[#AA26C4] to-[#8338EC] text-white text-sm md:text-base px-5 py-3 rounded-sm w-fit">
//           See Details <img className="w-6 h-6" src={arRight} alt="arrow" />
//         </button>
//       </div>




 
//       <div className="relative z-20   lg:h-81vh lg:mt-36 flex gap-4 ">
//         <img className=" lg:max-h-[70vh] " src={events[0].posterImg}  alt="" />
//         <img className=" lg:max-h-[45vh] lg:mt-36  " src={nvr} alt="" />
//       </div>

//       {/* </Swiper> */}

//     </div>