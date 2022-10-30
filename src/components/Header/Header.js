import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SearchForm from "../SearchForm/SearchForm";
import Mobile from "../Mobile/Mobile";

function Header({ isHomePage, cardData, onSignInClick, onLogOut }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className={`${isHomePage ? "header" : "header__black"}`}>
      <div className="header__container">
        <Navigation
          isHomePage={isHomePage}
          onClick={onSignInClick}
          isMoblieMenuOpen={isMobileMenuOpen}
          handleMobileMenu={handleMobileMenu}
          onLogOut={onLogOut}
        />
        <Mobile
          onClick={onSignInClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onLogOut={onLogOut}
          isHomePage={isHomePage}
        />
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
          <SavedNewsHeader
            cardData={cardData}
            handleMobileMenu={handleMobileMenu}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
