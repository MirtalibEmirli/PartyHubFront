import React from 'react'
import t1 from '../../assets/1292 1.png';

import Navbar from "../homepage/navbar/Navbar";
import EventSlider from './EventSlider';
import EventDetailsMain from './EventDetailsMain';

const Details = () => {
    const media = [
        { type: "image", url: t1 },
        { type: "image", url: t1 },
        { type: "video", url: t1 },
      ];
  return (
    <div className="bg-[#0f0f1f] min-h-screen">
    <Navbar variant="dark" />
     <EventSlider media={media} />
     <EventDetailsMain></EventDetailsMain>
    
   
     </div>
  )
}

export default Details
