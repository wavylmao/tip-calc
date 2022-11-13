import React from "react";
import PercentButton from "./PercentButton";

const ButtonInputSection = (props) => {
  return (
    <div className="pb-5">
      <h3 className="font-space-mono text-dark-grayish-cyan">{props.header}</h3>
      <PercentButton />
    </div>
  );
};

export default ButtonInputSection;
