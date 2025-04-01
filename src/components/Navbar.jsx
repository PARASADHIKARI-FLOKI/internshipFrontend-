import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/sipalaya_infotech.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2d1b69] text-white p-3 shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        
        {/* Logo */}
        <NavLink to="/" className="p-2">
          <img src={img} alt="Sipalaya Infotech Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 justify-center w-full">
          {[
            { name: "Home", path: "/" },
            { name: "All Courses", path: "/allcourses" },
            { name: "Job Placement", path: "/jobplacement" },
            { name: "About US", path: "/aboutus" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-white border-b-2 border-white scale-105"
                      : "hover:bg-blue-500 hover:scale-105 border-b-2 border-transparent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Fixed Alignment */}
        <button
          className="md:hidden p-2 focus:outline-none right-4 top-3 absolute cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2d1b69] text-white p-4 absolute top-16 left-0 w-full shadow-md">
          <ul className="flex flex-col space-y-4 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "All Courses", path: "/allcourses" },
              { name: "Job Placement", path: "/jobplacement" },
              { name: "About Us", path: "/aboutus" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="block px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
