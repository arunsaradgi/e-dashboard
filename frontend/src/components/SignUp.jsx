import React from "react";
import styles from "./styles.css";
const SignUp = () => {
  return (
    <div className="SignUp">
      <h1>Registration</h1>
      <input className="inputBox" type="text" placeholder="Enter name" />
      <input className="inputBox" type="email" placeholder="Enter Email" />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
      />
      <button className="SignUpButton">Sign Up</button>
    </div>
  );
};

export default SignUp;
