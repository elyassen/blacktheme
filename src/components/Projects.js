import React, { useEffect, useState } from "react";
import "./projects.css";
import pro1 from "../static/pro1.jpg";
import pro1_2 from "../static/pro1_2.jpg";
import pro_1_3 from "../static/pro_1_3.jpg";
import pro1_mob from "../static/pro1_mob.png";
import pro1_mob2 from "../static/pro1_mob2.png";
import pro2_1_mob from "../static/pro2_1_mob.png";
import pro2_1 from "../static/pro2_1.png";
import pro2 from "../static/pro2.jpg";
import pro2_2_mob from "../static/pro2_2_mob.png";
import pro2_b_mob from "../static/pro2_b_mob.png";
import Aos from "aos";
import { LinkOutlined } from "@ant-design/icons";

function Projects() {
  const oneImg = [pro1, pro1_2, pro_1_3];
  const oneMob = [pro1_mob, pro1_mob2];
  const twoImg = [pro2_1, pro2];
  const twoMob = [pro2_1_mob, pro2_2_mob, pro2_b_mob];
  const [idx, setIdx] = useState(0);
  const [desktop1, setDesktop1] = useState(true);
  const [desktop2, setDesktop2] = useState(true);
  useEffect(() => {
    if (idx == 2) setIdx(0);
    const clr = setInterval(() => {
      setIdx(idx + 1);
    }, 3000);
    return () => clearInterval(clr);
  });
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="projects" data-aos="fade-up">
      <h1 className="get ">Projects </h1>
      <div className="pro1-wrap">
        <a
          className="live-link"
          target="_blank"
          href="https://creative-sunburst-ddcd15.netlify.app/"
        >
          <p>Live link</p>
          <LinkOutlined />
        </a>
        <div className="pro1" data-aos="fade-up">
          <div className="img-div">
            {desktop1 ? (
              <img className="pro-img" src={oneImg[idx]} alt="" />
            ) : (
              <div className="img-div-mob">
                <img className="pro-img-mob" src={oneMob[0]} alt="" />
                <img className="pro-img-mob" src={oneMob[1]} alt="" />
                <img className="pro-img-mob" src={oneMob[0]} alt="" />
                <img className="pro-img-mob" src={oneMob[1]} alt="" />
              </div>
            )}
          </div>
          <div className="pro-btns">
            <button onClick={() => setDesktop1(true)} className="pro-btn">
              Desktop view
            </button>
            <button onClick={() => setDesktop1(false)} className="pro-btn">
              Mobile view
            </button>
          </div>
        </div>
        <div className="pro1des">
          <div className="tech-used">
            <h1>Seller's Space</h1>
            <p>React Js,Redux,SQL,Spring boot,Figma</p>
          </div>

          <p className="pro-des-para">
            "Seller's Space" is an innovative platform designed to empower users
            to sell a wide range of items through individual accounts.
            Leveraging cutting-edge technologies, this project offers a seamless
            and intuitive interface for both buyers and sellers.
          </p>
        </div>
      </div>
      <div className="pro1-wrap">
        <a
          className="live-link"
          target="_blank"
          href="https://idyllic-zabaione-c22796.netlify.app/"
        >
          <p>Live link</p>
          <LinkOutlined />
        </a>
        <div className="pro1" data-aos="fade-up">
          <div className="img-div">
            {desktop2 ? (
              <img className="pro-img" src={twoImg[idx]} alt="" />
            ) : (
              <div className="img-div-mob">
                <img className="pro-img-mob" src={twoMob[0]} alt="" />
                <img className="pro-img-mob" src={twoMob[1]} alt="" />
                <img className="pro-img-mob" src={twoMob[2]} alt="" />
                <img className="pro-img-mob" src={twoMob[2]} alt="" />
              </div>
            )}
          </div>
          <div className="pro-btns">
            <button onClick={() => setDesktop2(true)} className="pro-btn">
              Desktop view
            </button>
            <button onClick={() => setDesktop2(false)} className="pro-btn">
              Mobile view
            </button>
          </div>
        </div>
        <div className="pro1des">
          <div className="tech-used">
            <h1>Movies Database</h1>
            <p>React Js,Redux,SQL,Spring boot,Figma</p>
          </div>
          <p className="pro-des-para">
            The frontend MovieDB project not only allows users to explore and
            learn about movies but also showcases movie cast information.
            Utilizing React.js and Redux, it provides an intuitive browsing
            experience with efficient state management and responsive design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
