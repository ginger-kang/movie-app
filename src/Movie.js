import React from 'react';
import PropType from 'prop-types';
import "./Movie.css"

function Movie({year, title, summary, poster}) {
    return (
    <div class="movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
};

export default Movie;