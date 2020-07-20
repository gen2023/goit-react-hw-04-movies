import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../components/MoviesList';
import Modal from '../components/Modal';

import moviesApi from '../services/moviesApi';

class MoviesPages extends Component {
  state = {
    movies: [],
    query: '',
    message: '',
    showModal: false,
  };
  formSubmitHandler = query => {
    moviesApi
      .getSearchMovie(query)
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => this.setState({ error }));
  };
  handleChange = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };

  fetchMovies = () => {
    const { query } = this.state;

    moviesApi
      .getSearchMovie(query)
      .then(movies =>
        this.setState(prevState => ({
          movies: [...prevState.movies, ...movies],
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSubmit = event => {
    const { query } = this.state;

    event.preventDefault();
    if (!query) {
      this.closeModal();
      return this.setState({ message: 'Please fill in form for search' });
    }
    this.fetchMovies();
    this.setState({ query: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { movies, query, message, showModal } = this.state;
    const { match } = this.props;
    return (
      <>
        {message !== '' && showModal ? (
          <Modal onClose={this.closeModal}>{message}</Modal>
        ) : null}
        <h2>Find a movie for yourself</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={query}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <MoviesList movies={movies} url={match.url} />
      </>
    );
  }
}

MoviesPages.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default MoviesPages;
