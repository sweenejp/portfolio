import React from "react";
import ThemeToggler from "./ThemeToggler";

function Header(props) {
  return (
    <header className="header">
      <div className="header__nav-section">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav__list-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="portrait-container">
          <img
            className="portrait"
            src="images/sweeney.jpg"
            alt="Portrait of Jimmy Sweeney"
          />
        </div>
      </div>
      <div className="header__title-section">
        <h1 className="title">Jimmy Sweeney</h1>
        <h2 className="subtitle">Websites and Frontend Development</h2>
        <ThemeToggler {...props} />
      </div>
    </header>
  );
}

export default Header;