import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();
    //firebase work
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const resister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create sucessfull user acount
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //firebase work
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://th.bing.com/th/id/Re7f374e19dec7a9813d48dab9d1b12c8?rik=ulTxEGndMCqB0Q&riu=http%3a%2f%2ffreepngimages.com%2fwp-content%2fuploads%2f2016%2f10%2famazon-logo.png&ehk=j1kkBCIxShthdGBQqYpmfRMQGVS8%2bMRuAij69oGuqTg%3d&risl=&pid=ImgRaw"
          alt="amazon logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sing-In</h1>
        <form>
          <h5>E-mail</h5>
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
          <button className=" login-singinbtn" onClick={singIn}>
            Sign-In
          </button>
        </form>
        <p>
          By sing in you agree to amazon condition of use & sale . please see
          our private notice, our cookies notice and our interest-based ads
          notice.
        </p>
        <button className="login-registerbtn" onClick={resister}>
          Create Account Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
