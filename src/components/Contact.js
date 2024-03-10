import React, { useState } from "react";
import "./contact.css";
import { ArrowRightOutlined } from "@ant-design/icons";
function Contact() {
  const [user, setuser] = useState({ name: "", email: "", project: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setuser({ ...user, [name]: value });
  };
  return (
    <div id="contact" className="contact">
      <h1 className="get">Contact</h1>
      <div className="contact-top">
        <div className="name">
          <h4>Yaseen</h4>
          <h4>Ahmed</h4>
        </div>

        <div className="social">
          <h3>Socials</h3>
          <div className="social-items">
            <span>LinkedIn</span>
            <span>Github</span>
            <span>Gmail</span>
          </div>
        </div>
      </div>
      <div className="connect">
        <div className="connect-left">
          <div className="name-input">
            <h6>Name</h6>
            <input
              className="input-connect"
              name="name"
              value={user.name}
              placeholder="John Doe"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="name-input">
            <h6>Email</h6>
            <input
              className="input-connect"
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="johndoe@example.com"
              value={user.email}
            />
          </div>
          <div className="name-input">
            <h6>Project Overview</h6>
            <input
              className="input-connect"
              type="text"
              value={user.project}
              name="project"
              placeholder="Ecommerce website"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="connect-right">
          <div className="text">{`hey my name is ${
            user.name ? user.name : "X"
          }. I have a project in mind lets work on it... ${
            user.email ? `${user.email}. ` : "x@example.com. "
          }${user.project ? user.project : " project overview..."}`}</div>
          <button>Send message</button>
        </div>
      </div>
      <div className="contact-wrap">
        <h5>Starting a new Project ?</h5>
        <div className="lets-talk">
          <h4>Let's talk then</h4>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
}

export default Contact;
