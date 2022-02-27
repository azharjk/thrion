import React from "react";
import { Routes, Route } from "react-router-dom";

import MasterLayout from "./components/layouts/MasterLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<AuthLayout />} >
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
