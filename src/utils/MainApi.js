import request from './request';
import { BASE_URL_BEATFILM } from './constants';

export const getUser = () => {
  return request({
    url: '/users/me',
    method: 'GET',
  });
};

export const setUser = ({ name, email }) => {
  return request({
    url: '/users/me',
    method: 'PATCH',
    data: { name, email },
  });
};

export const register = ({ name, email, password }) => {
  return request({
    url: '/signup',
    method: 'POST',
    data: { name, email, password },
  });
};

export const authorize = ({ email, password }) => {
  return request({
    url: '/signin',
    method: 'POST',
    data: { email, password },
  });
};

export const logout = () => {
  return request({
    url: '/signout',
    method: 'POST',
  });
};

export const getMovies = () => {
  return request({
    url: '/movies',
    method: 'GET',
  });
};

export const addMovie = (movie) => {
  return request({
    url: '/movies',
    method: 'POST',
    data: {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${BASE_URL_BEATFILM}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${BASE_URL_BEATFILM}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    },
  });
};

export const deleteMovie = (movieId) => {
  return request({
    url: `/movies/${movieId}`,
    method: 'DELETE',
  });
};
