import React from "react";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SearchForm from "../SearchForm/SearchForm";
import { useHomePage } from "../../contexts/HomePageContext";

function Header ()  {
  const { homePage } = useHomePage();
  return (
    <header className={`${homePage ? "header" : "header header_black"}`}>
      <div className="header__container">
        <Navigation homePage={homePage} />

        {homePage ? (
          <div className="header__content">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>

            <SearchForm />
          </div>
        ) : (
          <SavedNewsHeader />
        )}
      </div>
    </header>
  );
};

export default Header;
