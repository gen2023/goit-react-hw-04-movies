import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import Notification from '../components/Notification';

import moviesApi from '../services/moviesApi';
import routes from '../routes';

class HomePageView extends Component {
  state = {
    movies: [],
    error: '',
  };

  componentDidMount() {
    moviesApi
      .getPopularMovie()
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { movies, error } = this.state;
    return (
      <>
        {error && <Notification message={`ERROR: ${error.message}`} />}

        <h1>Popular movies today</h1>
        {!error && movies && <MoviesList movies={movies} url={routes.movies} />}
      </>
    );
  }
}

export default HomePageView;
