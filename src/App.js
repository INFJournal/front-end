import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/Global.style.jsx";

import Home from "./pages/Home";
import FeelingChoice from "./pages/FeelingChoice.jsx";
import JoinShow from "./pages/LoginPages/JoinShow.jsx";
import Join from "./pages/LoginPages/Join.jsx";
import MyProfile from "./pages/ProfilePages/MyProfile.jsx";
import EssayList from "./pages/EssayList/EssayList";
import Topic from "./pages/Topic.jsx";
import OpenEssay from "./pages/EssayPages/OpenEssay.jsx";
import LookEssay from "./pages/EssayPages/LookEssay.jsx";
import EssayRandomList from "./pages/EssayRandomList/EssayRandomList.jsx";
import Login from "./pages/LoginPages/Login.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feelingchoice" element={<FeelingChoice />} />
          <Route path="/joinshow" element={<JoinShow />} />
          <Route path="/join" element={<Join />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/essayList" element={<EssayList />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/openessay" element={<OpenEssay />} />
          <Route path="/lookessay" element={<LookEssay />} />
          <Route path="/essayrandomlist" element={<EssayRandomList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
