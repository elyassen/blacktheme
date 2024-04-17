import React, { useState } from "react";
import "./contact.css";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { BASE_URL } from "../utils";
function Contact() {
  const [user, setuser] = useState({ name: "", email: "", project: "" });
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setuser({ ...user, [name]: value });
  };
  const sendToBackend = async () => {
    console.log("hello");

    if (user.email === "" || user.name == "" || user.project == "") {
      setErr("please fill all field,then submit");
      setTimeout(() => {
        setErr(null);
      }, 2000);
    } else {
      try {
        const req = await fetch(`${BASE_URL}/client`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (req.status === 200) {
          setSaved(true);
          console.log("data saved");
          setuser({ name: "", email: "", project: "" });
          setTimeout(() => {
            setSaved(false);
          }, 3000);
        } else {
          console.log("data not saved");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div id="contact" className="contact">
      <h1 className="get">Contact</h1>

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
          <div className="text">
            {saved ? (
              <div className="saved">
                <CheckCircleFilled className="conn-tick" />
                <h1> Message sent to Yaseen Ahmed.</h1>
                <h1>Please wait for response</h1>
              </div>
            ) : (
              <>
                {" "}
                <div className="box-name">{`Hey, im ${
                  user.name ? user.name : "X"
                }`}</div>
                <div className="box-project">{`
              ${user.project ? user.project : "Project Overview"}`}</div>
                {user.email ? (
                  <p className="email-contact">{user.email}</p>
                ) : (
                  <p className="email-contact">youremail@example.com</p>
                )}
              </>
            )}
          </div>
          {/* <button onClick={sendToBackend}   >
            {err ? (
              <div className="err-conn">{err}</div>
            ) : (
              <ArrowRightOutlined />
            )} */}
          {/* </button> */}
          {err ? (
            <button className="send-msg-err">
              {err} <CloseCircleFilled />
            </button>
          ) : (
            <button onClick={sendToBackend} className="send-msg-btn">
              <ArrowRightOutlined />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
