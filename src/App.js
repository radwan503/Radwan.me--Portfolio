import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Header from "./components/element/Header";
import Contact from "./components/Contact";
import Footer from "./components/element/Footer";
import Service from "./pages/Service";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
