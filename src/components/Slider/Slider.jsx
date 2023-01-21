
const Slider = ({value, setSliderValue }) => {
  
  return (
    <div className="p-3 pb-4 mb-3 max-[400px]:w-full w-[300px]">
      <label
        htmlFor="default-range"
        className="flex flex-row justify-between text-lg"
      >
        <span className="text-graytext mb-1 max-[400px]:text-sm ">character length</span>
        <span className="text-blue-600 max-[400px]:text-sm ">{value}</span>
      </label>
      <input
        id="default-range"
        min={6}
        max={15}
        type="range"
        onChange={setSliderValue}
        value={value}
        className="w-full h-2 bg-graytext rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export { Slider };
