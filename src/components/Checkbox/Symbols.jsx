const Symbols = () => {
    return <div>
    <input
      type="checkbox"
      id="symbol-option"
      value=""
      className="hidden peer"
      required=""
    />
    <label
       htmlFor="symbol-option"
      className="mt-2 inline-flex items-center justify-between w-full p-3 text-gray-500 bg-textgray border  border-textgray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:bg-emerald-600 peer-checked:text-dark hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600"
    >
      <div  className="block">
        <span></span>
        <div  className="w-full text-lg font-semibold">Symbols</div>
        <div  className="w-full text-sm">
          Click here if your password needs Symbold
        </div>
      </div>
    </label>
  </div>;
  };
  
  export { Symbols };
  