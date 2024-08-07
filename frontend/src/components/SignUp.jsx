import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  
  const SignUpSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="SignUp">
      <h1>Registration</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="Button" onClick={SignUpSubmit}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
