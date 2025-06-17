import React, { useState, useEffect } from 'react';
import './Counter.css';
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn increment" onClick={handleIncrement}>Increment</button>
      <button
        className="btn decrement"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button className="btn reset" onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Counter;
