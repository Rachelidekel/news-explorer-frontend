import React from "react";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SearchForm from "../SearchForm/SearchForm";

function Header({ isHomePage, cardData, onSignInClick }) {
  return (
    <header className={`${isHomePage ? "header" : "header__black"}`}>
      <div className="header__container">
        <Navigation isHomePage={isHomePage} onClick={onSignInClick} />
        {isHomePage ? (
          <div className="header__content">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>

            <SearchForm isHomePage={isHomePage} />
          </div>
        ) : (
          <SavedNewsHeader cardData={cardData} />
        )}
      </div>
    </header>
  );
}

export default Header;
