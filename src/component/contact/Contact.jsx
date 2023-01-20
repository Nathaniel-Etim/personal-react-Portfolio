import "./contact.css";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

import React from "react";

const Contact = () => {
  return (
    <div id="contacts" className="container contact-container">
      <h1> contact me </h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/chris-andrew-3a212b252"
          className="contact linkedin"
        >
          <FaLinkedin className="icon" />
          <h2>
            {" "}
            Linkedin<span>chris-andrew</span>{" "}
          </h2>
        </a>
        <a
          href="https://twitter.com/Christo31798537?t=F2w0lYDPTJvkyVDyqeil_Q&s=09"
          className="contact twitter"
        >
          <FaTwitter className="icon" />
          <h2>
            {" "}
            twitter<span> twitter_name </span>{" "}
          </h2>
        </a>
        <a href="#/" className="contact whatsapp">
          <FaWhatsapp className="icon" />
          <h2>
            {" "}
            whatsapp<span> </span>{" "}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
