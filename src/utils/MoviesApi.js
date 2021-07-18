
class MoviesApi {
  constructor({ baseUrl }) {
    this._BASE_URL = baseUrl
  }

  getAllMovies() {
    return fetch(`${this._BASE_URL}`, {
      method: 'GET',
    }).then(this._checkResponse)
  };


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});
export default moviesApi
