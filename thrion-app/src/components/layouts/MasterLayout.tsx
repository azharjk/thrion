import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import "./MasterLayout.css";

import { AuthState } from "../../interfaces";

const MasterLayout = () => {
  const isLoggedIn = useSelector((state: AuthState) => state.isLoggedIn);

  return (
    <>
      <header>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="menu">
          <h1 className="menu__title">ThriØn</h1>
          <nav>
            <ul className="menu__links">
              <li>
                <Link to="/women">
                  Women's Wear
                </Link>
              </li>
              <li>
                <Link to="/newcomer">
                  Newcomers
                </Link>
              </li>
              <li>
                <Link to="/men">
                  Men's Wear
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          {/* FIXME: Change this if logged in */}
          {isLoggedIn ? (
            <div className="auth-links-container">
              <a href="" className="auth-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="auth-link__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
              <a href="" className="auth-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="auth-link__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          ) : (
            <a className="login-link" href="">
              Login
            </a>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MasterLayout;
