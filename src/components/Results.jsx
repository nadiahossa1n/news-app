import React from 'react'
import { Link } from 'react-router-dom'

const Results = ({ articles }) => {
  return (
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
  )
}

export default Results
