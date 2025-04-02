import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const EventSlider = ({ media }) => {
  return (
    <div className="w-full h-[550px] mt-[115px] md:h-[550px] lg:h-[600px] relative rounded-2xl overflow-hidden bg-[#0f0f1f] shadow-xl">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
      >
        {media.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex items-center justify-center bg-black"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={`Slide ${index}`}
                className="w-full h-full "
              />
            ) : (
              <video
                src={item.url}
                controls
                className="w-full h-full "
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;
