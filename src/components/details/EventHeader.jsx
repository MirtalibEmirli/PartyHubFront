

import React from 'react'

const EventHeader = ({date,title,subtitle}) => {
  return (
    <div className='space-y-2'>
         <p className='h-[30px] flex items-center text-[20px] leading-[20px] font-semibold font-poppins text-white'>{date}</p>
         <h1 className='w-[715px] h-[120px] flex items-center text-white text-[48px] leading-[48px] font-bold font-orbitron'>{title}</h1>
         <p className='w-[715px] h-[48px] flex items-center text-[16px] leading-[16px] font-normal font-poppins text-white'>{subtitle}</p>
    </div>
  )
}

export default EventHeader