import React from "react";
import Logo from "../assets/logo/Group.svg";
import photo from "../assets/images/image.png";
import bell from "../assets/icons/bell.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <img className="logo" src={Logo} />
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
          <div className="navbar-actions">
            <a>Docs</a>
            <div className="logged-in-user">
              <img src={bell} alt="notifications" />
              <img src={photo} className="user-image" alt="user-image" />
              <p>Adedeji</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
        </div>
        <div className="navbar-mobile">
          <img className="logo" src={Logo} />
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
