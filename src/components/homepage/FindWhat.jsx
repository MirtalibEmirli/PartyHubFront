import React, { useEffect, useState } from "react";
import CustomSelect from "../common/CustomSelect";
import axios from "axios";

const FindWhat = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    { value: "", title: "Choose category" },
    { value: "Techno", title: "Techno" },
  
  ])
  const [venues, setVenues] = useState([
    { value: "", title: "Choose venue" },
    { value: "HayalKahvesi", title: "HayalKahvesi" },
    
  ]);

  const [filters, setFilters] = useState({
    date: "",
    category: "",
    venue: "",
    price: "",
  });

  const options = {
    date: [
      { value: "", title: "Choose date" },
      { value: "today", title: "Today" },
      { value: "this-week", title: "This Week" },
      { value: "next-month", title: "Next Month" },
    ],
    category: categories,
    venue: venues,
    price: [
      { value: "", title: "Price range" },
      { value: "low", title: "Under 20₼" },
      { value: "medium", title: "20₼ - 50₼" },
      { value: "high", title: "Over 50₼" },
    ],
  };

  const fetchEvents = async (reset = false) => {
    try {
      setLoading(true);
      const response = await axios.get("https://localhost:7218/api/event", {
        params: {
          ...filters,
          page: reset ? 1 : page,
        },
      });

      const newEvents = response.data?.data
       || [];

      if (reset) {
        setEvents(newEvents);
        setPage(2);
      } else {
        setEvents((prev) => [...prev, ...newEvents]);
        setPage((prev) => prev + 1);
      }

      setHasMore(newEvents.length >= 9);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (type, selected) => {
    const newFilters = { ...filters, [type]: selected.value };
    setFilters(newFilters);
    setPage(1);
  };

  useEffect(() => {
    fetchEvents(true);
  }, [filters]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [categoryRes, venueRes] = await Promise.all([
          axios.get("https://localhost:7218/api/EventCategoryHandler?Page=1&Limit=10"),
          axios.get("https://localhost:7218/api/Venue/getAll"),
        ]);

        const fetchedCategories =
        categoryRes.data?.data?.items?.map((c) => ({
          value: c.categoryName,
          title: c.categoryName,
        })) || [];
      

        const fetchedVenues =
          venueRes.data?.data?.map((v) => ({
            value: v.id,
            title: v.name,
          })) || [];
        setCategories([
          { value: "", title: "Choose Category" },
          ...fetchedCategories,
        ]);
        setVenues([{ value: "", title: "Choose venue" }, ...fetchedVenues]);

      } catch (error) {
        console.error(error);
      }
    };
    fetchFilterOptions();
  },[]);

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
  
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {Object.keys(options).map((key) => (
          <CustomSelect
            key={key}
            selectedOption={options[key].find((o) => o.value === filters[key])}
            setSelectedOption={(value) => handleFilterChange(key, value)}
            options={options[key]}
          />
        ))}
      </div>
  
      {/* Events */}
      <div className="w-full flex justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1240px]">
          {events.map((event) => (
            <button
            key={event.id}
            className="relative w-[400px] h-[440px] bg-transparent 
            text-white rounded-b-[2px] overflow-hidden group"
          >
          
            <img
              src={event.imageUrl}
              alt="event"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          
          
            <div
              className="absolute bottom-0 left-0 right-0 bg-black/80 
              px-5 py-4 flex items-center justify-between"
            >
             
              <p className="text-white text-sm font-medium">{event.date}</p>
          
             
              <span className="bg-[#8338EC] gap-[10px] text-white h-[44px] flex items-center justify-center  text-[16px] font-semibold px-4 py-1 rounded-sm">
                from {event.minPrice}₼
              </span>
            </div>
          </button>
          
          ))}
        </div>
      </div>
  
      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={() => fetchEvents()}
          disabled={loading}
          className="mt-6 px-6 py-2 bg-[#FF006E] font-orbitron text-white rounded hover:cursor-pointer"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
  
};

export default FindWhat;
