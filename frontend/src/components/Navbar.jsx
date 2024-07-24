import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.css";
import image from "../../src/logo.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <img className="logo" src={image} alt="logo" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>product</Link>
          </li>
          <li>
            <Link to={"/login"} onClick={logout}>
              Logout {auth.name}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
