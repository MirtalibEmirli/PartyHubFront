import React from 'react'
import EventHeader  from './EventHeader'
import LocationSection from './LocationSection '
const EventDetailsMain = () => {
  return (
    <div className="w-[715px] min-h-[2170px] mt-[39px] ml-[100px]">
        <EventHeader
  date="Tuesday, 14 February"
  title="Party Name Should Go Here!"
  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
/>
<LocationSection></LocationSection>
    </div>
    
  )
}

export default EventDetailsMain