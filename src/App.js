import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./components/Global.style";

import Home from "./pages/Home";

function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
