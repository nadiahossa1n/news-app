import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import axios from "axios";
import Nav from "../components/Nav";
import { useParams, useLocation, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const location = useLocation();
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchArticles() {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${id}&apiKey=9adf239aadb94664a0d82c31b81e586a`
    );
    setArticles(data.articles);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchArticles();
  }, [location]);

  return (
    <div>
      <header>
        <Nav />
        <SearchBar placeholder="Search over 150,000 news sources and blogs" />
      </header>
      {loading ? (
        <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin size="6x" />
        </div>
      ) : (
        <section className="results">
          <div className="results__list">
            {articles.map(
              (article) =>
                article.title !== "[Removed]" &&
                article.urlToImage != null && (
                  <Link
                    to={`${article.url}`}
                    key={article.url}
                    className="article__card"
                  >
                    {" "}
                    <img src={article.urlToImage} alt={article.title} />
                    <div className="article__description">
                      <p>{article.source.name}</p>
                      <h2>{article.title}</h2>
                    </div>
                  </Link>
                )
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
