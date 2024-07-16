import React from "react";
import { FaGithub } from "react-icons/fa";
import { SlRocket } from "react-icons/sl";
import { SiReact, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";

const ProjectCard = ({ project }) => {
  const getTechnologyIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react.js":
        return <SiReact size={24} color="#61DAFB" />;
      case "tailwind css":
        return <SiTailwindcss size={24} color="#38B2AC" />;
      case "html":
        return <SiHtml5 size={24} color="#E34F26" />;
      case "css":
        return <SiCss3 size={24} color="#1572B6" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="max-w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-600 bg-gray-900 flex flex-col justify-between">
        {project.image && (
          <div className="h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        )}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-xl text-white">
                {project.title}
              </div>
              <div className="flex items-center space-x-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SlRocket size={20} />
                  </a>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              {project.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            {project.technologies && (
              <div className="flex flex-wrap items-center">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
