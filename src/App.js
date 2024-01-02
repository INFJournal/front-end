import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./components/Global.style.jsx";

import Home from "./pages/Home";
import FeelingChoice from "./pages/FeelingChoice.jsx";
import RegisterShow from "./pages/ProfilePages/RegisterShow.jsx";
import Register from "./pages/ProfilePages/RegisterImgNickname.jsx";
import Profile from "./pages/ProfilePages/Profile.jsx";
import MyProfile from "./pages/ProfilePages/MyProfile.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feelingchoice" element={<FeelingChoice />} />
          <Route path="/registershow" element={<RegisterShow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
