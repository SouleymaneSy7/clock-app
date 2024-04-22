import { useState, useEffect } from "react";
import axios from "axios";

export const Quotes = () => {
  const QUOTE_REQUEST_URL = "https://api.quotable.io/quotes/random";
  const [quoteBody, setQuoteBody] = useState(null);
  const [quoteAuthor, setQuoteAuthor] = useState(null);

  const getQuote = () => {
    axios({
      method: "get",
      url: QUOTE_REQUEST_URL,
      responseType: "json",
    })
      .then(function (response) {
        setQuoteBody(response.data[0].content);
        setQuoteAuthor(response.data[0].author);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function getQuoteRefresh() {
    getQuote();
  }

  useEffect(() => {
    let onMounted = true;

    if (onMounted) {
      getQuote();
    }

    return () => {
      onMounted = false;
    };
  }, []);

  return (
    <div className="quote-container">
      <div className="quote">
        <p className="quote__body">&quot;{quoteBody}&quot;</p>
        <h3 className="quote__author">{quoteAuthor}</h3>
      </div>

      <button
        className="quote--refresh-btn"
        type="button"
        onClick={getQuoteRefresh}
        aria-label="Refresh Button for the Quotes"
      >
        <i className="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
};
