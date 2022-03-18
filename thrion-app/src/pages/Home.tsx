import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import bgHome from "../assets/images/bg-home.jpeg";

import { logout } from "../store";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  });

  return (

    <>
    <div className="container">
    <img className="bg" src={bgHome} alt="" />
    <div className="divimgbg">Welcome</div>
    </div>
    </>
  )

}



export default Home;
