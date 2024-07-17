import React, { useState } from "react";
import styles from "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = () => {
    console.warn(email, password);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        className="inputBox"
        placeholder="Enter email ID"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="Button" onClick={loginSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
