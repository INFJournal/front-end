import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import GlobalStyle from "./components/Global.style";


import Home from "./pages/Home";
import Topic from "./pages/Topic";
import OpenEssay from "./pages/OpenEssay";
import LookEssay from "./pages/LookEssay";
function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Topic />} />
          <Route path="/OpenEssay" element={<OpenEssay />} />
          <Route path ="/LookEssay" element={<LookEssay/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

