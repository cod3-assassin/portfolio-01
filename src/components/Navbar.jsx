import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { About, Education, Skills, Projects, Home } from "./ImportExport";

import {
  MdPerson,
  MdSchool,
  MdBuild,
  MdWork,
  MdMenu,
  MdClose,
  MdHome,
} from "react-icons/md";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = (event) => {
    if (
      isSidebarOpen &&
      !event.target.closest(".sidebar") &&
      !event.target.closest(".hamburger")
    ) {
      setSidebarOpen(false);
    }
  };

  // Define icon color based on the theme
  const iconColor = isDarkMode ? "text-gray-200" : "text-gray-800";

  return (
    <BrowserRouter>
      <div onClick={handleOverlayClick} className="relative min-h-screen">
        <nav
          className={`navbar p-4 fixed w-full z-20 top-0 ${
            navbarBlur ? "bg-opacity-90 backdrop-blur-lg" : ""
          }`}
          style={{ marginBottom: "10px" }}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <span
                onClick={scrollToTop}
                className="text-6xl font-semibold cursor-pointer relative font-[DancingScript]"
                style={{ zIndex: 1, fontFamily: "cursive" }}
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-tr from-white via-teal-800 to-violet-950">
                  WASIM.
                </span>

                <span className="absolute z-0 w-full h-full top-0 left-0  rounded-lg mix-blend-multiply filter blur-md opacity-0 transition-all duration-300 hover:opacity-100"></span>
              </span>
            </div>

            <div className="md:flex hidden flex-col md:flex-row md:gap-6 mt-4 md:mt-0">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-base font-bold hover:text-gray-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdWork className="mr-2" /> Projects
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-base font-bold hover:text-gray-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdBuild className="mr-2" /> Skills
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-base font-bold hover:text-gray-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdPerson className="mr-2" /> About
              </ScrollLink>
              <ScrollLink
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-base font-bold hover:text-gray-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdSchool className="mr-2" /> Education
              </ScrollLink>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className={`focus:outline-none hamburger ${iconColor}`}
              >
                {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`fixed inset-y-0 left-0 w-20 bg-white bg-opacity-10 backdrop-blur-md transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30 sidebar`}
        >
          <ul className="flex flex-col items-center mt-17 space-y-8 h-full justify-around">
            <li>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-blue-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdHome size={24} />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-blue-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdWork size={24} />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-blue-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdBuild size={24} />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-blue-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdPerson size={24} />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-blue-300 transition duration-300 cursor-pointer flex items-center ${iconColor}`}
              >
                <MdSchool size={24} />
              </ScrollLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
