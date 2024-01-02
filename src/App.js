import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./components/Global.style.jsx";

import Home from "./pages/Home";
import FeelingChoice from "./pages/FeelingChoice";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feelingchoice" element={<FeelingChoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
