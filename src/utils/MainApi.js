
class MainApi {
  constructor({ baseUrl }) {
    this._BASE_URL = baseUrl
  }

  register(name, email, password) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "password": password,
        "email": email
      }
      )
    }).then(this._checkResponse)
  };

  auth(email, password) {
    return fetch(`${this._BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      }
      )
    }).then(this._checkResponse)
  }

  jwtCheck(jwt) {
    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getUserInfo() {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._BASE_URL}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      }
    })
      .then(this._checkResponse)
  }

  setUserInfo({ name, email }) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._checkResponse)
  }
  saveFilm(film) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._BASE_URL}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country : film.country,
        director : film.director,
        duration : film.duration,
        year : film.year,
        description : film.description,
        image : `https://api.nomoreparties.co${film.image.url}`,
        trailer : film.trailerLink,
        thumbnail : `https://api.nomoreparties.co${film.image.formats.thumbnail.url}`,
        movieId : film.id,
        nameRU : film.nameRU,
        nameEN : film.nameEN,

      })
    })
      .then(this._checkResponse)
  }
  unsaveFilm(filmId) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._BASE_URL}/movies/${filmId}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then(this._checkResponse)
  }
  getSavedFilms() {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._BASE_URL}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else {
      var statusCode = res.status
       return res.json().then((res)=>
      {
        return Promise.reject({
          statusCode: statusCode,
          message: res.message
        })
      })
    }
    ;
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.surikov.nomoredomains.monster'
});
export default mainApi
