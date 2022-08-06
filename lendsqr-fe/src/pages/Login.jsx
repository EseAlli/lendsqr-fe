import React, { useState } from "react";
import loginImg from "../assets/images/pablo-sign-in.svg";
import logo from "../assets/logo/Group.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="login-container">
      <div className="login-first-half">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <img src={loginImg} alt="pablo-sign-in" className="login-img" />
      </div>
      <div className="login-second-half">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-form-container">
          <h4>Welcome!</h4>
          <p>Enter details to login.</p>
          <form className="login-form">
            <input placeholder="Email" />
            <div className="password-input-box">
              <input
                placeholder="Password"
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
              />
              <span className="field-icon" onClick={togglePassword}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <a>Forgot Password?</a>
            <button className="btn btn-green login-btn">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
