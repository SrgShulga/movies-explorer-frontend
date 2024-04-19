import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor({ apiUrl }) {
    this._baseUrl = apiUrl;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }
}

const moviesApi = new MoviesApi({ apiUrl: MOVIES_URL });

export default moviesApi;