import React from "react";
import PercentButton from "./PercentButton";
import ButtonSizedInput from "./ButtonSizedInput";

const ButtonInputSection = (props) => {
  return (
    <div className="mb-5">
      <h3 className="font-space-mono text-dark-grayish-cyan">{props.header}</h3>
      <div className="grid grid-cols-3 gap-y-3 mt-3">
        <PercentButton percentValue="5%" />
        <PercentButton percentValue="10%" />
        <PercentButton percentValue="15%" />
        <PercentButton percentValue="25%" />
        <PercentButton percentValue="50%" />
        <ButtonSizedInput />
      </div>
    </div>
  );
};

export default ButtonInputSection;
