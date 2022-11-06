const API_KEY = "ddbc9bd9f88d48b495bcda387e42674e";
const NEWS_URL = "https://newsapi.org";
//"https://nomoreparties.co"

const customFetch = (url, headers) => {
  return fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );
};

const past7Days = [...Array(7).keys()].map((index) => {
  const date = new Date();
  date.setDate(date.getDate() - index);

  return date.toLocaleDateString("en-CA");
});

export const getNews = (keyword) => {
  return customFetch(
    `${NEWS_URL}/v2/everything?q=${keyword}&from=${past7Days[6]}&to=${past7Days[0]}&pageSize=100&apiKey=${API_KEY}`
  );
};

//"https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[your_key]"
