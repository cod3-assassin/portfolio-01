import React from "react";
import { FaGithub } from "react-icons/fa";
import AlgoVisulizaer from "./img/AlgoVisualizer.png";
import RecipeHub from "./img/RecipeHub.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full p-4">
      <div
        className={`max-w-full rounded-lg overflow-hidden shadow-lg border border-gray-600 relative transform transition-transform duration-300 ${
          project.comingSoon
            ? "hover:shadow-lg"
            : "hover:scale-105 hover:shadow-2xl"
        }`}
      >
        {project.image && (
          <div className="w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-t-lg border-b border-gray-600 object-contain"
            />
          </div>
        )}
        <div
          className={`bg-gray-900 p-4 ${
            project.comingSoon ? "rounded-lg" : "rounded-b-lg"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl text-white">{project.title}</div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>
          <div className="text-sm text-white mb-4 space-y-2">
            {project.description &&
              project.description
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)}
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
          </div>
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="text-blue-400 underline text-sm block mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live project
            </a>
          )}
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
      description: `Recipe Hub is a comprehensive platform that allows users to discover, save, and share their favorite recipes. Utilizing the MealDB API, users can search for recipes by various criteria and manage their collection effortlessly ,with DARK and LIGHT mode.`,
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
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex flex-col items-center w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {/* More projects coming soon */}
          <div className="text-center text-gray-400 italic text-xl mt-4 shadow-sm">
            <span>More projects coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
