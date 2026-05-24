import { useState } from "react";
import "../src/assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./AuthProvider";
import DashBord from "./components/dashbord/DashBord";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashbord" element={<DashBord />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
