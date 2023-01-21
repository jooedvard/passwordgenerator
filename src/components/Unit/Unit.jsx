import { useState } from "react";

const Unit = ({ passwordStr }) => {

  let className = "bg-green-500";
  if(passwordStr > 1) className = passwordStr <= 2 && passwordStr != 1 ? "bg-amber-500" : "bg-red-500";

  const createBars = () => {
    let bars = [];
    for (let index = 0; index < 4; index++) {
      if (index < passwordStr) {
        bars.push(
          <div
            key={"bar" + index}
            className={`w-2 h-6 border border-textgray ${className}`}
          ></div>
        );
      } else {
        bars.push(
          <div
            key={"bar" + index}
            className={`w-2 h-6 border border-textgray `}
          ></div>
        );
      }
    }

    return bars;
  };
  return (
    <div className="flex flex-row justify-between p-2 mt-2">
      <span className="text-lg text-graytext max-[400px]:text-sm ">Strength</span>
      <div className="flex flex-row gap-2">{createBars()}</div>
    </div>
  );
};

export { Unit };
