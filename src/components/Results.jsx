import React from "react";

const Results = ({ articles }) => {
  return (
    <section className="results">
      <div className="results__list">
        {articles.map((article) => (
          <div key={article._id} className="article__card">
            <img src={article.media} alt={article.title} />
            <div className="article__description">
              <h2>{article.title}</h2>
              <p className="article__excerpt">{article.excerpt}</p>
              <p className="article__date">
                {article.published_date.slice(0, 10)}
              </p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <p className="article__link">
                  Read more on {article.clean_url}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
