import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form__heading">
        <span className="form__heading__border-btm">
          <h1 className="form__heading__title">Register</h1>
        </span>
      </div>
      <form>
        <div className="form-group">
          <label className="form-group__label" htmlFor="email">Email</label>
          <input className="form-group__control" type="email" id="email" />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="password">Password</label>
          <input className="form-group__control" type="password" id="password" />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="confirm-password">Confirm Password</label>
          <input className="form-group__control" type="password" id="confirm-password" />
        </div>
        <div className="form-submit">
          <button className="form-submit__btn">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
