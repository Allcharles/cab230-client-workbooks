import { useEffect, useState } from "react";

// UPDATE ME WITH API KEY
const API_KEY = "";
const QUERY = "Brisbane";

function getForecastByQuery(q) {
  const url = `https://api.weatherapi.com/v1/forecast.json?q=${q}&key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.forecast.forecastday[0].hour)
    .then((forecasts) =>
      forecasts.map((forecast) => ({
        time: forecast.time,
        text: forecast.condition.text,
        temp: forecast.temp_c,
        wind: forecast.wind_kph,
      }))
    );
}

export function useWeather() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getForecastByQuery(QUERY)
      .then((headlines) => {
        setHeadlines(headlines);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    headlines,
    error,
  };

  /*
  Above is shorthand for the following
  return {
    loading: loading,
    headlines: headlines,
    error: error
  };
  */
}
