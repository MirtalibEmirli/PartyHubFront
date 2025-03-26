import React from "react";
import { FaCaretDown } from "react-icons/fa";

const CustomSelect = ({ selectedOption, setSelectedOption, options, logo }) => {
  return (
    <div
      className={`relative border-[1px] border-zinc-400   
      ${logo ? "h-[33px] w-[150px]" : "h-[30px] w-[133px]"} focus-within:border-white  
       rounded-md flex items-center justify-between px-3 `}
    >
      {/* Logo */}
      {logo && (
        <img src={logo} alt="logo" className="h-5 w-5  " />
      )}

      {/* Seçim üçün görünməz sahə */}
      <select 
        onChange={(e)=>{
          const selectedItem=options.find(
            (item)=> item.value=== e.target.value.trim()
          )
          setSelectedOption(selectedItem)
        }}         
        className="absolute inset-0 w-full text-lg h-full opacity-0 cursor-pointer focus:outline-none"
      >
        {options.map((item) => (
          <option key={item.value} className="text-lg bg-black" value={item.value}>
            {item.title}
          </option>
        ))}

      </select>

      
      <p className="text-white text-lg font-sans flex text-center">
        {selectedOption.title}
      </p>

     
      <FaCaretDown className="text-white" />
    </div>
  );
};

export default CustomSelect;
