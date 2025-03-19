import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Comment = () => {
 
  const reviews = [
    {
      id: 1,
      name: "Selena Gomez",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_10_%28cropped%29.jpg",
      review: "Bu tədbir inanılmaz idi! Gözəl təcrübə qazandım.",
    },
    {
      id: 2,
      name: "Chris Evans",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Chris_Evans_SDCC_2014.jpg/800px-Chris_Evans_SDCC_2014.jpg",
      review: "Təşkilatçılıq mükəmməl idi. Əla vaxt keçirdim!",
    },
    {
      id: 3,
      name: "Emma Watson",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emma_Watson_2013.jpg/800px-Emma_Watson_2013.jpg",
      review: "Çox yaxşı tədbir idi. Yenidən iştirak edəcəyəm!",
    },
    {
      id: 4,
      name: "Harry Styles",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Harry_Styles_2018.jpg/800px-Harry_Styles_2018.jpg",
      review: "Musiqi və atmosfer mükəmməl idi. Bunu qaçırmamalısınız!",
    },
    {
      id: 5,
      name: "Taylor Swift",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taylor_Swift_Red_Tour_5%2C_2013.jpg/800px-Taylor_Swift_Red_Tour_5%2C_2013.jpg",
      review: "Hər şey mükəmməl idi. Mənə inanılmaz anlar bəxş etdi!",
    },
    {
      id: 6,
      name: "Zendaya",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Zendaya_Cannes_2019.jpg/800px-Zendaya_Cannes_2019.jpg",
      review: "Təşkilat çox peşəkar idi. Mən çox bəyəndim!",
    },
  ];
  
  

  return (
    <div className="w-full bg-[#0D0D0D] py-10 mb-16">
      <h2 className="text-center text-[#FF006E] text-3xl font-bold mb-6">
        What people say
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[90%] mx-auto"
      >
 
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-[#FFFFFF03] w-[295px] h-[354px] gap-3 p-10 p-6 rounded-lg shadow-md text-white flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-400 text-sm text-center">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
