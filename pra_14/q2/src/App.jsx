import React, { useState } from "react";

function App() {

  // Object to store multiple fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Dynamic input handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    alert("Form Submitted Successfully!");

    // clear form
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dynamic Form Handling</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <h3>Current Form Data</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>

    </div>
  );
}

export default App;