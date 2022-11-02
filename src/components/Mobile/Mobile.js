import React from "react";
import { Link } from "react-router-dom";
import logOutIconBlack from "../../images/logout_icon_black.svg";

export function Mobile({ isMobileMenuOpen, onClick, isHomePage, onLogOut }) {
  return (
    <nav
      className={`header__mobile-menu ${
        isMobileMenuOpen ? "header__mobile-menu_opened" : ""
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
            <li className="navigation__menu-item">
              <Link to="/saved-news" className="navigation__link">
                Saved articles
              </Link>
            </li>
          </ul>
          <button
            onClick={onClick}
            type="button"
            className="navigation__button"
          >
            <span className="navigation__button-text">Sign in</span>
          </button>
        </div>
      ) : (
        <div className="navigation__menu-mobile">
          <ul className="navigation__menu-list navigation__menu-list_type_mobile">
            <li className="navigation__menu-item">
              <Link to="/" className="navigation__link_black">
                Home
              </Link>
            </li>
            <li className="navigation__menu-item">
              <Link to="/saved-news" className="navigation__link_black">
                Saved articles
              </Link>
            </li>
          </ul>
          <button
            onClick={onLogOut}
            type="button"
            className="navigation__button navigation__button_black"
          >
            <span className="navigation__button-text navigation__button-text-black">
              Racheli
            </span>
            <img
              src={logOutIconBlack}
              alt="logout"
              className="navigation__button-icon"
            />
          </button>
        </div>
      )}
    </nav>
  );
}
export default Mobile;
