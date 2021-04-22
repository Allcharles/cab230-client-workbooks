import jwt from "jsonwebtoken";
import "./App.css";

const API_URL = "http://131.181.190.87:3000";

function App() {
  function login() {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ email: "example@api.com", password: "asdlkfj1" }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(jwt.decode(res.token));
        localStorage.setItem("token", res.token);
      });
  }

  /**
   * Creates an authenticated request to the server
   * @param {string} route Route path of authenticated route
   */
  function authenticatedRequest(route) {
    const url = `${API_URL}${route}`;
    const token = localStorage.getItem("token");
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return fetch(url, { headers })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  return (
    <div>
      <h1>JWT Token Example</h1>

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
