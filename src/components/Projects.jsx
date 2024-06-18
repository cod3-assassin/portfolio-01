import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SlRocket } from "react-icons/sl";
import AlgoVisulizaer from "./img/AlgoVisualizer.png";
import RecipeHub from "./img/RecipeHub.png";
import BusinessWeb from "./img/bussinesswebsite.png";
import ResumeBuilderImage from "./img/ResumeBuilderImage.png";

const ProjectCard = ({ project, expanded, onClick, onClose }) => {
  return (
    <div
      className={`w-full p-4 transform transition-transform duration-300 ${
        expanded
          ? "fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          : ""
      }`}
      onClick={!expanded ? onClick : null}
    >
      <div
        className={`max-w-full rounded-lg overflow-hidden shadow-lg border border-gray-600 relative transition-all duration-300 bg-gray-900 ${
          expanded
            ? "w-full h-full flex flex-col"
            : "hover:scale-105 hover:shadow-2xl"
        }`}
      >
        {project.image && (
          <div
            className={`w-full ${expanded ? "h-1/2" : ""} cursor-pointer`}
            onClick={!expanded ? onClick : null}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full ${
                expanded ? "h-full object-cover" : "h-auto"
              } rounded-t-lg border-b border-gray-600`}
            />
          </div>
        )}
        <div
          className={`bg-gray-900 p-4 flex-1 overflow-y-auto ${
            project.comingSoon
              ? "rounded-lg"
              : expanded
              ? "rounded-none"
              : "rounded-b-lg"
          }`}
        >
          {expanded && (
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-full"
              onClick={onClose}
            >
              Close
            </button>
          )}
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl text-white">{project.title}</div>
            <div className="flex items-center space-x-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <SlRocket size={20} />
                </a>
              )}
            </div>
          </div>
          <div className="text-sm text-white mb-4 space-y-2">
            {project.description &&
              project.description
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
            {expanded && (
              <>
                {project.bullets && (
                  <ul className="list-disc list-inside space-y-1">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="ml-4">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {project.keyFeatures && (
                  <div className="space-y-1">
                    <div className="font-bold">Key Features:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="ml-4">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.usefulFor && (
                  <div className="space-y-1">
                    <div className="font-bold">Useful For:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.usefulFor.map((use, index) => (
                        <li key={index} className="ml-4">
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
          {project.comingSoon && (
            <div className="text-gray-400 italic text-sm text-center">
              More projects coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Algorithm Visualizer",
      description: `The Algorithm Visualizer is an interactive tool designed to help users understand the inner workings of various data structures and algorithms. It provides visual representations for the following structures and algorithms:`,
      bullets: [
        "Arrays: Explore how arrays store and access elements.",
        "Linked Lists: Visualize the traversal and manipulation of linked list nodes.",
        "Queues: Understand the FIFO (First-In-First-Out) principle with queue operations.",
        "Trees: Learn about tree structures, including binary trees and traversal methods.",
      ],
      keyFeatures: [
        "Interactive visualizations for better understanding.",
        "Step-by-step breakdown of algorithms.",
        "User-friendly interface with clear explanations.",
      ],
      usefulFor: [
        "Students: Enhance learning with visual aids.",
        "Educators: Demonstrate concepts in a more engaging way.",
        "Professionals: Review and refresh algorithmic knowledge.",
      ],
      image: AlgoVisulizaer,
      liveLink: "https://visual-algorithm-simulator.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/visual-algorithm-simulator",
    },
    {
      title: "Recipe Hub",
      description: `Recipe Hub is a comprehensive platform that allows users to discover, save, and share their favorite recipes. Utilizing the MealDB API, users can search for recipes by various criteria and manage their collection effortlessly, with DARK and LIGHT mode.`,
      bullets: [
        "Discover recipes: Search for recipes using the MealDB API.",
        "Add to favorites: Save your favorite recipes for easy access.",
        "Share recipes: Share your favorite recipes with friends via WhatsApp.",
        "Remove from favorites: Easily manage your collection by removing recipes.",
        "Local storage: Cached recipe data for faster access and offline usage.",
      ],
      keyFeatures: [
        "Extensive recipe search capabilities.",
        "User-friendly interface for managing favorites.",
        "Seamless sharing options through WhatsApp.",
        "Optimized for speed with local storage caching.",
      ],
      usefulFor: [
        "Home cooks: Discover new recipes and manage your favorites.",
        "Food enthusiasts: Share your culinary finds with friends.",
        "Busy professionals: Quickly access saved recipes, even offline.",
      ],
      image: RecipeHub,
      liveLink: "https://recipehub-lemon.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/recipehub",
    },
    {
      title: "Stylish Web Layout",
      description: `Stylish Web Layout is a modern web template designed to showcase various UI elements and layout structures. It utilizes a blend of CSS techniques to create visually appealing sections, integrated with FontAwesome icons for enhanced user experience.`,
      bullets: [
        "Navigation Bar: A clean and user-friendly navigation bar at the top.",
        "Content Sections: Organized sections to display content efficiently.",
        "FontAwesome Integration: Adds visually appealing icons throughout the site.",
        "Gradient Backgrounds: Uses CSS gradients for dynamic background effects.",
      ],
      keyFeatures: [
        "Modern UI elements: Incorporates various UI components for a comprehensive layout.",
        "FontAwesome Icons: Enhances visual appeal and functionality with icons.",
        "Flexbox and Grid Layouts: Utilizes CSS Flexbox and Grid.",
      ],
      usefulFor: [
        "Web Developers: Learn and implement advanced CSS techniques.",
        "Design Enthusiasts: Explore modern design trends.",
        "Businesses: Use the template for creating visually appealing websites.",
      ],
      image: BusinessWeb,
      liveLink: "https://business-webisite-html-css.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/Bussiness-website",
    },
    {
      title: "Skillsynergy",
      description: `The Dynamic Resume Builder is an intuitive web application designed to streamline the process of creating professional resumes, and the application generates a polished resume ready for download. The tool emphasizes user-friendliness and customization, allowing individuals to tailor their resumes to specific job roles and industries.`,
      bullets: [
        "User-Friendly Interface: Simple and clean UI for ease of use.",
        "Customizable Sections: Users can add, edit, and rearrange sections.",
        "Template Options: Offers multiple resume templates to choose from.",
        "Real-time Preview: Users can see changes as they make them.",
      ],
      keyFeatures: [
        "Data Persistence: Saves user data to local storage for later use.",
        "Responsive Design: Ensures compatibility across various devices.",
        "Export Options: Allows users to download their resumes in PDF format.",
      ],
      usefulFor: [
        "Job Seekers: Create professional resumes effortlessly.",
        "Career Coaches: Assist clients in building effective resumes.",
        "HR Professionals: Generate templates and guidelines for applicants.",
      ],
      image: ResumeBuilderImage,
      liveLink: "https://skillsynergy-lime.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/skillsynergy",
    },
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              expanded={expandedIndex === index}
              onClick={() => handleCardClick(index)}
              onClose={handleClose}
            />
          ))}
          <div className="text-center text-gray-400 italic text-xl mt-4 shadow-sm col-span-full">
            <span>More projects coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
