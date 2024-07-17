import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

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
            <Link onClick={logout} to={"/signup"}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
        )}
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
