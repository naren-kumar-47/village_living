import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Contact from "./pages/Contact";
import Header from "./modules/SharedComponents/Header/Header";
import Home from "./modules/Home/Home";
import About from "./modules/About/About";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
