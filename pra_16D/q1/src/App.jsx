import React from "react";
import Child from "./Child";

function App() {

  // Function with arguments
  const showData = (name, course) => {
    alert("Name: " + name + "\nCourse: " + course);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Passing Function Arguments Example</h2>

      {/* Pass function as prop */}
      <Child sendData={showData} />

    </div>
  );
}

export default App;