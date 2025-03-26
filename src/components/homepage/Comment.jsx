import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import vg from "../../assets/vg2.svg";
import dfimage from "../../assets/df.png";

const Comment = () => {

  const reviews = [
    {
      id: 1,
      name: "Selena Gomez",
      image: dfimage,
      review: "Bu tədbir inanılmaz idi! Gözəl təcrübə qazandım.",
    },
    {
      id: 2,
      name: "Chris Evans",
      image: dfimage,
      review: "Təşkilatçılıq mükəmməl idi. Əla vaxt keçirdim!",
    },
    {
      id: 3,
      name: "Emma Watson",
      image: dfimage,
      review: "Çox yaxşı tədbir idi. Yenidən iştirak edəcəyəm!",
    },
    {
      id: 4,
      name: "Harry Styles",
      image: dfimage,
      review: "Musiqi və atmosfer mükəmməl idi. Bunu qaçırmamalısınız!",
    },
    {
      id: 5,
      name: "Taylor Swift",
      image: dfimage,
      review: "Hər şey mükəmməl idi. Mənə inanılmaz anlar bəxş etdi!",
    },
    {
      id: 6,
      name: "Zendaya",
      image: dfimage,
      review: "Təşkilat çox peşəkar idi. Mən çox bəyəndim!",
    },
    {
      id: 7,
      name: "Leonardo DiCaprio",
      image: dfimage,
      review: "Bu tədbirdə iştirak etmək mənim üçün xoş oldu!",
    },
    {
      id: 8,
      name: "Scarlett Johansson",
      image: dfimage,
      review: "Mükəmməl təşkil olunmuş bir tədbir idi!",
    },
    {
      id: 9,
      name: "Dwayne Johnson",
      image: dfimage,
      review: "Tədbirin enerjisi çox yüksək idi, çox bəyəndim!",
    },
    {
      id: 10,
      name: "Gal Gadot",
      image: dfimage,
      review: "Hər detal mükəmməl idi, təşkilatçılara təşəkkür edirəm!",
    },
    {
      id: 11,
      name: "Keanu Reeves",
      image: dfimage,
      review: "Tədbirdə iştirak etdiyim üçün çox şanslıyam!",
    },
    {
      id: 12,
      name: "Margot Robbie",
      image: dfimage,
      review: "Bu tədbir yaddaşıma unudulmaz anlar əlavə etdi!",
    },
  ];

  return (
    <div className="w-full   py-10 mb-16">
      <h2 className="text-center text-[#FF006E] text-3xl font-orbitron h-[50px] lg:w-full mb-6">
        What people say
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={5}
        
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        centeredSlides={false}
        loop={false}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
        }}
        className="relative w-[100%] "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-0 m-0">
            <div
              className="relative group w-[295px] h-[354px] 
            gap-3 mt-5 ml-5 p-[3px]   shadow-md text-white flex flex-col transition-all duration-500"
            >
              {/* bu bizim borderdir */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]  via-[#000000]
                to-[#8338EC]  p-[4px] 
              opacity-0 group-hover:opacity-100 transition-all duration-500"
              ></div>

              <div className="relative w-full h-full bg-[#0D0D0D]  p-8 flex flex-col items-center">
                {/* images hisselerid */}
                <div className="flex lg:w-[215px] lg:h-[80px] items-center lg:justify-between   filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <img src={vg} className="lg:w-[27px] lg:h-auto hidden" />
                </div>

                {/* burada naming hsissesidi hansiki backden geelcek datadan gotercem */}
                <div className="w-[215px] h-[182px] gap-2 items-center">
                  <h3 className="text-lg font-semibold text-left w-full">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-sm text-left w-full">
                    {review.review}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
