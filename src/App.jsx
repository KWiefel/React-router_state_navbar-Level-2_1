import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Menue from "./assets/pages/Menue";
import Contact from "./assets/pages/Contact";
import Gallery from "./assets/pages/Gallery";
import Opening from "./assets/pages/Opening";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/opening" element={<Opening />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
