import React, { useState } from "react";
import "./header.css";
import { ArrowRightOutlined } from "@ant-design/icons";
function Header() {
  const [quick, setQuick] = useState(false);
  const quickfun = () => {
    setQuick(!quick);
    document.body.classList.toggle("overflow");
  };

  return (
    <div className="header">
      <div className="first-header">
        <span className="ysn">Yaseen</span>
        <span className="ahmed">Ahmed</span>
      </div>
      <div className="sec-header">
        <div className="nav-div">
          <a href="#hero" className="about-span">
            <span>Home</span>
          </a>
          <a className="about-span" href="#about">
            <span>About</span>
          </a>
          <a className="about-span" href="#projects">
            <span>Projects</span>
          </a>
          <a className="about-span" href="#contact">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div onClick={quickfun} className="third-header">
        <ArrowRightOutlined
          className="arrow1"
          id={`${quick ? "white-arrow" : "black-arrow"}`}
        />
      </div>

      <div className={`${quick ? "quick-access" : "close-quick"}`}>
        <div className="quick-access-top">
          <button>
            <a target="_blank" href={require("../static/YaseenResume.pdf")}>
              Resume
            </a>
          </button>
        </div>

        <div className="quick-bottom">
          <div className="available">
            <h2>Availalble for freelance work</h2>
            <button>Contact</button>
          </div>
          <div className="links">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yaseen-ahmed-8421351a3/"
            >
              @LinkedIn
            </a>
            <a href="https://github.com/elyassen" target="_blank">
              @Github
            </a>
            <a target="_blank" href="mailto:yaseenseen9@gmail.com">
              @Gmail,
            </a>
            <a target="_blank" href="https://www.instagram.com/yassenahm3d/">
              @Instagram.
            </a>
          </div>
        </div>
        <h3 className="location">
          Hyderabad,India <span>2024</span>
        </h3>
      </div>
    </div>
  );
}

export default Header;
