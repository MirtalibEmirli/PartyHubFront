import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const CustomSelect = ({ selectedOption, setSelectedOption, options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setIsOpen(false));

  const handleSelect = (option) => {
    if (option.value === "price-range") {
      if (selectedOption?.value === "price-range") {
        setIsOpen((prev) => !prev); // Toggle open/close
      } else {
        setSelectedOption(option);
        setIsOpen(true);
      }
    } else {
      setSelectedOption(option);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-[250px]" ref={ref}>
      <button
        className="bg-[#2d2d2d] text-white px-4 py-2 w-full rounded-md border"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption?.title || "Select"}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 w-full bg-[#2d2d2d] rounded-md p-2 shadow-lg z-20">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer text-white px-2 py-1 hover:bg-[#444]"
            >
              {option.title}
            </div>
          ))}

         
          {selectedOption?.value === "price-range" && isOpen && children}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
