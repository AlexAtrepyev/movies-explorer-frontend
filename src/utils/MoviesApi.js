class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
  
  _checkResponseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }
  
  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      //credentials: 'include'
    }).then(res => this._checkResponseStatus(res));
  }
}

export default new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
