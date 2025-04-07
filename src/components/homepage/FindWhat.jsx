import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomSelect from "../common/CustomSelect";
import RangeSlider from "./RangeSlider";

const FindWhat = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const [categories, setCategories] = useState([]);
  const [venues, setVenues] = useState([]);

  const [filters, setFilters] = useState({
    date: "",
    category: "",
    venue: "",
    price: "",
    minPrice: 0,
    maxPrice: 1000,
  });

  const options = {
    date: [
      { value: "", title: "Choose date" },
      { value: "today", title: "Today" },
      { value: "this-week", title: "This Week" },
      { value: "next-month", title: "Next Month" },
    ],
    category: [
      { value: "", title: "Choose category" },
      ...categories,
    ],
    venue: [
      { value: "", title: "Choose venue" },
      ...venues,
    ],
    price: [
      { value: "", title: "Price range" },
      { value: "price-range", title: "Price range" },
    ],
  };

  const fetchEvents = async (reset = false) => {
    try {
      setLoading(true);
      const { price, ...filterParams } = filters;

      const response = await axios.get("https://localhost:7218/api/event/getevents", {
        params: {
          ...filterParams,
          page: reset ? 1 : page,
        },
      });

      const newEvents = response.data?.data || [];

      if (reset) {
        setEvents(newEvents);
        setPage(2);
      } else {
        setEvents((prev) => [...prev, ...newEvents]);
        setPage((prev) => prev + 1);
      }

      setHasMore(newEvents.length >= 9);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRangeChange = (range) => {
    setPriceRange(range);
    setFilters((prev) => ({
      ...prev,
      minPrice: range[0],
      maxPrice: range[1],
    }));
  };

  const handleFilterChange = (type, selected) => {
    setFilters((prev) => ({
      ...prev,
      [type]: selected.value,
    }));
    setPage(1);
  };

  useEffect(() => {
    fetchEvents(true);
  }, [filters]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [catRes, venueRes] = await Promise.all([
          axios.get("https://localhost:7218/api/EventCategoryHandler?Page=1&Limit=10"),
          axios.get("https://localhost:7218/api/Venue/getAll"),
        ]);

        const fetchedCategories = catRes.data?.data?.items?.map((c) => ({
          value: c.categoryName,
          title: c.categoryName,
        })) || [];

        const fetchedVenues = venueRes.data?.data?.map((v) => ({
          value: v.id,
          title: v.name,
        })) || [];

        setCategories(fetchedCategories);
        setVenues(fetchedVenues);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOptions();
  }, []);

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
          >
            {key === "price" && filters.price === "price-range" && (
              <RangeSlider
                min={0}
                max={1000}
                value={priceRange}
                onChange={handleRangeChange}
              />
            )}
          </CustomSelect>
        ))}
      </div>

      {/* Events */}
      <div className="w-full flex justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1240px]">
          {events.map((event) => (
            <button
              key={event.id}
              className="relative w-[400px] h-[440px] bg-transparent text-white rounded-b-[2px] overflow-hidden group"
            >
              <img
                src={event.imageUrl}
                alt="event"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-5 py-4 flex items-center justify-between">
                <p className="text-white text-sm font-medium">{event.date}</p>
                <span className="bg-[#8338EC] text-white h-[44px] flex items-center justify-center text-[16px] font-semibold px-4 py-1 rounded-sm">
                  from {event.minPrice}₼
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Load More */}
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












// import React, { useEffect, useState } from "react";
// import CustomSelect from "../common/CustomSelect";
// import axios from "axios";
// import RangeSlider from "./RangeSlider";

// const FindWhat = () => {
//   const [events, setEvents] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [categories, setCategories] = useState([]);
//   const [venues, setVenues] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [filters, setFilters] = useState({
//     date: "",
//     category: "",
//     venue: "",
//     price: "",
//     minPrice: 0,
//     maxPrice: 1000,
//   });

//   const options = {
//     date: [
//       { value: "", title: "Choose date" },
//       { value: "today", title: "Today" },
//       { value: "this-week", title: "This Week" },
//       { value: "next-month", title: "Next Month" },
//     ],
//     category: [{ value: "", title: "Choose category" }, ...categories],
//     venue: [{ value: "", title: "Choose venue" }, ...venues],
//     price: [
//       { value: "", title: "Price range" },
//       { value: "price-range", title: "Price range" },
//     ],
//   };

//   const handleRangeChange = (range) => {
//     setPriceRange(range);
//     setFilters((prev) => ({
//       ...prev,
//       minPrice: range[0],
//       maxPrice: range[1],
//     }));
//   };

//   const handleFilterChange = (type, selected) => {
//     setFilters((prev) => ({
//       ...prev,
//       [type]: selected.value,
//     }));
//   };

//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const { price, ...params } = filters;
//       const response = await axios.get("https://localhost:7218/api/event/getevents", {
//         params,
//       });
//       setEvents(response.data?.data || []);
//     } catch (err) {
//       console.error("Error fetching events:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, [filters]);

//   useEffect(() => {
//     const fetchOptions = async () => {
//       try {
//         const [categoryRes, venueRes] = await Promise.all([
//           axios.get("https://localhost:7218/api/EventCategoryHandler?Page=1&Limit=10"),
//           axios.get("https://localhost:7218/api/Venue/getAll"),
//         ]);

//         setCategories(
//           categoryRes.data?.data?.items?.map((c) => ({ value: c.categoryName, title: c.categoryName })) || []
//         );

//         setVenues(
//           venueRes.data?.data?.map((v) => ({ value: v.id, title: v.name })) || []
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchOptions();
//   }, []);

//   return (
//     <div className="w-full py-10 flex flex-col items-center justify-center">
//       <div className="text-center mb-8">
//         <h2 className="text-[#FF006E] text-3xl font-orbitron mb-2">
//           Can’t Find What You Want?
//         </h2>
//         <p className="text-white text-sm">Use the filters and have the time of your life!</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-8 justify-center">
//         {Object.keys(options).map((key) => (
//           <CustomSelect
//             key={key}
//             selectedOption={options[key].find((o) => o.value === filters[key])}
//             setSelectedOption={(value) => handleFilterChange(key, value)}
//             options={options[key]}
//           >
//             {key === "price" && filters.price === "price-range" && (
//               <RangeSlider
//                 min={0}
//                 max={1000}
//                 value={priceRange}
//                 onChange={handleRangeChange}
//               />
//             )}
//           </CustomSelect>
//         ))}
//       </div>

//       <div className="w-full flex justify-center py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1240px]">
//           {events.map((event) => (
//             <button
//               key={event.id}
//               className="relative w-[400px] h-[440px] bg-transparent text-white rounded-b-[2px] overflow-hidden group"
//             >
//               <img
//                 src={event.imageUrl}
//                 alt="event"
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-5 py-4 flex items-center justify-between">
//                 <p className="text-white text-sm font-medium">{event.date}</p>
//                 <span className="bg-[#8338EC] text-white h-[44px] flex items-center justify-center text-[16px] font-semibold px-4 py-1 rounded-sm">
//                   from {event.minPrice}₼
//                 </span>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindWhat;

