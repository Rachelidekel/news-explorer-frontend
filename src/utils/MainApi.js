class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _customFetch = (url, headers) => {
    return fetch(url, headers).then((res) =>
      res.ok ? res.json() : Promise.reject(res.statusText)
    );
  };

  register = (email, password, name) => {
    return this._customFetch(`${this._baseUrl}/signup`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password, name }),
    });
  };

  login = (email, password) => {
    return this._customFetch(`${this._baseUrl}/signin`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  setToken = (token) => {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  };

  getCurrentUser(token) {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  }

  postArticle(keyword, title, text, date, source, link, image, token) {
    return this._customFetch(`${this._baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: text,
        date: date,
        source: source,
        link: link,
        image: image,
      }),
    });
  }

  deleteArticle(articleId, token) {
    return this._customFetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  }

  getSavedArticles(token) {
    return this._customFetch(`${this._baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  }
}

const mainApi = new Api({
  //baseUrl: "https://api.news-explorer-racheli.students.nomoredomainssbs.ru",
  baseUrl: "http://localhost:3000",
});

export default mainApi;
