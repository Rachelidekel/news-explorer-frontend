//import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
//import LoginPopup from "../LoginPopup/LoginPopup";
//import RegistrationPopup from "../RegistrationPopup/RegistrationPopup";
//import InfoTooltip from "../InfoTooltip/InfoTooltip";
//import SaveNews from "../SavedNews/SavedNews";
//import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
