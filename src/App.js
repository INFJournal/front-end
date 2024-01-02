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
import WriteEssay from "./pages/EssayPages/WriteEssay.jsx";
import EssayRandomList from "./pages/EssayRandomList/EssayRandomList.jsx";
import Login from "./pages/LoginPages/Login.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const isLogin = localStorage.getItem("userId") !== null;
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={isLogin ? <Topic /> : <Home />} />
            <Route path="/feelingchoice" element={<FeelingChoice />} />
            <Route path="/joinshow" element={<JoinShow />} />
            <Route path="/join" element={<Join />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/essayList" element={<EssayList />} />
            <Route path="/openessay" element={<OpenEssay />} />
            <Route path="/lookessay" element={<LookEssay />} />
            <Route path="/writeessay" element={<WriteEssay />} />
            <Route path="/essayrandmolist" element={<EssayRandomList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/topic" element={<Topic />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
