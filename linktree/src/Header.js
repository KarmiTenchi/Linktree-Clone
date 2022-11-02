import React from "react";
import "./Header.css";
import profile from "./profile__img.png";
import icon from "./images/_Avatar share button.svg";

function Header() {
  return (
    <div className="header">
      {/* <a id="icon_tag" href="#">
        <img id="profile_icon" src={icon} />
      </a> */}
      <div id="img_container">
        <img id="profile__img" src={profile} alt="Profile image" />

        <div id="img_name">Annette Black</div>
      </div>
    </div>
  );
}

export default Header;
