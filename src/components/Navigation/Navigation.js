import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../images/NewsExplorer_logo_white.svg";
import logoBlack from "../../images/NewsExplorer_logo_black.svg";
//import logOutIconWhite from "../../images/logout_icon_white.svg";
import logOutIconBlack from "../../images/logout_icon_black.svg";
import hbMenuWhite from "../../images/menu_icon_white.svg";
import hbMenuBlack from "../../images/menu_icon_black.svg";

const Navigation = ({ homePage }) => {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/">
        <img src={homePage ? logoWhite : logoBlack} alt="logo" />
      </Link>
      <div className="navigation__menu">
        <ul className="navigation__menu-list">
          <li className="navigation__menu-item">
            <NavLink
              exact={true}
              to="/"
              className={
                homePage
                  ? "navigation__link"
                  : "navigation__link navigation__link_black"
              }
              activeClassName={` ${
                homePage
                  ? "navigation__link-active"
                  : "navigation__link-active navigation__link-active_black"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__menu-item">
            <NavLink
              to="/saved-news"
              className={
                homePage
                  ? "navigation__link"
                  : "navigation__link navigation__link_black"
              }
              activeClassName={` ${
                homePage
                  ? "navigation__link-active"
                  : "navigation__link-active nav__link-active_black"
              }`}
            >
              Saved articles
            </NavLink>
          </li>
        </ul>
        <button
          className={`${
            homePage
              ? "navigation__button"
              : "navigation__button navigation__button_black"
          }`}
        >
          <span className="navigation__button-text">Sign in</span>
          <img
            src={logOutIconBlack}
            alt="logout"
            className="navigation__button-icon"
          />
        </button>
      </div>
      <button className="navigation__hamburger">
        <img src={homePage ? hbMenuWhite : hbMenuBlack} alt="hamburger-icon" />
      </button>
    </nav>
  );
};

export default Navigation;
