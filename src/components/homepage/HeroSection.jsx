import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import api from "../../api";
import arRight from "../../assets/arRight.svg";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import React from "react"
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";

const HeroSection = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState([]);
  const [videoRefs, setVideoRefs] = useState([]);
  useEffect(() => {
    if (events.length > 0) {
      setVideoRefs((refs) =>
        Array(events.length)
          .fill()
          .map((_, i) => refs[i] || React.createRef())
      );
      setMutedStates((prev) =>
        Array(events.length)
          .fill(true) // default olaraq hamısı muted olsun
          .map((val, i) => prev[i] ?? val)
      );
    }
  }, [events]);
  

  const loadEvents = async () => {
    try {
      const res = await api.get("/event/getEvents", {
        params: { page, size: 6 },
      });

      const newEvents = res.data.data;
      if (newEvents.length < 6) setHasMore(false);

      setEvents((prev) => {
        const combined = [...prev, ...newEvents];
        const unique = Array.from(new Map(combined.map((e) => [e.id, e])).values());
        return unique;
      });
    } catch (err) {
      console.error("Event fetch error:", err);
    }
  };

  useEffect(() => {
    if (hasMore) {
      loadEvents();
    }
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (swiper.activeIndex >= events.length - 2 && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs[index]?.current;
    if (video) {
      const updatedMuted = !mutedStates[index];
      video.muted = updatedMuted;
  
      setMutedStates((prev) => {
        const updated = [...prev];
        updated[index] = updatedMuted;
        return updated;
      });
    }
  };
  


  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={false}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChange={handleSlideChange}
      className="w-full h-full"
    >
      {events.map((event, index) => {
        const videoUrl = event.mediaUrls.find((url) => url.endsWith(".mp4"));
        const posterUrl = event.mediaUrls.find(
          (url) =>
            !url.endsWith(".mp4") &&
            (url.endsWith(".jpg") ||
              url.endsWith(".jpeg") ||
              url.endsWith(".png") ||
              url.endsWith(".webp") ||
              url.endsWith(".svg"))
        );

        const nextPosterUrl =
          events[index + 1]?.mediaUrls.find((url) => !url.endsWith(".mp4")) ||
          events[0]?.mediaUrls.find((url) => !url.endsWith(".mp4"));

        return (
          <SwiperSlide key={`${event.id}-${index}`}>
            <div className="relative w-full h-[95vh] overflow-hidden">
              <video
                ref={videoRefs[index]}
                src={videoUrl}
                muted={mutedStates[index]}
                autoPlay
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

              {index === activeIndex && (
                <button
                  onClick={() => toggleMute(index)}
                  title={mutedStates[index] ? "Unmute" : "Mute"}
                  className="absolute top-5 right-5 z-30 bg-black/60 hover:bg-black/80 text-white p-3 mt-32 rounded-full shadow-lg transition"
                >
                  {mutedStates[index] ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>
              )}

              <div className="py-10 lg:py-[50vh] relative gap-4 px-6 md:px-12 z-20 flex items-center justify-between w-full h-full">
                <div className="px-6 md:px-10 lg:max-w-[800px] flex flex-col gap-4 py-10 lg:mt-[40vh]">
                  <h2 className="text-white font-orbitron text-3xl md:text-4xl leading-tight">
                    {event.title}
                  </h2>

                  <p className="text-[#CECECE] font-poppins text-base lg:w-[90vh] md:text-base leading-relaxed">
                    {event.venueName} – {event.formattedDate}
                  </p>

                  <button className="flex items-center gap-3 bg-gradient-to-r from-[#FF006E] via-[#AA26C4] to-[#8338EC] text-white text-sm md:text-base px-5 py-3 rounded-sm w-fit">
                    See Details <img className="w-6 h-6" src={arRight} alt="arrow" />
                  </button>
                </div>

                <div className="relative z-20 lg:h-81vh lg:mt-36 flex gap-4">
                  <img
                    className="lg:aspect-[4/5] lg:w-[400px] lg:max-h-[80vh] object-contain"
                    src={posterUrl}
                    alt={`event-${event.id}`}
                  />
                  <img
                    className="lg:w-[45vh] object-contain lg:aspect-[4/5] lg:max-h-[50vh] lg:mt-36"
                    src={nextPosterUrl}
                    alt="poster-next"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSection;
