import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav__bar">
      <div className="logo__wrapper">
        <div className="logo__blue">News</div>{" "}
        <span className="logo__white">Feed</span>
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <a href="/">Home</a>
        </li>
        <li className="nav__link">About</li>
        <li className="nav__link">Contact</li>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </ul>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="menu__links">
          <li className="menu__link">
            <a href="/">Home</a>
          </li>
          <li className="menu__link no-cursor">About</li>
          <li className="menu__link no-cursor">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
