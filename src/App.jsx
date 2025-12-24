import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./modules/SharedComponents/Header/Header";
import Home from "./modules/Home/Home";
import About from "./modules/About/About";
import Footer from "./modules/SharedComponents/Footer/Footer";
import Contact from "./modules/Contact/Contact";

const App = () => {
  return (
    <div className="village">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
