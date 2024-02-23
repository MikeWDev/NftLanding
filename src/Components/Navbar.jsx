import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import { useState } from "react";

const Navbar = (props) => {
  const [navState, setNewState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>

        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
            {props.currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Launch</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
          <li onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
