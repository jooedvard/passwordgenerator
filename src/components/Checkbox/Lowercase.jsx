const Lowercase = ({ option }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="lowercase-option"
        value=""
        className="hidden peer"
        required=""
        checked={true}
        readOnly={true}
      />
      <label
        htmlFor="lowercase-option"
        className="mb-4 inline-flex items-center justify-between w-full p-3 text-gray-500 bg-textgray border  border-textgray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:bg-rose-400 peer-checked:text-dark hover:text-gray-600 dark:peer-checked:text-gray-300"
      >
        <div className="block">
          <span></span>
          <div className="w-full text-lg max-[400px]:text-sm font-semibold">Lowercase</div>
          <div className="w-full text-sm">
            Click here if your password needs Lowercase
          </div>
        </div>
      </label>
    </div>
  );
};

export { Lowercase };
