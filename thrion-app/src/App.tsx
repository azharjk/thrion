import React from "react";
import { Routes, Route } from "react-router-dom";

import MasterLayout from "./components/layouts/MasterLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppHome from "./pages/AppHome";
import FlashSale from "./pages/FlashSale";
import NewComerWear from "./pages/NewComerWear";
import MenWear from "./pages/MenWear";
import WomenWear from "./pages/WomenWear";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path="/app" element={<AppHome />} />
        <Route path="/flash-sale" element={<FlashSale />} />
        <Route path="/newcomer" element={<NewComerWear />} />
        <Route path="/men" element={<MenWear />} />
        <Route path="/women" element={<WomenWear />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
