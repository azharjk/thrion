import React from "react";
import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <header className="auth-header">
        <h1 className="auth-header__heading">ThriØn</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
