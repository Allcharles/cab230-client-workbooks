import React, { useState } from "react";
import "./App.css";
import Headline from "./components/headline";
import User from "./components/user";

function fetchUser() {
  const url = "https://reqres.in/api/users/3";
  return fetch(url)
    .then(res => res.json())
    .then(res => res.data);
}

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <Headline title="Like Counter" />

      <h1>User Details</h1>
      <button
        onClick={() => {
          fetchUser().then(user => setUser(user));
        }}
      >
        Get User
      </button>
      <User {...user} />
    </div>
  );
}

export default App;
