const Numbers = ({option, setOption, optionID}) => {
    return <div>
    <input
      type="checkbox"
      id="number-option"
      value=""
      className="hidden peer"
      required=""
      checked={option}
      onChange={() => {setOption(optionID)}}
    />
    <label
      htmlFor="number-option"
      className="mb-2 inline-flex items-center justify-between w-full p-3 text-gray-500 bg-textgray border  border-textgray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:bg-amber-300 peer-checked:text-dark hover:text-gray-600 dark:peer-checked:text-gray-300 "
    >
      <div className="block">
        <span></span>
        <div className="w-full text-lg max-[400px]:text-sm font-semibold">Numbers</div>
        <div className="w-full text-sm">
          Click here if your password needs Numbers
        </div>
      </div>
    </label>
  </div>;
  };
  
  export { Numbers };
  