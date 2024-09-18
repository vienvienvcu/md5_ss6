import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container">
      <div className="content">
        <h2>Login</h2>
        <div className="form">
          <form>
            <div className="control">
              <input
                type="text"
                placeholder="Enter your email"
                className="control_item"
              ></input>
            </div>
            <div className="control password">
              <input
                type="password"
                placeholder="Enter your password"
                className="control_item"
              ></input>
              <div className="register_icon">
                <i class="bx bx-low-vision"></i>
              </div>
            </div>
            <Link to="/change">
              <span className="link-change_password">change password?</span>
            </Link>
            <div className="btn">
              <button class="button">login</button>
            </div>
            <div className="account">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="link-login">Create account</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
