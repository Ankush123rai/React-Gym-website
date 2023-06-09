import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import About from "./Pages/AboutUs/About-Us";
import Pricing from "./Pages/pricing/Pricing";
import TrainingPrograms from "./Pages/training/TrainingProgram";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/training" element={<TrainingPrograms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
