import React, { useState } from "react";
import "./App.css";
import Headline from "./components/headline";
import { useWeather } from "./api";

// Do not forget to update API_KEY

function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("Brisbane");

  const resetSearch = () => {
    setInnerSearch("");
    props.onSubmit("");
  };

  return (
    <div>
      <input
        aria-labelledby="search-button"
        name="search"
        id="search"
        type="search"
        value={innerSearch}
        onChange={(event) => {
          setInnerSearch(event.target.value);
        }}
      />
      <button id="search-button" type="button" onClick={() => props.onSubmit(innerSearch)}>
        Search
      </button>
      <button id="search-button" type="button" onClick={resetSearch}>
        Reset
      </button>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("Brisbane");
  const { loading, headlines, error } = useWeather(search);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>${search} Weather Forecast Today</h1>
      <SearchBar onSubmit={setSearch} />

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
