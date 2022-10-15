import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import logo from "./logo.svg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const universityList = ["@asu.edu"];

  const signIn = (e) => {
    e.preventDefault();

    // Firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    const domain = email.substring(email.lastIndexOf("@"));

    // Firebase Register
    if (domain == universityList) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // Registration Success and auth is not empty then redirect it to the Home Page.
          if (auth) {
            navigate("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      try {
        alert("Please Try ASU Email Address Only!");
      } catch (err) {
        document.write(err.message);
      }
    }
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo} className="login__logo" alt="logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>University Email Address</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the SCHOLAR STORE's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
