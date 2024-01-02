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
import EssayList from "./pages/EssayList/EssayList";
import Topic from "./pages/Topic.jsx";
import OpenEssay from "./pages/EssayPages/OpenEssay.jsx";
import LookEssay from "./pages/EssayPages/LookEssay.jsx";
import WriteEssay from "./pages/EssayPages/WriteEssay.jsx";

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
          <Route path="/essayList" element={<EssayList />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/openessay" element={<OpenEssay />} />
          <Route path="/lookessay" element={<LookEssay />} />
          <Route path="/writeessay" element={<WriteEssay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;