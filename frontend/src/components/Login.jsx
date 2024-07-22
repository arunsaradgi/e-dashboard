import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const loginSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, { email, password })
      .then((res) => {
        if (res.data._id) {
          localStorage.setItem("user", JSON.stringify(res.data._id));
          navigate("/");
        } else {
          alert(res.data + ". Please enter the correct credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="SignUp">
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
