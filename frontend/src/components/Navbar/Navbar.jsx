import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.css";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));


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
        {user ? (
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navbar;
