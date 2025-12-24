import React from "react";
import "./Home.css";
import logo from "../../assets/images/village-logo.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <img src={logo} alt="Logo" className="home-logo float-logo" />
        <p className="content-text">A Timeless Hamlet. A Modern Inheritance.</p>
        <h1 className="coming-soon">Coming Soon</h1>
      </div>
    </div>
  );
};

export default Home;
