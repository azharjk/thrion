import React from "react";
import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <header className="auth-header">
        <h1 className="auth-header__heading">ThriØn</h1>
      </header>
      <main className="auth-content">
        <Outlet />
      </main>
      {/* FIXME: Create the footer */}
    </>
  );
};

export default AuthLayout;
