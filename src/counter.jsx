import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
}

export default Counter;
