import React from "react";
import { Link } from "react-router-dom";
import logOutIconBlack from "../../images/logout_icon_black.svg";

export function Mobile({ isMobileMenuOpen, onClick, isHomePage, onLogOut }) {
  return (
    <div
      className={`navigation__mobile-menu ${
        isMobileMenuOpen ? "navigation__mobile-menu_opened" : ""
      }`}
    >
      <div className="navigation__menu-mobile">
        <ul className="navigation__menu-list navigation__menu-list_mobile">
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
        <button onClick={onClick} type="button" className="navigation__button">
          <span className="navigation__button-text">Sign in</span>
        </button>
      </div>
    </div>
  );
}

export default Mobile;
