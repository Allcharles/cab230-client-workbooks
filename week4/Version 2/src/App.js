import React from "react";
import "./App.css";
import Headline from "./components/headline";
import { useWeather } from "./api";

// Do not forget to update API_KEY

function App() {
  const { loading, headlines, error } = useWeather();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Brisbane Weather Forecast Today</h1>
      {headlines.map((headline) => (
        <Headline
          key={headline.url}
          time={headline.time}
          text={headline.text}
          temp={headline.temp}
          wind={headline.wind}
        />
      ))}
    </div>
  );
}

export default App;
