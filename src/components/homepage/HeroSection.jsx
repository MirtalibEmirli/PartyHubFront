import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";

import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";
import v5 from "../../assets/v5.mp4";
import v6 from "../../assets/v6.mp4";
import v7 from "../../assets/v7.mp4";
import v8 from "../../assets/v8.mp4";
import arRight from "../../assets/arRight.svg";
import event3 from "../../assets/17mart.svg";
import event2 from "../../assets/event2.svg";
import nvr from "../../assets/nvrz.svg";
import silent from "../../assets/silent.svg";
import event1 from "../../assets/event.svg";
import kz from "../../assets/kzlr.svg";
const HeroSection = () => {
  const [events] = useState([
    {
      Title: "Senden Daha Güzel",
      Description:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      video: v4,
      posterImg: event1,
    },
    {
      Title: "Novruz Party",
      Description:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      video: v3,
      posterImg: nvr,
    },
    {
      Title: "Kizlar Gecesi",
      Description:
        "Let the music take control this spring night..And Feel The real Teechno Today with Us ",
      video: v5,
      posterImg: kz,
    },
    {
      Title: "Turk Pop",
      Description: "Let the music take control this spring night.",
      video: v6,
      posterImg: event3,
    },
    {
      Title: "Techno Day",
      Description:
        "Let the music take control this spring night.And Feel The real Teechno Today with Us ",
      video: v7,
      posterImg: event2,
    },
    {
      Title: "Silent Party",
      Description:
        "Let the music take control this spring night.And Feel The real Teechno Today with Us ",
      video: v8,
      posterImg: silent,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="w-full h-full  "
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[95vh] overflow-hidden">
            <video
              src={event.video}
              muted
              autoPlay
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

            <div
              className="py-10 lg:py-[50vh] relative gap-4
              px-6 md:px-12 z-20 flex items-center justify-between w-full h-full    "
            >
              {/* relative z-20 flex flex-col gap-4 px-6 md:px-16 max-w-[800px] py-10 lg:py-[56vh] */}
              <div className=" px-6 md:px-10 lg:max-w-[800px] flex flex-col gap-4 py-10  lg:mt-[40vh]">
                <h2 className="text-white font-orbitron text-3xl md:text-4xl leading-tight">
                  {event.Title}
                </h2>

                <p className="text-[#CECECE] font-poppins text-base  lg:w-[90vh] md:text-base leading-relaxed">
                  {event.Description}
                </p>

                <button
                  className="flex items-center 
                gap-3 bg-gradient-to-r from-[#FF006E] via-[#AA26C4]
                 to-[#8338EC] text-white text-sm md:text-base px-5 py-3 rounded-sm w-fit"
                >
                  See Details{" "}
                  <img className="w-6 h-6" src={arRight} alt="arrow" />
                </button>
              </div>

              <div className="relative z-20   lg:h-81vh lg:mt-36 flex gap-4">
                <img
                  className="lg:aspect-[4/5] lg:w-[400px] lg:max-h-[80vh] object-cover"
                  src={event.posterImg}
                  alt={`event-${index}`}
                />

                <img
                  className="lg:w-[45vh] object-cover lg:aspect-[4/5] lg:max-h-[50vh] lg:mt-36"
                  src={
                    events[index + 1]
                      ? events[index + 1].posterImg
                      : events[0].posterImg
                  }
                  alt="nvr"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
