import React from "react";
import ProjectCard from "./ProjectCard";
import AlgoVisualizer from "../img/AlgoVisualizer.png";
import RecipeHub from "../img/RecipeHub.png";
import BusinessWeb from "../img/bussinesswebsite.png";
import ResumeBuilderImage from "../img/ResumeBuilderImage.png";
import FiftyProjectsImg from "../img/50-projects.png";
import { useTheme } from "../../ThemeContext";
import FloatingSVGs from "../SVGPatterns"; // Assuming you have this SVG component

const Projects = () => {
  const { isDarkMode } = useTheme(); // Accessing the theme context

  const projects = [
    {
      title: "React 50 Projects",
      description:
        "The React 50 Projects repository is designed for comprehensive learning of React.js, Tailwind CSS, and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
      image: FiftyProjectsImg,
      liveLink: "https://react-50-projects.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/react-50-projects",
      howToUse:
        "Visit the project website at https://react-50-projects.vercel.app. Browse through the list of projects to see a variety of React implementations. Click on any project to view its live demo. Use the navigation menu to explore different categories and topics. Review the source code to understand the implementation details and learn from the examples.",
      pros: [
        "Comprehensive coverage of React concepts",
        "Hands-on learning experience",
        "Well-structured projects",
      ],
      cons: [
        "Some projects may require prior React knowledge",
        "No backend integration",
      ],
    },
    {
      title: "Algorithm Visualizer",
      description:
        "The Algorithm Visualizer is an interactive tool designed to help users understand various data structures and algorithms.",
      technologies: ["React.js", "D3.js", "Visualization"],
      image: AlgoVisualizer,
      liveLink: "https://visual-algorithm-simulator.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/visual-algorithm-simulator",
      howToUse:
        "Visit the Algorithm Visualizer at https://visual-algorithm-simulator.vercel.app. Select the type of data structure you want to visualize (e.g., arrays, linked lists, queues, trees). Follow the on-screen instructions to input data or manipulate the structure. Watch the visual representation of algorithms in action. Use the control buttons to step through the algorithm and see how it processes the data. Adjust settings like speed and visualization mode to enhance your learning experience.",
      pros: [
        "Interactive and educational",
        "Supports multiple algorithms",
        "Intuitive UI",
      ],
      cons: [
        "Limited to visualizations",
        "Does not include advanced algorithms",
      ],
    },
    {
      title: "Recipe Hub",
      description:
        "Recipe Hub is a platform that allows users to discover, save, and share their favorite recipes.",
      technologies: ["React.js", "MealDB API", "Local Storage"],
      image: RecipeHub,
      liveLink: "https://recipehub-lemon.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/recipehub",
      howToUse:
        "Visit the Recipe Hub at https://recipehub-lemon.vercel.app. Use the search bar to find recipes by ingredients or dish name. Explore categories to discover various types of recipes. Click on any recipe to view detailed instructions and ingredients. Save your favorite recipes by creating an account and logging in. Toggle between DARK and LIGHT mode using the switch at the top right corner.",
      pros: [
        "User-friendly interface",
        "Extensive recipe database",
        "Save feature",
      ],
      cons: ["Requires internet connection", "Dependent on external API"],
    },
    {
      title: "Stylish Web Layout",
      description:
        "Stylish Web Layout is a modern web template designed to showcase various UI elements and layout structures.",
      technologies: ["HTML", "CSS", "FontAwesome"],
      image: BusinessWeb,
      liveLink: "https://business-webisite-html-css.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/Bussiness-website",
      howToUse:
        "Clone the repository and open the index.html file in a web browser to view the layout.",
      pros: ["Modern design", "Responsive layout", "Easy to customize"],
      cons: ["Static content", "No backend functionality"],
    },
    {
      title: "Skillsynergy",
      description:
        "Skillsynergy is an intuitive web application designed to streamline the process of creating professional resumes.",
      technologies: ["React.js", "CSS", "PDF Export"],
      image: ResumeBuilderImage,
      liveLink: "https://skillsynergy-lime.vercel.app/",
      githubLink: "https://github.com/cod3-assassin/skillsynergy",
      howToUse: "Fill out the form fields and export your resume as a PDF.",
      pros: [
        "Easy to use",
        "Professional templates",
        "PDF export functionality",
      ],
      cons: ["Limited customization options", "Requires manual data entry"],
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } overflow-hidden transition-colors duration-500 relative`}
      id="next-section"
    >
      <div className="absolute inset-0">
        <FloatingSVGs isDarkMode={isDarkMode} />
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className="text-xl md:text-3xl italic text-gray-600 text-center mt-8">
          More Projects are Coming Soon....
        </p>
      </div>
    </div>
  );
};

export default Projects;
