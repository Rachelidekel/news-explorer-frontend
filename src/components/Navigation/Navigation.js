import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../images/NewsExplorer_logo_white.svg";
import logoBlack from "../../images/NewsExplorer_logo_black.svg";
import logOutIconWhite from "../../images/logout_icon_white.svg";
import logOutIconBlack from "../../images/logout_icon_black.svg";
import hbMenuWhite from "../../images/menu_icon_white.svg";
import hbMenuBlack from "../../images/menu_icon_black.svg";
import closeIcon from "../../images/close_icon.svg";
import Mobile from "../Mobile/Mobile";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation({
  onLogOut,
  isHomePage,
  isLoggedIn,
  onClick,
  isMobileMenuOpen,
  handleMobileMenu,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav
      className={isHomePage ? "navigation" : "navigation_type_save-articles"}
      style={{ borderBottom: isMobileMenuOpen ? "none" : "" }}
    >
      <div
        className={
          !isMobileMenuOpen
            ? "navigation__wrapper"
            : "navigation__wrapper-bg" && isHomePage
            ? "navigation__wrapper-bg"
            : "navigation__wrapper navigation__wrapper_type_save-articles"
        }
      >
        <Link className="navigation__logo" to="/">
          <img src={isHomePage ? logoWhite : logoBlack} alt="logo" />
        </Link>
        <div className="navigation__menu">
          <ul className="navigation__menu-list">
            <li className="navigation__menu-item">
              <NavLink
                exact={true}
                to="/"
                className={
                  isHomePage
                    ? "navigation__link"
                    : "navigation__link navigation__link_black"
                }
                activeClassName={
                  isHomePage
                    ? "navigation__link-active"
                    : "navigation__link-active navigation__link-active_black"
                }
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="navigation__menu-item">
                <NavLink
                  to="/saved-news"
                  className={
                    isHomePage
                      ? "navigation__link"
                      : "navigation__link navigation__link_black"
                  }
                  activeClassName={
                    isHomePage
                      ? "navigation__link-active"
                      : "navigation__link-active navigation__link-active_black"
                  }
                >
                  Saved articles
                </NavLink>
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
              {" "}
              <span className="navigation__button-text">Sign in</span>{" "}
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
              {" "}
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
        <button
          type="button"
          className="navigation__hamburger"
          onClick={handleMobileMenu}
        >
          {!isMobileMenuOpen ? (
            <img
              src={isHomePage ? hbMenuWhite : hbMenuBlack}
              alt="hamburger-icon"
              className="navigation__hamburger-icon"
            />
          ) : (
            <img
              src={closeIcon}
              alt="cross-icon"
              className={
                isHomePage
                  ? "navigation__close-icon"
                  : "navigation__close-icon-black"
              }
            />
          )}
        </button>
      </div>
      <Mobile
        onClick={onClick}
        isMobileMenuOpen={isMobileMenuOpen}
        onLogOut={onLogOut}
        isHomePage={isHomePage}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
}

export default Navigation;
