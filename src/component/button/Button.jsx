import "./button.css";

import React from "react";

const Button = () => {
  return (
    <div className="container button-contain">
      <a
        href="https://drive.google.com/file/d/1vCDLVHf78EQdyxTVuQG0QIX4B_IrcFCQ/view?usp=share_link "
        className="btn pri"
      >
        View CV
      </a>
      <a href="#contact" className="btn sec">
        Get in touch
      </a>
    </div>
  );
};

export default Button;
