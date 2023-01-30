import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import "boxicons";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="Brand">
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div class="group">
        <i class="icon ri-search-line"></i>
        {/* <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg> */}
        <input placeholder="Search" type="search" class="input" />
      </div>
      <div className="menuIcon">
        <ul className="navlist">
          <li>
            <NavLink to="/sell">
              <div className="sell">
                <button className="sell-button">
                  Sell
                  <box-icon
                    className="plus-icon"
                    type="solid"
                    name="plus-circle"
                  ></box-icon>
                </button>
              </div>
            </NavLink>
          </li>
          <NavLink to="/Buy">
            <li>Buy</li>
          </NavLink>
          <NavLink to="/Donate">
            <li>Donate</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>Contact</li>
          </NavLink>
          <NavLink>
            <li>
              <button className="login-button">Login</button>
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
