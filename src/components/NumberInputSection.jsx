import React from "react";
import NumberInput from "./NumberInput";

const OptionsSection = (props) => {
  return (
    <div className="mb-5">
      <h3 className="font-space-mono text-dark-grayish-cyan">{props.header}</h3>
      <NumberInput imageSrc={props.imageSrc} />
    </div>
  );
};

export default OptionsSection;
