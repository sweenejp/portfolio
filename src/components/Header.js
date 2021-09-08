import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1 className="brand__title">
          Jimmy <span>Sweeney</span>
        </h1>
        <p className="brand__subtitle">Websites and Frontend Development</p>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
