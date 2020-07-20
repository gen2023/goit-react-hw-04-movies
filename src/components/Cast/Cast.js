import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../services/moviesApi';
import './cast.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .getCast(movieId)
      .then(results => {
        this.setState({ cast: results });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <div className="castContent">
          <ul>
            {cast.map(item => (
              <li key={item.cast_id}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${item.profile_path}`}
                    alt={item.character}
                  />
                )}
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

Cast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }).isRequired,
  }),
};

export default Cast;
