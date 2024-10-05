import React from "react";
import SearchBar from "./SearchBar";
import newspaper from "../assets/newspaper.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav__container">
      <div className="nav__bar">
        <Link to="/">
          <div className="logo__wrapper">
            <img className="logo" src={newspaper} alt="" />
            <h3>newsfeed</h3>
          </div>
        </Link>
        <SearchBar placeholder={"Search articles..."} />
      </div>
    </div>
  );
};

export default Nav;
