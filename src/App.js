import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import OpenEssay from "./pages/OpenEssay";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Topic" element={<Topic />} />
          <Route path="/OpenEssay" element={<OpenEssay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;