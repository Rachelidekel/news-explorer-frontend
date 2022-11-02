import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../../images/github_icon.svg";
import facebookIcon from "../../images/facebook_icon.svg";

function Footer() {
  const initYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {initYear} Supersite, Powered by News API
      </p>
      <nav className="footer__navigation">
        <ul className="footer__links">
          <li className="footer__link-item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__link-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://practicum.com/"
            >
              Practicum
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li className="footer__icon">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Rachelidekel"
            >
              <img
                className="footer__icon-link"
                src={githubIcon}
                alt="github icon"
              />
            </a>
          </li>
          <li className="footer__icon">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=1789225613"
            >
              <img
                className="footer__icon-link"
                src={facebookIcon}
                alt="facebook icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
