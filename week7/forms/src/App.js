import React, { useState } from "react";
import "./App.css";

function App() {
  const [controlledInput, setControlledInput] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Hello CAB230</h1>

      {/* Uncontrolled form */}
      <h2>Uncontrolled Form</h2>
      <form
        onSubmit={(event) => {
          console.log("Uncontrolled onSubmit: ", event.target.elements.uncontrolled.value);
          event.preventDefault();
        }}
      >
        <label htmlFor="uncontrolled">Your Name: </label>
        <input id="uncontrolled" name="uncontrolled" type="text"></input>
        <button type="submit">Submit</button>
      </form>

      {/* Controlled form */}
      <h2>Controlled Form: {controlledInput}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="controlled">Your Name: </label>
        <input
          id="controlled"
          name="controlled"
          type="text"
          value={controlledInput}
          onChange={(event) => {
            const { value } = event.target;

            if (/[0-9]/.test(value)) {
              setError("Names shouldn't have numbers");
            } else {
              setError(null);
            }

            setControlledInput(event.target.value);
          }}
        ></input>

        {error != null ? <p>Error: {error}</p> : null}
      </form>
    </div>
  );
}

export default App;
