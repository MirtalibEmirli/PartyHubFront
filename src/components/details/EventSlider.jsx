import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const EventSlider = ({ media }) => {
  return (
    <div className="w-full h-[562px] mt-[114px]  rounded-[2px] overflow-hidden">
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
