import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isHomePage, setIsHomePage] = useState();
  const [cardData, setCardData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setIsHomePage(false) : setIsHomePage(true);
  }, [location]);

  function handlePopupClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleLogOut() {
    setIsHomePage(true);
  }

  return (
    <div className="App">
      <Header
        isHomePage={isHomePage}
        cardData={cardData}
        onSignInClick={handlePopupClick}
        onLogOut={handleLogOut}
      />
      <Switch>
        <Route path="/saved-news">
          <SavedNews isHomePage={isHomePage} />
        </Route>
        <Route exact path="/">
          <Main isHomePage={isHomePage} cardData={cardData} />
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
