import React, { useEffect, useState } from "react";
import "./hero.css";
function Hero() {
  const tech = [
    "ReactJs",
    "Redux",
    "SQL",
    "Spring Boot",
    "MongoDb",
    "Express JS",
    "Node Js",
    "Javascript",
    "Responsive Design",
  ];
  const [showTech, setTech] = useState(null);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx == tech.length) {
      setIdx(0);
    }
    const clear = setInterval(() => {
      setIdx((pre) => pre + 1);
      setTech(tech[idx]);
    }, 1000);
    return () => clearInterval(clear);
  }, [idx]);
  console.log(showTech);
  return (
    <div id="hero" className="hero">
      <div className="hero-1">
        <div className="hero-top">
          <span className="hero-text web">Web</span>
          <span className="hero-text dev">Developer,</span>
          <span className="hero-text des">Designer.</span>
        </div>
        <div className="hero-bottom">
          <p className="hero-bottom-text">
            "Currently located in Hyderabad, India, I develop interactive
            websites and provide complete solutions for those looking to take
            their businesses online."
          </p>
          <span className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
            dolorem, eveniet dolorum rerum odit a, excepturi rem ad, perferendis
            incidunt earum! Nam?
          </span>
        </div>
      </div>

      <div className="hero-2">
        <h1 className="react">({showTech})</h1>
      </div>
    </div>
  );
}

export default Hero;
