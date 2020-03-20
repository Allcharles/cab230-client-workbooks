import React from "react";
import "./App.css";
import Headline from "./components/headline";
import { useNewsArticles } from "./api";

// Do not forget to update API_KEY

function App() {
  const { loading, headlines, error } = useNewsArticles();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      {headlines.map(headline => (
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

export default App;
