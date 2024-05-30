import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { About, Education, Skills, Projects, Home } from "./ImportExport";
import { FaUser, FaGraduationCap, FaTools, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);

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

  return (
    <BrowserRouter>
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
              className="text-5xl font-extrabold text-green-400 cursor-pointer font-serif relative"
              style={{ zIndex: 1 }}
            >
              <span className="relative z-10">WASIM.</span>
              <span className="absolute z-0 w-full h-full top-0 left-0 bg-gradient-to-br from-yellow-300 to-red-500 rounded-lg mix-blend-multiply filter blur opacity-0 transition-all duration-300 hover:opacity-100"></span>
            </span>
          </div>
          <ul className="md:flex hidden flex-col md:flex-row md:gap-6 mt-4 md:mt-0">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-base font-bold text-white hover:text-gray-300 transition duration-300 cursor-pointer flex items-center"
              >
                <FaUser className="mr-2" /> About
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="text-base font-bold text-white hover:text-gray-300 transition duration-300 cursor-pointer flex items-center"
              >
                <FaTools className="mr-2" /> Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="text-base font-bold text-white hover:text-gray-300 transition duration-300 cursor-pointer flex items-center"
              >
                <FaBriefcase className="mr-2" /> Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                className="text-base font-bold text-white hover:text-gray-300 transition duration-300 cursor-pointer flex items-center"
              >
                <FaGraduationCap className="mr-2" /> Education
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
