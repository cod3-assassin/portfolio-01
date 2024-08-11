import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { SlRocket } from "react-icons/sl";
import { SiReact, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";
import { useTheme } from "../../ThemeContext";

const getTechnologyIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "react.js":
      return <SiReact size={24} className="text-blue-400" />;
    case "tailwind css":
      return <SiTailwindcss size={24} className="text-teal-500" />;
    case "html":
      return <SiHtml5 size={24} className="text-red-500" />;
    case "css":
      return <SiCss3 size={24} className="text-blue-600" />;
    default:
      return null;
  }
};

const ExpandedProjectCard = ({ isOpen, onRequestClose, project }) => {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ${
        isDarkMode
          ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } `}
    >
      <div className="relative w-full max-w-4xl p-4 bg-gray-800 rounded-lg overflow-y-auto max-h-screen scrollbar-hidden">
        {/* Use 'scrollbar-hidden' class to hide scrollbar */}
        <button
          className="absolute top-4 right-4 text-black text-2xl font-bold"
          onClick={onRequestClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-full h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
          <p className="text-gray-400 mt-2">{project.description}</p>
          <div className="flex items-center space-x-4 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlRocket size={28} />
              </a>
            )}
          </div>
          <div className="flex flex-wrap items-center mt-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mr-4 mb-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                {getTechnologyIcon(tech)}
                <span className="ml-2">{tech}</span>
              </div>
            ))}
          </div>
          <div className="text-left w-full mt-8">
            <h3 className="text-2xl font-semibold mb-2">How to Use</h3>
            <p className="text-gray-400">{project.howToUse}</p>
            <h3 className="text-2xl font-semibold mt-4 mb-2">Pros</h3>
            <ul className="list-disc list-inside text-gray-400">
              {project.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-4 mb-2">Cons</h3>
            <ul className="list-disc list-inside text-gray-400">
              {project.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedProjectCard;
