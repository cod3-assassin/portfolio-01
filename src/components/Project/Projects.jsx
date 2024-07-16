import React from "react";
import ProjectCard from "./ProjectCard";
import AlgoVisulizaer from "../img/AlgoVisualizer.png";
import RecipeHub from "../img/RecipeHub.png";
import BusinessWeb from "../img/bussinesswebsite.png";
import ResumeBuilderImage from "../img/ResumeBuilderImage.png";
import FiftyProjectsImg from "../img/50-projects.png";

const Projects = () => {
  const projects = [
    {
      title: "React 50 Projects",
      description:
        "The React 50 Projects repository is designed for comprehensive learning of React.js, Tailwind CSS, and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
      image: FiftyProjectsImg,
      liveLink: "https://react-50-projects.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/react-50-projects",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "The Algorithm Visualizer is an interactive tool designed to help users understand various data structures and algorithms.",
      technologies: ["React.js", "D3.js", "Visualization"],
      image: AlgoVisulizaer,
      liveLink: "https://visual-algorithm-simulator.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/visual-algorithm-simulator",
    },
    {
      title: "Recipe Hub",
      description:
        "Recipe Hub is a platform that allows users to discover, save, and share their favorite recipes.",
      technologies: ["React.js", "MealDB API", "Local Storage"],
      image: RecipeHub,
      liveLink: "https://recipehub-lemon.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/recipehub",
    },
    {
      title: "Stylish Web Layout",
      description:
        "Stylish Web Layout is a modern web template designed to showcase various UI elements and layout structures.",
      technologies: ["HTML", "CSS", "FontAwesome"],
      image: BusinessWeb,
      liveLink: "https://business-webisite-html-css.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/Bussiness-website",
    },
    {
      title: "Skillsynergy",
      description:
        "Skillsynergy is an intuitive web application designed to streamline the process of creating professional resumes.",
      technologies: ["React.js", "CSS", "PDF Export"],
      image: ResumeBuilderImage,
      liveLink: "https://skillsynergy-lime.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/skillsynergy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
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
