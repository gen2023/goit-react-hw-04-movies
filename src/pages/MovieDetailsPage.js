import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import MoviesPreview from '../components/MoviesPreview';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import moviesApi from '../services/moviesApi';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    vote_average: null,
    overview: null,
    release_date: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .getMovieDetails(movieId)
      .then(results => {
        this.setState({ ...results });
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      title,
      vote_average,
      overview,
      genres,
      id,
      release_date,
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          GO BACK
        </button>
        {poster_path && (
          <MoviesPreview
            poster_path={poster_path}
            title={title}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
            release_date={release_date}
          />
        )}
        <hr />
        <h3>Additional information</h3>
        <Link to={`/movies/${id}/cast`}>cast</Link>
        <br />
        <Link to={`/movies/${id}/reviews`}>reviews</Link>
        <hr />

        <Route path={routes.Cast} render={props => <Cast {...props} />} />
        <Route path={routes.Reviews} render={props => <Reviews {...props} />} />
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.object.isRequired,
    }),
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
