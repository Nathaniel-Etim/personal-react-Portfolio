import "./header.css";

import React from "react";

const Header = () => {
  return (
    <>
      <div id="home" className="container header-container">
        <h3>
          {" "}
          <p>
            I<span>'</span>m
          </p>{" "}
          Chryz
          <address> A Graphics Designer and Consultant </address>
        </h3>
      </div>
    </>
  );
};

export default Header;
