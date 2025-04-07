import { useEffect, useState } from "react";
import api from "../../api";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/event/getEvents", {
      params: {
        page: 0,
        size: 6
      }
    })
    .then(res => {
      if (res.data.isSuccess) {
        setEvents(res.data.data);
      }
    })
    .catch(err => console.log("Event fetch error:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={event.mediaUrls.find((url) => !url.endsWith(".mp4"))}
            alt="event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#222]">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.venueName}</p>
            <p className="text-sm text-gray-500">{event.formattedDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
