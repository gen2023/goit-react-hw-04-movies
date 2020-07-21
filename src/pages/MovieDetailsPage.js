import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';

import MoviesPreview from '../components/MoviesPreview';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Loader from '../components/Loader';

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
    history.push(location?.state?.from || routes.homePage);
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
        <div className="sectionLink">
          <h3>Additional information</h3>
          <Link to={`/movies/${id}/cast`}>cast</Link>

          <Link to={`/movies/${id}/reviews`}>reviews</Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.cast} render={props => <Cast {...props} />} />
            <Route
              path={routes.reviews}
              render={props => <Reviews {...props} />}
            />
          </Switch>
        </Suspense>
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
