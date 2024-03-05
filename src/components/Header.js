import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="first-header">
        <span className="ysn">Yaseen</span>
        <span className="ahmed">Ahmed</span>
      </div>
      <div className="sec-header">
        <div className="nav-div">
          <span>Home</span>
          <a className="about-span" href="#about">
            <span>About</span>
          </a>
          <a href="#projects">
            <span>Projects</span>
          </a>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="third-header">
        <div className="green"></div>
        <span>Available for work</span>
      </div>
    </div>
  );
}

export default Header;
