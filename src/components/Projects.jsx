import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:w-1/3 p-4 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-600">
        {/* Placeholder image */}
        <div
          className={`w-full transition-transform duration-300 transform ${
            isHovered ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            filter: isHovered ? "blur(5px)" : "none",
          }}
        >
          <img
            className="w-full"
            src={project.imageUrl}
            alt="Project"
            style={{ height: "200px" }} // Set desired height
          />
        </div>
        {/* Bottom section */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
            isHovered ? "h-full" : "h-0"
          }`}
        >
          {/* Project title */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              {project.title}
            </div>
            {/* Project description */}
            <p className="text-sm text-white">{project.description}</p>
            {/* Placeholder link */}
            <a
              href="#"
              className={`text-gray-500 italic text-xs ${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              View project details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample project data
  const projects = [
    {
      imageUrl:
        "https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg",
      title: "Project 1",
      description: "This is a placeholder description for Project 1.",
    },
    {
      imageUrl:
        "https://codingartistweb.com/wp-content/uploads/2023/04/Digital-Clock-01-696x392.png",
      title: "Project 2",
      description: "This is a placeholder description for Project 2.",
    },
    {
      imageUrl:
        "https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png",
      title: "Project 3",
      description: "This is a placeholder description for Project 3.",
    },
    {
      imageUrl:
        "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Chat-App.jpg",
      title: "Project 4",
      description: "This is a placeholder description for Project 4.",
    },
    {
      imageUrl:
        "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Shopping-App.jpg",
      title: "Project 5",
      description: "This is a placeholder description for Project 5.",
    },
    {
      imageUrl: "https://i.morioh.com/2019/12/03/d57b1ac0be5b.jpg",
      title: "Project 6",
      description: "This is a placeholder description for Project 6.",
    },
    // Add more project objects as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
