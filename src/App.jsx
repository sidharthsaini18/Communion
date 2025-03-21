import { useState } from "react";
import "./App.css";
import Master from "./master";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Events from "./components/events";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
