import React from "react";
import { Routes, Route } from "react-router-dom";

import MasterLayout from "./components/layouts/MasterLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppHome from "./pages/AppHome";
import FlashSale from "./pages/FlashSale";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path="/app" element={<AppHome />} />
        <Route path="/flash-sale" element={<FlashSale />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
