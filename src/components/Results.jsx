import React from "react";

const Results = () => {
  return (
    <div className="rounded-md ml-10 w-80 h-[330px] bg-very-dark-cyan font-space-mono p-10 relative">
      <h3 className="text-white">Tip Amount</h3>
      <p className="text-grayish-cyan mb-[32px]">/person</p>
      <h2 className="text-4xl text-strong-cyan absolute right-10 top-10">
        $0.00
      </h2>
      <h3 className="text-white">Total</h3>
      <p className="text-grayish-cyan">/person</p>
      <h2 className="text-4xl text-strong-cyan absolute right-10 top-28">
        $0.00
      </h2>
      <button className="absolute bottom-8 left-[10%] w-64 h-10 bg-strong-cyan rounded-md text-very-dark-cyan">
        RESET
      </button>
    </div>
  );
};

export default Results;
