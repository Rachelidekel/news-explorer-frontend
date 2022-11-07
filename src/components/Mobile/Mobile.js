import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logOutIconBlack from "../../images/logout_icon_black.svg";
import logOutIconWhite from "../../images/logout_icon_white.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Mobile({
  isMobileMenuOpen,
  onClick,
  isHomePage,
  onLogOut,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div
      className={`navigation__mobile-menu ${
        isMobileMenuOpen ? "navigation__mobile-menu_opened" : ""
      }`}
      style={{ backgroundColor: isHomePage ? "#1a1b22" : "#ffffff" }}
    >
      {isHomePage ? (
        <div className="navigation__menu-mobile">
          <ul className="navigation__menu-list navigation__menu-list_type_mobile">
            <li className="navigation__menu-item">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="navigation__menu-item">
                <Link to="/saved-news" className="navigation__link">
                  Saved articles
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!isLoggedIn ? (
            <button
              onClick={onClick}
              type="button"
              className="navigation__button"
            >
              <span className="navigation__button-text">Sign in</span>
            </button>
          ) : (
            <button
              onClick={onLogOut}
              type="button"
              className={`${
                isHomePage
                  ? "navigation__button navigation__button_white"
                  : "navigation__button navigation__button_black"
              }`}
            >
              <span
                className={`${
                  isHomePage
                    ? "navigation__button-text navigation__button-text-white"
                    : "navigation__button-text navigation__button-text-black"
                }`}
              >
                {currentUser.name}
              </span>
              <img
                src={isHomePage ? logOutIconWhite : logOutIconBlack}
                alt="logout"
                className="navigation__button-icon"
              />
            </button>
          )}
        </div>
      ) : (
        <div className="navigation__menu-mobile">
          <ul className="navigation__menu-list navigation__menu-list_type_mobile">
            <li className="navigation__menu-item">
              <Link to="/" className="navigation__link_black">
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="navigation__menu-item">
                <Link to="/saved-news" className="navigation__link_black">
                  Saved articles
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {isLoggedIn ? (
            <button
              onClick={onLogOut}
              type="button"
              className={`${
                isHomePage
                  ? "navigation__button navigation__button_white"
                  : "navigation__button navigation__button_black"
              }`}
            >
              <span
                className={`${
                  isHomePage
                    ? "navigation__button-text navigation__button-text-white"
                    : "navigation__button-text navigation__button-text-black"
                }`}
              >
                {currentUser.name}
              </span>
              <img
                src={isHomePage ? logOutIconWhite : logOutIconBlack}
                alt="logout"
                className="navigation__button-icon"
              />
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
export default Mobile;
