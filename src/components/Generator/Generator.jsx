import { useState } from "react";

import { Lowercase } from "../Checkbox/Lowercase";
import { Numbers } from "../Checkbox/Numbers";
import { Symbols } from "../Checkbox/Symbols";
import { Uppercase } from "../Checkbox/Uppercase";
import { Password } from "../Password/Password";
import { Slider } from "../Slider/Slider";
import { Unit } from "../Unit/Unit";
import { Generate } from "./Generate";

import { uppercase, lowercase, numbers, symbols } from "../../constant";

const Generator = ({ title }) => {

  const [password, setPassword] = useState(null);
  const [sliderValue, setSliderValue ] = useState(10);
  const [passwordStr, setPasswordStr] = useState(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false
  });

  const setOptionByKey = (key) => {
    setOptions( prevOptions => {
      let copy = Object.assign({} , prevOptions);
      copy[key] = !options[key];
      return copy;
    })
  }

  const onsetSliderValue = (e) => {
    setSliderValue(e.target.value);
  };

  const getPasswordStr = () => {
    let count = 0;
    for (const key in options) {
      options[key] && count++;
    }
    setPasswordStr(count);
  }

  const generatePassword = (e) => {
    let password = [];
    let functions = [
      () => {options.uppercase && password.push(uppercase[ Math.floor(Math.random() * uppercase.length)]);},
      () => {options.lowercase && password.push(lowercase[ Math.floor(Math.random() * lowercase.length)]);},
      () => {options.numbers && password.push(numbers[ Math.floor(Math.random() * numbers.length)]);},
      () => {options.symbols && password.push(symbols[ Math.floor(Math.random() * symbols.length)]);},

    ]
      
    while(password.length != sliderValue){
      let random = Math.floor(Math.random() * functions.length);
      let run = functions[random];
      run();
    }

    setPassword(password);
    getPasswordStr();
  }

  return (
    <div className="">
      <h1 className="text-graytext text-center text-xl mb-5">{title}</h1>
      <div className="p-10 bg-white max-[400px]:p-3">
        <Password render={() => password == null ? "Your password will be here" : password}></Password>
        <Slider value={sliderValue} setSliderValue={onsetSliderValue}></Slider>
        <Uppercase option={options.uppercase} setOption={setOptionByKey} optionID="uppercase"></Uppercase>
        <Lowercase option={options.lowercase}></Lowercase>
        <Numbers option={options.numbers} setOption={setOptionByKey} optionID="numbers"></Numbers>
        <Symbols option={options.symbols} setOption={setOptionByKey} optionID="symbols"></Symbols>
        <Unit passwordStr={passwordStr}></Unit>
        <Generate generatePassword={generatePassword}></Generate>
      </div>
    </div>
  );
};

export { Generator };
