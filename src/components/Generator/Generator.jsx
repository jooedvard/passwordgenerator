import { Lowercase } from "../Checkbox/Lowercase";
import { Numbers } from "../Checkbox/Numbers";
import { Symbols } from "../Checkbox/Symbols";
import { Uppercase } from "../Checkbox/Uppercase";
import { Password } from "../Password/Password";
import { Slider } from "../Slider/Slider";
import { Unit } from "../Unit/Unit";
import { Generate } from "./Generate";

const Generator = ({ title }) => {
  return (
    <div className="">
      <h1 className="text-graytext text-center text-xl mb-5">{title}</h1>
      <div className="p-10 bg-white ">
        <Password></Password>
        <Slider></Slider>
        <Uppercase></Uppercase>
        <Lowercase></Lowercase>
        <Numbers></Numbers>
        <Symbols></Symbols>
        <Unit></Unit>
        <Generate></Generate>
      </div>
    </div>
  );
};

export { Generator };
