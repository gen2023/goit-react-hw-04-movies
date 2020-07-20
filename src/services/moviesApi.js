import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const key = '7d9df5dfa812832fa78dacf66d6dbcaa';

export default {
  async getPopularMovie() {
    return await axios
      .get(`/trending/movie/day?api_key=${key}`)
      .then(response => response.data.results);
  },

  async getSearchMovie(query) {
    return await axios
      .get(
        `/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      .then(response => response.data.results);
  },

  async getMovieDetails(movieId) {
    return await axios
      .get(`/movie/${movieId}?api_key=${key}&language=en-US`)
      .then(response => response.data);
  },

  async getReviews(movieId) {
    return await axios
      .get(`/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
      .then(response => response.data.results);
  },
  async getCast(movieId) {
    return await axios
      .get(`/movie/${movieId}/credits?api_key=${key}`)
      .then(response => response.data.cast);
  },
};
