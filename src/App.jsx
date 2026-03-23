import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
