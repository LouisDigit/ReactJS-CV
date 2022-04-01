import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="content-contact">
        <div className="contact-me">
          <h1>Contactez moi</h1>
          <ul>
            <li>
              <a href="https://twitter.com/LouisVnse" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/louis-vanoise-551493233/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/LouisDigit" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="contact-infos">
            <div className="contact-infos-item">
              <div className="contact-logo">
                <i className="fa-solid fa-envelope"></i>
              </div>
              louisv.digit@gmail.com
            </div>
            <div className="contact-infos-item">
              <div className="contact-logo">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              Lille
            </div>
            <div className="contact-infos-item">
              <div className="contact-logo">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              06 42 75 01 80
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
