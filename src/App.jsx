import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Allcourses from "./pages/allcourse/Allcourses";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import VerifyCertificate from "./pages/VerifyCertificate";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RefundPolicy from "./components/RefundPolicy";
import Blogs from "./components/Blogs";


const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcourses" element={<Allcourses/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verifyCertificate" element={<VerifyCertificate/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/blog" element={< Blogs/>} />
        <Route path="/refund" element={< RefundPolicy/>} />
      </Routes>
      <div className="pt-20">
        <Outlet />
         <Footer />  
      </div>
      </div>
    </>
  );
};

export default App;
