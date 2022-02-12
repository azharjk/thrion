import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
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
                <a href="">Women's Wear</a>
              </li>
              <li>
                <a href="">Newcomers</a>
              </li>
              <li>
                <a href="">Men's Wear</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a className="login-link" href="">Login</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
