import { useState } from "react";
import { createModel } from "hox";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return {
    count,
    increment,
    decrement,
  };
};

export default createModel(useCounter);
