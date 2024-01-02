import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import OpenEssay from "./pages/OpenEssay";
import LookEssay from "./pages/LookEssay";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topic" element={<Topic />} />
          <Route path="/OpenEssay" element={<OpenEssay />} />
          <Route path ="/LookEssay" element={<LookEssay/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;