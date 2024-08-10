import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaUserNinja,
} from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import {
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import FloatingSVGs from "./SVGPatterns"; // Importing SVG patterns
import { useTheme } from "../ThemeContext";

const Skills = () => {
  const { isDarkMode } = useTheme(); // Get the theme context

  const skillColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    Nodejs: "#339933",
    MongoDB: "#47A248",
    Bootstrap: "#7952B3",
    "Tailwind CSS": "#38B2AC",
    "Express.js": "#FFFF00",
    Git: "#F05032",
    Redux: "#764ABC",
    DSA: "#007ACC",
  };

  const skillLinks = {
    HTML: "https://www.w3schools.com/html/",
    CSS: "https://www.w3schools.com/css/",
    JavaScript: "https://www.w3schools.com/js/",
    React: "https://reactjs.org/docs/getting-started.html",
    Nodejs: "https://nodejs.org/en/docs/",
    MongoDB: "https://docs.mongodb.com/",
    Bootstrap:
      "https://getbootstrap.com/docs/5.1/getting-started/introduction/",
    "Tailwind CSS": "https://tailwindcss.com/docs",
    "Express.js": "https://expressjs.com/en/starter/installing.html",
    Git: "https://git-scm.com/doc",
    Redux: "https://redux.js.org/introduction/getting-started",
    "Data Structures & Algorithms":
      "https://en.wikipedia.org/wiki/Data_structure",
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } overflow-hidden transition-colors duration-500`}
    >
      <FloatingSVGs isDarkMode={isDarkMode} className="absolute inset-0" />{" "}
      {/* Add SVG patterns */}
      <div className="container mx-auto px-4 py-8 relative">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <GiNinjaHeroicStance className="mr-2" /> SkillSet
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.keys(skillColors).map((skillName, index) => (
            <SkillItem
              key={index}
              name={skillName}
              icon={getIcon(skillName)}
              color={skillColors[skillName]}
              link={skillLinks[skillName]}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, icon, color, link, isDarkMode }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } flex flex-col items-center`}
      style={{
        boxShadow: isDarkMode
          ? "0 2px 6px rgba(255, 255, 255, 0.05)"
          : "0 2px 6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex items-center justify-center mb-2" style={{ color }}>
        {icon}
      </div>
      <div className="text-lg font-semibold text-center">{name}</div>
    </a>
  );
};

const getIcon = (skillName) => {
  switch (skillName) {
    case "HTML":
      return <FaHtml5 size={32} />;
    case "CSS":
      return <FaCss3Alt size={32} />;
    case "JavaScript":
      return <FaJs size={32} />;
    case "React":
      return <FaReact size={32} />;
    case "Nodejs":
      return <FaNodeJs size={32} />;
    case "MongoDB":
      return <SiMongodb size={32} />;
    case "Bootstrap":
      return <SiBootstrap size={32} />;
    case "Tailwind CSS":
      return <SiTailwindcss size={32} />;
    case "Express.js":
      return <SiExpress size={32} />;
    case "Git":
      return <FaGitAlt size={32} />;
    case "Redux":
      return <SiRedux size={32} />;
    case "DSA":
      return <FaDatabase size={32} />;
    default:
      return null;
  }
};

export default Skills;
