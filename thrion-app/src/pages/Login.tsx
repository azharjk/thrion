import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form__heading">
        <span className="form__heading__border-btm">
          <h1 className="form__heading__title">Login</h1>
        </span>
      </div>
      <form>
        <div className="form-group">
          <label className="form-group__label" htmlFor="email">Email</label>
          <input className="form-group__control" type="email" id="email" />
        </div>
        <div className="form-group">
          <div className="flex">
            <label className="form-group__label" htmlFor="password">Password</label>
            <a className="form-group__reset-password" href="">reset password</a>
          </div>
          <input className="form-group__control" type="password" id="password" />
        </div>
        <div className="form-group__submit-login">
          <div className="form-group__remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="form-submit__btn">Sign in</button>
        </div>
        <div className="form-helper">
          <span>Don’t have one? Sign up <a href="">here</a></span>
        </div>
      </form>
    </div>
  );
};


export default Login;
