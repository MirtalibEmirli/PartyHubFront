import React from "react";

const RangeSlider = ({ min, max, value, onChange }) => {
  const handleMinChange = (e) => {
    const newMin = Math.min(+e.target.value, value[1] - 1);
    onChange([newMin, value[1]]);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(+e.target.value, value[0] + 1);
    onChange([value[0], newMax]);
  };

  const handleRangeChange = (index, newValue) => {
    const updated = [...value];
    updated[index] = newValue;
    if (updated[0] < updated[1]) {
      onChange(updated);
    }
  };

  return (
    <div className="bg-[#2d2d2d] p-4 rounded-md w-[250px]">
      <p className="text-white font-semibold mb-2">Price Range</p>

      <div className="relative h-8 flex items-center mb-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={(e) => handleRangeChange(0, +e.target.value)}
          className="absolute w-full z-10 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: value[0] > max - 100 ? 5 : 10 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => handleRangeChange(1, +e.target.value)}
          className="absolute w-full z-20 appearance-none bg-transparent pointer-events-none"
        />
        <div className="w-full h-[5px] bg-gray-600 rounded relative z-0" />
      </div>

      <div className="flex justify-between items-center gap-2">
        <input
          type="number"
          min={min}
          max={value[1] - 1}
          value={value[0]}
          onChange={handleMinChange}
          className="w-[100px] p-2 rounded text-center bg-white text-black"
        />
        <input
          type="number"
          min={value[0] + 1}
          max={max}
          value={value[1]}
          onChange={handleMaxChange}
          className="w-[100px] p-2 rounded text-center bg-white text-black"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
