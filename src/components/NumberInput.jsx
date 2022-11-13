import React from "react";

const NumberInput = (props) => {
  return (
    <div className="w-72 relative mt-1">
      <input
        className="cursor-pointer bg-very-light-grayish-cyan text-very-dark-cyan h-9 w-72 font-space-mono text-right pr-2"
        placeholder="0"
      />
      <img
        className="text-grayish-cyan absolute top-[25%] left-2"
        src={props.imageSrc}
      />
    </div>
  );
};

export default NumberInput;
