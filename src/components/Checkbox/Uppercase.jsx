const Uppercase = () => {
  return (
    <div>
      <input
        type="checkbox"
        id="uppercase-option"
        value=""
        className="hidden peer"
        required=""
      />
      <label
        htmlFor="uppercase-option"
        className="mb-4 mt-2 inline-flex items-center justify-between w-full p-3 text-gray-500 bg-textgray border  border-textgray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:bg-blue-600 peer-checked:text-dark  hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600"
      >
        <div className="block">
          <span></span>
          <div className="w-full text-lg font-semibold">Uppercase</div>
          <div className="w-full text-sm">
            Click here if your password needs Uppercase
          </div>
        </div>
      </label>
    </div>
  );
};

export { Uppercase };
