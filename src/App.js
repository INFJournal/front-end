import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./components/Global.style";
import Home from "./pages/Home";
import EssayList from "./pages/EssayList/EssayList";

function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EssayList" element={<EssayList />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
