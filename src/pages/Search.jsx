import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchArticles() {
      const options = {
        params: { q: id, lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
          'x-api-key': 'JDJuB_4CSXHzJnj2JpwGfa0HMc0ByBQTnLKQrqjuwDk',
        }
      };
    
      try {
        const response = await axios.get('https://api.newscatcherapi.com/v2/search', options);
        setArticles(response.data.articles || []);
        console.log(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
    setLoading(true);
    fetchArticles();
  }, [location, id]);

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
              ( <>
                  <Link
                    to={`${article._id}`}
                    key={article._id}
                    className="article__card"
                  >
                    {" "}
                    <img src={article.media} alt={article.title} />
                    <div className="article__description">
                      <p>{article.clean_url}</p>
                      <h2>{article.title}</h2>
                    </div>
                  </Link>
                  </>
                )
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
