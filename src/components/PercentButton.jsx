import React from "react";

const PercentButton = (props) => {
  return (
    <div>
      <button className="rounded-md w-[100px] h-10 bg-very-dark-cyan text-white font-space-mono text-xl hover:bg-light-grayish-cyan hover:text-very-dark-cyan">
        {props.percentValue}
      </button>
    </div>
  );
};

export default PercentButton;
