class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }
  
  async _checkResponseStatus(res) {
    const parsedRes = await res.json();
    return res.ok ? parsedRes : Promise.reject(parsedRes.message);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    }).then(res => this._checkResponseStatus(res));
  };

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    }).then(res => this._checkResponseStatus(res));
  };
  
  unauthorize() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => this._checkResponseStatus(res));
  };
  
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include'
    }).then(res => this._checkResponseStatus(res));
  }
  
  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(res => this._checkResponseStatus(res));
  }
  
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include'
    }).then(res => this._checkResponseStatus(res));
  }
  
  addSavedMovie({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      })
    }).then(res => this._checkResponseStatus(res));
  }
  
  removeSavedMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => this._checkResponseStatus(res));
  }
}

//export default new MainApi('https://api.movieretrieval.nomoredomains.club');
export default new MainApi('http://localhost:3000');
