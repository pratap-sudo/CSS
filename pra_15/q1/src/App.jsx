import React from "react";
import Child from "./Child";

function App() {

  // Function with multiple arguments
  const showMessage = (name, age) => {
    alert("Name: " + name + " Age: " + age);
  };

  return (
    <div>
      <h2>Passing Function Arguments in React</h2>

      {/* Passing function as prop */}
      <Child sendData={showMessage} />

    </div>
  );
}

export default App;
