import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginPopup from "../Login/Login";
import RegisterPopup from "../Register/Register";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import mainApi from "../../utils/MainApi";
import * as newsApi from "../../utils/NewsApi";

let arrayForHoldingCards = [];

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [isAuthError, setIsAuthError] = useState("");

  const [keyword, setKeyword] = useState("");
  const [topOfKeywords, setTopOfKeywords] = useState([]);

  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
  const [isReceivingError, setIsReceivingError] = useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);

  const [moreCards, setMoreCards] = useState([]);
  const [nextAmountOfCards, setNextAmountOfCards] = useState(3);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.location.pathname === "/"
      ? setIsHomePage(true)
      : setIsHomePage(false);
  }, [history]);

  useEffect(() => {
    return history.listen((location) => {
      const homePath = location.pathname === "/";
      if (!homePath) {
        setIsHomePage(false);
      }
      if (homePath) {
        setIsHomePage(true);
      }
    });
  }, [history]);

  useEffect(() => {
    if (token) {
      mainApi
        .getCurrentUser(token)
        .then((userInfo) => {
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          if (err === "Unauthorized") {
            setCurrentUser({});
            localStorage.removeItem("jwt");
            setIsLoggedIn(false);
          }
        });
      mainApi
        .getSavedArticles(token)
        .then((articles) => {
          setSavedCards(articles.reverse());
          counterOfKeywords(articles);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      checkToken();
    }
    // eslint-disable-next-line
  }, []);

  function handleSinginClick() {
    setIsLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsRegistrationSuccessful(false);
  }

  function handleRegisterSubmitClick(email, password, username) {
    mainApi
      .register(email, password, username)
      .then(() => {
        closeAllPopups();
        setIsInfoTooltipOpen(true);
        setIsRegistrationSuccessful(true);
      })
      .catch((err) => {
        setIsAuthError(err);
        console.log(err);
      });
  }

  function handleLoginSubmitClick(email, password) {
    if (!email || !password) {
      return;
    }
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          setToken(res.token);
          checkToken();
          setCurrentUser({});
          closeAllPopups();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsAuthError(err);
      });
  }

  function checkToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      if (!token) {
        setToken(jwt);
      }
      if (location.pathname === "/saved-news") {
        setIsHomePage(false);
      }
      setIsLoggedIn(true);
      mainApi.setToken(jwt);
      mainApi
        .getCurrentUser(jwt)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getSavedArticles(jwt)
        .then((articles) => {
          setSavedCards(articles.reverse());
          counterOfKeywords(articles);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (isLoggedIn) {
        setIsLoggedIn(false);
      }
    }
  }

  function counterOfKeywords(articles) {
    let keywords = articles.map((article) => {
      return article.keyword;
    });

    let counts = keywords.reduce((counts, num) => {
      counts[num] = (counts[num] || 0) + 1;
      return counts;
    }, {});

    const result = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    setTopOfKeywords(result);
  }

  function handleLogOut() {
    setIsLoggedIn(false);
    setIsHomePage(true);
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setToken();
    history.push("/");
  }

  function handleRedirect() {
    if (isRegisterPopupOpen) {
      closeAllPopups();
      setIsLoginPopupOpen(true);
      setIsRegisterPopupOpen(false);
    } else if (isLoginPopupOpen) {
      closeAllPopups();
      setIsRegisterPopupOpen(true);
      setIsLoginPopupOpen(false);
    } else if (isInfoTooltipOpen) {
      closeAllPopups();
      setIsLoginPopupOpen(true);
    } else {
      setIsLoginPopupOpen(true);
    }
  }

  function handleSearchSubmit(keyword) {
    setIsSearchResultOpen(false);
    setIsNothingFoundOpen(false);
    arrayForHoldingCards = [];
    setIsPreloaderOpen(true);

    setIsReceivingError(false);
    setKeyword(keyword);

    newsApi
      .getNews(keyword)
      .then((cards) => {
        setIsPreloaderOpen(false);
        if (cards.totalResults !== 0) {
          setIsSearchResultOpen(true);
          setCards(cards.articles);
        } else if (cards.totalResults === 0) {
          setIsNothingFoundOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsReceivingError(true);
      });
  }

  function addMoreCards(start, end) {
    const slicedPosts = cards.slice(start, end);
    arrayForHoldingCards = [...arrayForHoldingCards, ...slicedPosts];
    return arrayForHoldingCards;
  }

  function handleShowMoreClick() {
    setMoreCards(addMoreCards(nextAmountOfCards, nextAmountOfCards + 3));
    setNextAmountOfCards(nextAmountOfCards + 3);
  }

  function handleSaveArticleSubmit(title, text, date, source, link, image) {
    if (isLoggedIn) {
      mainApi
        .postArticle(keyword, title, text, date, source, link, image, token)
        .then((data) => {
          setSavedCards([...savedCards, data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLoginPopupOpen(true);
    }
  }

  function handleDeleteSavedArticleSubmit(currentArticle) {
    if (isLoggedIn) {
      if (isHomePage) {
        mainApi
          .getSavedArticles(token)
          .then((articles) => {
            let articleId;
            const filteredArticles = articles.filter(
              (article) => article.link !== currentArticle.url
            );

            articles.forEach((art) => {
              if (art.link === currentArticle.url) {
                articleId = art._id;
              }
            });
            setSavedCards(filteredArticles);

            mainApi.deleteArticle(articleId, token).catch((err) => {
              console.log(err);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (!isHomePage) {
        mainApi
          .deleteArticle(currentArticle._id, token)
          .then(() => {
            const newArticles = savedCards.filter(
              (article) => article._id !== currentArticle._id
            );
            setSavedCards(newArticles);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          isHomePage={isHomePage}
          isLoggedIn={isLoggedIn}
          onSignInClick={handleSinginClick}
          onLogOut={handleLogOut}
          isOpen={isLoginPopupOpen || isRegisterPopupOpen}
          savedCards={savedCards}
          onSearchClick={handleSearchSubmit}
          topOfKeywords={topOfKeywords}
        />
        <Switch>
          <Route exact path="/">
            <Main
              savedCards={savedCards}
              isHomePage={isHomePage}
              cards={cards}
              isPreloaderOpen={isPreloaderOpen}
              isSearchResultOpen={isSearchResultOpen}
              isNothingFoundOpen={isNothingFoundOpen}
              handleShowMoreClick={handleShowMoreClick}
              moreCards={moreCards}
              isLoggedIn={isLoggedIn}
              isReceivingError={isReceivingError}
              handleSaveArticleSubmit={handleSaveArticleSubmit}
              handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            isLoggedIn={isLoggedIn}
            setIsLoginPopupOpen={setIsLoginPopupOpen}
          >
            <SavedNews
              savedCards={savedCards}
              isLoggedIn={isLoggedIn}
              tooltipText="Remove from saved"
              handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
              token={token}
            />
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
        {isRegistrationSuccessful && (
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            onRedirect={handleRedirect}
            title="Registration successfully completed!"
            redirectText="Sign in"
          />
        )}
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onRedirect={handleRedirect}
          onLoginSubmit={handleLoginSubmitClick}
          isAuthError={isAuthError}
        />
        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRedirect={handleRedirect}
          onRegisterSubmit={handleRegisterSubmitClick}
          isAuthError={isAuthError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
