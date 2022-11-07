import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  isHomePage,
  isLoggedIn,
  savedCards,
  onSignInClick,
  onLogOut,
  isOpen,
  onSubmit,
  onSearchClick,
  arrayForHoldingPosts,
  topOfKeywords,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className={`${isHomePage ? "header" : "header__black"}`}>
      <div
        className={`${
          isMobileMenuOpen ? "header__wrapper-sticky" : "header__wrapper"
        }`}
        style={{ opacity: isOpen ? "0.1" : "1" }}
      >
        <Navigation
          isHomePage={isHomePage}
          onClick={onSignInClick}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenu={handleMobileMenu}
          onLogOut={onLogOut}
          isLoggedIn={isLoggedIn}
        />
      </div>
      {isHomePage ? (
        <div className="header__content">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>

          <SearchForm
            isHomePage={isHomePage}
            onSearchClick={onSearchClick}
            arrayForHoldingPosts={arrayForHoldingPosts}
          />
        </div>
      ) : (
        <SavedNewsHeader
          savedCards={savedCards}
          handleMobileMenu={handleMobileMenu}
          topOfKeywords={topOfKeywords}
        />
      )}
    </header>
  );
}

export default Header;
