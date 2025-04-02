import React from 'react'
import t1 from '../../assets/t1.png';
import make from '../../assets/make.png';
import v8 from '../../assets/v8.mp4';
import Navbar from "../homepage/navbar/Navbar";
import EventSlider from './EventSlider';
const Details = () => {
    const media = [
        { type: "image", url: t1 },
        { type: "image", url: make },
        { type: "video", url: v8 },
      ];
  return (
    <div>
    <Navbar variant="dark" />
     <EventSlider media={media} />
     </div>
  )
}

export default Details
