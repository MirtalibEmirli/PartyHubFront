// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../styles/swiper.css";

// import event3 from "../../assets/17mart.svg";
// import event2 from "../../assets/event2.svg";
// import nvr from "../../assets/nvrz.svg";
// import silent from "../../assets/silent.svg";
// import event1 from "../../assets/event.svg";
// import kz from "../../assets/kzlr.svg";

// const Trending = () => {
//   const events = [
//     {
//       Title: "Senden Daha Güzel",
//       Description: "Morem ipsum dolor sit amet...",
//       posterImg: event1,
//       address: "Hayal Kahvesi Baku",
//       date: "17 March 2025",
//       minPrice: 25,
//     },
//     {
//       Title: "Novruz Party",
//       Description: "Morem ipsum dolor sit amet...",
//       posterImg: nvr,
//       address: "Moon Baku",
//       date: "21 March 2025, 19:00",
//       minPrice: 30,
//     },
//     {
//       Title: "Kizlar Gecesi",
//       Description: "Let the music take control...",
//       posterImg: kz,
//       address: "Club MixZone, Baku",
//       date: "5 April 2025",
//       minPrice: 20,
//     },
//     {
//       Title: "Turk Pop",
//       Description: "Let the music take control...",
//       posterImg: event3,
//       address: "Jolly Joker, Istanbul",
//       date: "12 April 2025",
//       minPrice: 35,
//     },
//     {
//       Title: "Techno Day",
//       Description: "Let the music take control...",
//       posterImg: event2,
//       address: "Industrial Hall, Berlin",
//       date: "26 April 2025",
//       minPrice: 40,
//     },
//     {
//       Title: "Silent Party",
//       Description: "Let the music take control...",
//       posterImg: silent,
//       address: "Park Bulvar Rooftop, Baku",
//       date: "30 April 2025",
//       minPrice: 18,
//     },
//   ];

//   return (
//     <div className="w-full py-10 flex flex-col mt-[120px] items-center justify-center">
//       <div className="text-center mb-8">
//         <h2 className="text-[#FF006E] text-[35px] h-[50px] font-orbitron mb-2">
//           Trending Events
//         </h2>

//       </div>
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={10}
//         slidesPerView={4}
//         loop={true}
//         pagination={{ clickable: true, dynamicBullets: true }}
//         className="w-full h-full"
//       >
//         {events.map((event, index) => (
//           <SwiperSlide key={index}>
//             <button
//               className="relative w-[400px] h-[440px] bg-transparent
//             text-white rounded-b-[2px] overflow-hidden group"
//             >
//               <img
//                 src={event.posterImg}
//                 alt={`event-${index}`}
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
//               />

//               <div
//                 className="absolute bottom-0 left-0 right-0 bg-black/80
//               px-5 py-4 flex items-center justify-between"
//               >
//                 <p className="text-white text-sm font-medium">{event.date}</p>
//                 <span className="bg-[#8338EC] text-white h-[44px] flex items-center justify-center text-[16px] font-semibold px-4 py-1 rounded-sm">
//                   from {event.minPrice}₼
//                 </span>
//               </div>
//             </button>
//           </SwiperSlide>
//         ))}
//       </Swiper>{" "}
//     </div>
//   );
// };

// export default Trending;
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import right from "../../assets/arRight.svg";
import left from "../../assets/arleft.svg";

import arRight from "../../assets/arRight.svg";
import event3 from "../../assets/17mart.svg";
import event2 from "../../assets/event2.svg";
import nvr from "../../assets/nvrz.svg";
import silent from "../../assets/silent.svg";
import event1 from "../../assets/event.svg";
import kz from "../../assets/kzlr.svg";

const Trending = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [events] = useState([
    {
      Title: "Senden Daha Güzel",
      Description:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      posterImg: event1,
      address: "Hayal Kahvesi Baku",
      date: "17 March 2025",
      minPrice: 25,
    },
    {
      Title: "Novruz Party",
      Description:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      posterImg: nvr,
      address: "Moon Baku",
      date: "21 March 2025, 19:00",
      minPrice: 30,
    },
    {
      Title: "Kizlar Gecesi",
      Description:
        "Let the music take control this spring night..And Feel The real Teechno Today with Us",
      posterImg: kz,
      address: "Club MixZone, Baku",
      date: "5 April 2025",
      minPrice: 20,
    },
    {
      Title: "Turk Pop",
      Description: "Let the music take control this spring night.",
      posterImg: event3,
      address: "Jolly Joker, Istanbul",
      date: "12 April 2025",
      minPrice: 35,
    },
    {
      Title: "Techno Day",
      Description:
        "Let the music take control this spring night.And Feel The real Teechno Today with Us",
      posterImg: event2,
      address: "Industrial Hall, Berlin",
      date: "26 April 2025",
      minPrice: 40,
    },
    {
      Title: "Silent Party",
      Description:
        "Let the music take control this spring night.And Feel The real Teechno Today with Us",
      posterImg: silent,
      address: "Park Bulvar Rooftop, Baku",
      date: "30 April 2025",
      minPrice: 18,
    },
  ]);

  return (
    <div className="w-full py-10 flex flex-col mt-[50px]  items-center justify-center  ">
      <div className="text-center mb-8">
        <h2 className="text-[#FF006E] text-[35px] h-[50px] font-orbitron  ">
          Trending Events
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {events.map((event, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center lg:h-[520px]"
          >
            <div
              className={`lg:w-[295px] lg:h-[480px] box-border rounded-[4px] 
    overflow-hidden relative transition-all duration-500 flex-shrink-0
    ${
      index === activeIndex
        ? "grayscale-0 shadow-[0_0_50px_#8338EC] border-4 border-white lg:w-[370px]"
        : "grayscale"
    }
  `}
            >
              <img
                src={event.posterImg}
                alt={`event-${index}`}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {index === activeIndex && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-5 py-4 flex items-center justify-between">
                  <p className="text-white text-sm font-medium">{event.date}</p>
                  <span className="bg-[#8338EC] text-white h-[44px] flex items-center justify-center text-[16px] font-semibold px-4 py-1 rounded-sm">
                    from {event.minPrice}₼
                  </span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
