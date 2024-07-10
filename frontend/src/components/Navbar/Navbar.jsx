import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>product</Link>
        </li>
        <li>
          <Link to={"/profile"}>profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
