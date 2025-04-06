import React from "react";
import CountUp from "react-countup";

const AnimateCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        end={amount}
        duration={4}
        separator=","
        decimal="."
        decimals={2}
        prefix="$"
      />
      <span className="text-xs text-gray-500"> USD</span>
    </div>
  );
};

export default AnimateCounter;
