import React from "react";
import Logo from "../assets/logo/Group.svg";
import photo from "../assets/images/image.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <img className="logo" src={Logo} />
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <span class="material-symbols-outlined search-icon">search</span>
          </div>
          <div className="navbar-actions">
            <a>Docs</a>
            <div className="logged-in-user">
              <span class="material-symbols-outlined">notifications</span>
              <img src={photo} alt="user-image" />
              <p>Adedeji</p>
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
        </div>
        <div className="navbar-mobile">
          <img className="logo" src={Logo} />
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
