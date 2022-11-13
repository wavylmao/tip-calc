import React from "react";

const NumberInput = (props) => {
  return (
    <div className="w-80 relative mt-2 h-12">
      <input
        className="rounded-md cursor-pointer bg-very-light-grayish-cyan text-very-dark-cyan h-12 w-80 font-space-mono text-right pr-4"
        placeholder="0"
        value={null}
      />
      <img
        className="text-grayish-cyan absolute top-[35%] left-4 w-2.5"
        src={props.imageSrc}
      />
    </div>
  );
};

export default NumberInput;
