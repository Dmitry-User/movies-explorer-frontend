import { BASE_URL_BEATFILM } from './constants';

class Api {
  constructor() {
    this._baseUrl = `${BASE_URL_BEATFILM}/beatfilm-movies`;
    this._headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._getResponse);
  }
}

const moviesApi = new Api();

export default moviesApi;
