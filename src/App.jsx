import React from "react";
import Navbar from "./components/Navbar";
import {
  About,
  Education,
  Skills,
  Projects,
  Footer,
} from "./components/ImportExport";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      <Navbar />
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div>
        <Footer />
      </div>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 p-2 transition-colors duration-300 shadow-lg hover:scale-110"
        style={{
          backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
          color: isDarkMode ? "#f5f5f5" : "#333",
          borderRadius: "50%", // Keeps the button rounded
        }}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400 text-lg" />
        ) : (
          <FaMoon className="text-gray-800 text-lg" />
        )}
      </button>
    </div>
  );
};

export default App;
