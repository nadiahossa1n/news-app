import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Results from "../components/Results";

const formatDate = (date) => {
  return date ? date.split("-").join("/") : "";
};

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};

const Search = () => {
  const location = useLocation();
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("relevancy");
  const [from, setFrom] = useState("2019/01/01");
  const [to, setTo] = useState(getTodayDate());

  useEffect(() => {
    async function fetchArticles() {
      const options = {
        params: {
          q: id,
          lang: "en",
          sort_by: sort,
          from: formatDate(from),
          to: formatDate(to),
          page: "1",
        },
        headers: {
          "x-api-key": "JDJuB_4CSXHzJnj2JpwGfa0HMc0ByBQTnLKQrqjuwDk",
        },
      };

      try {
        const response = await axios.get(
          "https://api.newscatcherapi.com/v2/search",
          options
        );
        setArticles(response.data.articles || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
    setLoading(true);
    fetchArticles();
  }, [location, id, sort, from, to]);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="parameters">
        <div>
          From&nbsp;
          <input type="date" onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div>
          To&nbsp;
          <input type="date" onChange={(e) => setTo(e.target.value)} />
        </div>
        <div>
          Sort by&nbsp;
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevancy">Relevance</option>
            <option value="date">Most Recent</option>
            <option value="rank">Source Rank</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin size="6x" />
        </div>
      ) : (
        <Results articles={articles} />
      )}
    </div>
  );
};

export default Search;
