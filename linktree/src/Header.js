import React from "react";
import "./Header.css";
import profile from "./profile__img.png";
import icon from "./images/_Avatar share button.svg";
import iconTwo from "./IconTwo.png";

function Header() {
  return (
    <div className="header">
      <div className="icon-wrapper">
        <a id="icon_tag" href="#">
          <img id="profile_icon" src={icon} alt="profile-icon" />
          <img id="profile_iconTwo" src={iconTwo} alt="profile icon two" />
        </a>
      </div>
      <div id="img_container">
        <img id="profile__img" src={profile} alt="og profile" />

        <div id="img_name">Annette Black</div>
      </div>
      <div id="slack">Clinton Akpama</div>
    </div>
  );
}

export default Header;
