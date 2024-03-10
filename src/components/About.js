import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  const aboutRef = useRef(null);
  const [skill, setSkill] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const html = 90;
  const css = 97;
  const js = 96;
  const react = 90;
  const redux = 90;
  const responsiveDesign = 95;
  const node = 85;
  const expressjs = 90;
  const mongoDb = 85;
  const sql = 75;
  const java = 80;
  const springBoot = 70;
  const htmlLevel = {
    background: " red",
    height: "100%",
    width: `${html}%`,

    transition: "width 2s ease-in-out",
    transitionDelay: "1s",
  };
  const cssLevel = {
    background: "red",
    height: "100%",
    width: `${css}%`,

    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const jsLevel = {
    background: "red",
    height: "100%",
    width: `${js}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const reactLevel = {
    background: "red",
    height: "100%",
    width: `${react}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const reduxLevel = {
    background: "red",
    height: "100%",
    width: `${redux}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const responsiveLevel = {
    background: "red",
    height: "100%",
    width: `${responsiveDesign}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const nodeLevel = {
    background: "red",
    height: "100%",
    width: `${node}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const expressLevel = {
    background: "red",
    height: "100%",
    width: `${expressjs}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const mongoDblevel = {
    background: "red",
    height: "100%",
    width: `${mongoDb}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const sqllevel = {
    background: "red",
    height: "100%",
    width: `${sql}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const javaLevel = {
    background: "red",
    height: "100%",
    width: `${java}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  const springlevel = {
    background: "red",
    height: "100%",
    width: `${springBoot}%`,
    transition: "width 2s ease-in-out",
    transitionDelay: "3s",
  };
  return (
    <div id="about" className="about">
      <h1 data-aos="fade" data-aos-duration="600" className="get">
        About
      </h1>
      <div className="about-wrapper">
        <div data-aos="fade" data-aos-delay="300" className="about-1">
          <h3 className="bio-text">Bio</h3>
          <p className="bio-info">
            Hello there! 👋 I'm Yaseen , a passionate and dedicated Full Stack
            Developer with a love for crafting seamless and impactful web
            solutions. My journey in the world of technology has equipped me
            with a versatile skill set, allowing me to contribute to every layer
            of the development process.
          </p>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="300"
          data-aos-delay="200"
          className="about-2"
        >
          <h3 className="bio-text">Education</h3>
          <div className="degree">
            <div className="degree-1">
              <h3 className="clgname">
                University Post Graduate College Osmania{" "}
              </h3>
              <p className="course">
                Masters in Computer Applications (2023-2025){" "}
              </p>
            </div>
            <div className="degree-1">
              <h3 className="clgname">
                Shree Anantha Padmnanabha College of Arts and Science
              </h3>
              <p className="course">
                Bachelors in computer Science(2020-2023){" "}
              </p>
              <p style={{ fontSize: "12px" }}>CGPA:7.62</p>
            </div>
            <div className="degree-1">
              <h3 className="clgname">Siddhartha Junoir College</h3>
              <p className="course">PCM(2018-2020) </p>
              <p style={{ fontSize: "12px" }}>70.1%</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="300"
          data-aos-delay="200"
          className="about-3"
        >
          <h3 className="bio-text">Skills</h3>
          <div className="skill">
            <p className="bio-info">
              I'm a full-stack developer proficient in the MERN stack,
              specializing in creating websites that function seamlessly across
              all devices. With expertise in MongoDB, Express.js, React, and
              Node.js, I build robust web applications that prioritize user
              experience. Additionally, I'm skilled in programming languages
              like Java, SQL, and frameworks like Spring Boot, enhancing the
              functionality and performance of web projects. My attention to
              detail ensures every aspect of the website looks great and
              functions perfectly, providing users with an exceptional
              experience.
            </p>
            <button onClick={() => setSkill(true)} className="explore">
              Explore Skillset
            </button>
          </div>
        </div>
      </div>
      {skill && (
        <div className="skillset">
          <div className="exp-top">
            {" "}
            <h2 className="exp">Expertise</h2>
            <button onClick={() => setSkill(false)}>Close</button>
          </div>

          <div className="skill-wrapper">
            <div className="skill-left">
              <div className="skill">
                <h4 className="skill-text">HTML</h4>
                <div className="skill-level">
                  <div style={htmlLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">CSS</h4>
                <div className="skill-level">
                  <div style={cssLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Javascript</h4>
                <div className="skill-level">
                  <div style={jsLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">React Js</h4>
                <div className="skill-level">
                  <div style={reactLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Redux</h4>
                <div className="skill-level">
                  <div style={reduxLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Responsive Design</h4>
                <div className="skill-level">
                  <div style={responsiveLevel}></div>
                </div>
              </div>
            </div>
            <div className="skill-right">
              <div className="skill">
                <h4 className="skill-text">Node Js</h4>
                <div className="skill-level">
                  <div style={nodeLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Express JS</h4>
                <div className="skill-level">
                  <div style={expressLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">MongoDb</h4>
                <div className="skill-level">
                  <div style={mongoDblevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">SQL</h4>
                <div className="skill-level">
                  <div style={sqllevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Java</h4>
                <div className="skill-level">
                  <div style={javaLevel}></div>
                </div>
              </div>
              <div className="skill">
                <h4 className="skill-text">Spring Boot</h4>
                <div className="skill-level">
                  <div style={springlevel}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
