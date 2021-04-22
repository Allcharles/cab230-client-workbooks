import React, { useState } from "react";
import "./App.css";
import Headline from "./components/headline";
import { useNewsArticles } from "./api";

// Do not forget to update API_KEY

function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");

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
        onChange={event => {
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
  const [search, setSearch] = useState("");
  const { loading, headlines, error } = useNewsArticles(search);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>{search ? `News Headlines: ${search}` : "Top Headlines"}</h1>
      <SearchBar onSubmit={setSearch} />

      {headlines.length > 0 ? (
        headlines.map(headline => <Headline key={headline.url} title={headline.title} />)
      ) : (
        <h2>No matching headlines</h2>
      )}
    </div>
  );
}

export default App;
