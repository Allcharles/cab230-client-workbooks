import { useEffect, useState } from "react";

// UPDATE ME WITH API KEY
const API_KEY = "cf776c5e31ee4390940b6d4bb267ee08";

function getHeadlines(search) {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}&q=${search}`;

  return fetch(url)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles =>
      articles.map(article => ({
        title: article.title,
        url: article.url
      }))
    );
}

export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHeadlines(search)
      .then(headlines => {
        setHeadlines(headlines);
      })
      .catch(e => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return {
    loading,
    headlines,
    error
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
