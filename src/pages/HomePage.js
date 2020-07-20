import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';

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
    const { movies } = this.state;
    return (
      <>
        <h1>Popular movies today</h1>
        <MoviesList movies={movies} url={routes.movies} />
      </>
    );
  }
}

export default HomePageView;
