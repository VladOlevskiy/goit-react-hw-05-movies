import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7a266da64b855f631bb43154d09644d1';

const getTrendingFilms = async () => {
  try {
    const response = await axios.get(`
${API_URL}trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetailsById = async id => {
  try {
    const response = await axios.get(`
${API_URL}movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getCastById = async id => {
  try {
    const response = await axios.get(`
${API_URL}movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getReviewsById = async id => {
  try {
    const response = await axios.get(`
${API_URL}movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getFilmsBySearchQuery = async searchQuery => {
  try {
    const response = await axios.get(`
${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const Api = {
  getTrendingFilms,
  getDetailsById,
  getCastById,
  getReviewsById,
  getFilmsBySearchQuery,
};
export default Api;
