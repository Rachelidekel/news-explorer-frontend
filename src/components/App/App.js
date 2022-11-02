import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginPopup from "../Login/Login";
import RegisterPopup from "../Register/Register";

function App() {
  const [isHomePage, setIsHomePage] = useState();
  const [cardData, setCardData] = useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setIsHomePage(false) : setIsHomePage(true);
  }, [location]);

  function handleSinginClick() {
    setIsLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  }

  function handleLogOut() {
    setIsHomePage(true);
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
    } else {
      setIsLoginPopupOpen(true);
    }
  }

  return (
    <div className="App">
      <Header
        isHomePage={isHomePage}
        cardData={cardData}
        onSignInClick={handleSinginClick}
        onLogOut={handleLogOut}
        isOpen={isLoginPopupOpen || isRegisterPopupOpen}
      />
      <Switch>
        <Route path="/saved-news">
          <SavedNews isHomePage={isHomePage} />
        </Route>
        <Route exact path="/">
          <Main
            isHomePage={isHomePage}
            cardData={cardData}
            setCardData={setCardData}
          />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onRedirect={handleRedirect}
      />
      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onRedirect={handleRedirect}
      />
    </div>
  );
}

export default App;
