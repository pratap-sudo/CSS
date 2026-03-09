import React, { useState } from "react";
import Child from "./Child";

function App() {

  const [count, setCount] = useState(0);

  // Function to update counter
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter Value: {count}</h2>

      {/* Passing function to child */}
      <Child updateCounter={increaseCount} />

    </div>
  );
}

export default App;