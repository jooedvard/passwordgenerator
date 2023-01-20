import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(10);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-3 pb-4 mb-3 w-[300px]">
      <label
        htmlFor="default-range"
        className="flex flex-row justify-between text-lg"
      >
        <span className="text-graytext mb-1">character length</span>
        <span className="text-blue-600">{value}</span>
      </label>
      <input
        id="default-range"
        min={6}
        max={15}
        type="range"
        onChange={onChange}
        value={value}
        className="w-full h-2 bg-graytext rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export { Slider };
