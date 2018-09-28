import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  return (
    <React.Fragment>
      <div className="spacing-div-header" />
      <div className="header">
        <h1>NYTArticleScrubber</h1>
        <div className="link-container">
          <Link
            className={
              window.location.pathname === "/" ? "link active" : "link"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              window.location.pathname === "/Saved" ? "link active" : "link"
            }
            to="/Saved"
          >
            Saved
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
