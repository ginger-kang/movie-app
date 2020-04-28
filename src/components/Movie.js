import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import "./Movie.css";

function Movie({ year, title, summary, poster, rating }) {
    return (
        <Link
            to={{
                pathname: "/movie-detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    rating
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <div className="movie__rating">
                        SUMMARY<span className="rating">{rating}
                        </span>
                    </div>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    rating: PropType.number.isRequired
};

export default Movie;