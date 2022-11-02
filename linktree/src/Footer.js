import React from "react";
import "./Footer.css";
import Zuri from "./Zuri.png";
import I4G from "./I4G.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <img className="zuri" src={Zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img className="i4g" src={I4G} alt="ingressive" />
      </div>
    </div>
  );
}

export default Footer;
