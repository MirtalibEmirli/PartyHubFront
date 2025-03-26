import React from "react";
import eventimg from "../../assets/event.svg"
import event2 from "../../assets/event2.svg"
import event3 from "../../assets/event3.svg"
const FindWhat = () => {
  
  const events = [
    { id: 1, name: "Party Night", date: "2025-04-12" ,img:eventimg},
    { id: 2, name: "Music Fest", date: "2025-05-02" ,img:event3},
    { id: 3, name: "Art Exhibition", date: "2025-04-25" ,img:eventimg},
    { id: 4, name: "Food Carnival", date: "2025-06-10",img:event2 },
    { id: 5, name: "Tech Meetup", date: "2025-04-30" ,img:event3},
    { id: 6, name: "Movie Premiere", date: "2025-05-14" ,img:event2},
    { id: 7, name: "Gaming Con", date: "2025-05-28" ,img:eventimg},
    { id: 8, name: "Fashion Show", date: "2025-06-01" ,img:event3},
    { id: 9, name: "Startup Pitch", date: "2025-04-20" ,img:event2},
  ];
  
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-[#FF006E] text-3xl font-orbitron mb-2">
          Can’t Find What You Want?
        </h2>
        <p className="text-white text-sm">
          Use the filters and have the time of your life!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Dropdown 1 */}

        <select className="w-[295px] h-[48px] bg-[#FFFFFF33] text-white px-4 rounded-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF006E]">
          <option>Choose date</option>
        </select>

        {/* Dropdown 2 */}
        <select
          className="w-[295px] h-[48px] bg-[#FFFFFF33] text-white px-4 rounded-sm border
         border-white/60 "
        >
          <option>Choose category</option>
        </select>

        {/* Dropdown 3 */}
        <select
          className="w-[295px] h-[48px] bg-[#FFFFFF33] text-white px-4 
        rounded-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF006E]"
        >
          <option>Choose venue</option>
        </select>
      </div>

      <div className="w-full flex justify-center py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1240px]">
    {events.map((event) => (
      <button
        key={event.id}
        className="w-[390px] h-[430px] bg-[#000000CC] 
        text-white flex flex-col items-center justify-center rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
      >
        <img
          src={event.img}
          alt="event"
          className="w-full h-[320px] object-cover rounded-t-lg"
        />
        <div className="w-full p-4 flex flex-col justify-between h-[120px]">
          <p className="text-sm text-gray-400">{event.date}</p>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <span className="
           flex items-center  text-sm bg-[#c800ff] px-3 py-1 rounded-sm lg:w-[92px] lg:h-[34px]">
              from 15₼
            </span>
          </div>
        </div>
      </button>

    ))}
  </div>
</div>

    </div>
  );
};

export default FindWhat;
