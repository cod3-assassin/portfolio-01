import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const skillColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    Nodejs: "#339933",
    MongoDB: "#47A248",
    Bootstrap: "#7952B3",
    "Tailwind CSS": "#38B2AC",
    "Express.js": "#000000",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.keys(skillColors).map((skillName, index) => (
            <SkillItem
              key={index}
              name={skillName}
              icon={getIcon(skillName)}
              color={skillColors[skillName]}
              link={skillLinks[skillName]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, icon, color, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-1"
    >
      <div
        className="flex items-center justify-center mb-2"
        style={{ color: color }}
      >
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
