import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import Results from "../components/Results";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState("politics");

  useEffect(() => {
    async function fetchArticles() {
      const options = {
        params: { topic: topic, lang: "en", countries: "US", page: "1" },
        headers: {
          "x-api-key": "JDJuB_4CSXHzJnj2JpwGfa0HMc0ByBQTnLKQrqjuwDk",
        },
      };

      try {
        const response = await axios.get(
          "https://api.newscatcherapi.com/v2/latest_headlines",
          options
        );
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
  }, [topic]);

  const handleTopicClick = (newTopic) => {
    setTopic(newTopic); // Update the topic state
  };

  return (
    <div>
      <Nav />
      <div className="heading">
        <h2>Latest Headlines</h2>
        <ul className="topics">
          <li>
            <button
              onClick={() => handleTopicClick("politics")}
              style={{ fontWeight: topic === "politics" ? "bold" : "normal" }}
            >
              Politics
            </button>
          </li>
          <li>
            <button onClick={() => handleTopicClick("business")}
              style={{ fontWeight: topic === "business" ? "bold" : "normal" }}>
              Business
            </button>
          </li>
          <li>
            <button onClick={() => handleTopicClick("entertainment")}
              style={{ fontWeight: topic === "entertainment" ? "bold" : "normal" }}>
              Entertainment
            </button>
          </li>
          <li>
            <button onClick={() => handleTopicClick("tech")}
              style={{ fontWeight: topic === "tech" ? "bold" : "normal" }}
              >Technology</button>
          </li>
          <li>
            <button onClick={() => handleTopicClick("sport")}
              style={{ fontWeight: topic === "sport" ? "bold" : "normal" }}
              >Sports</button>
          </li>
        </ul>
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

export default Home;
