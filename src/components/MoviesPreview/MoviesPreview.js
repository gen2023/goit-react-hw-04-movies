import React from 'react';
import PropTypes from 'prop-types';
import './moviesPreview.css';

const MoviesPreview = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  release_date,
}) => {
  return (
    <>
      <div className="moviesPreviewContent">
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        )}
        <div className="moviesPreviewOptions">
          {release_date && (
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
          )}
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MoviesPreview.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  release_date: PropTypes.string.isRequired,
};

export default MoviesPreview;
