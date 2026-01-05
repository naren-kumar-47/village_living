import React from "react";
import "./Home.css";
import logo from "../../assets/images/village-logo.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <img src={logo} alt="Logo" className="home-logo float-logo" />
        <h1 className="coming-soon">Launching Soon!!</h1>
      </div>
    </div>
  );
};

export default Home;
