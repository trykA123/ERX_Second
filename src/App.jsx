import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Make the "/home" route the main page */}
        <Route exact path="/" element={<Home />} />
        <Route path="/work" element={<Services />} />
        {/* Define your other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
