import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../services/moviesApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .getReviews(movieId)
      .then(results => {
        this.setState({ reviews: results });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(item => (
              <li key={item.id}>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }).isRequired,
};

export default Reviews;
