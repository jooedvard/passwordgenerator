import { useState } from "react";

const Unit = () => {
  const [srength, setStrength] = useState([true, null, null, null]);

  return (
    <div className="flex flex-row justify-between p-2 mt-2">
      <span className="text-lg text-graytext">Strength</span>
      <div className="flex flex-row gap-2">
        {srength.map((element, index) => {
          return <div className={`w-2 h-6 border border-textgray ${element != null && " bg-dark"}`}></div>;
        })}
      </div>
    </div>
  );
};

export { Unit };
