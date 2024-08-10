import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const socialIcons = [
    {
      icon: <FaGithub />,
      href: "https://github.com/cod3-assassin",
      color: isDarkMode ? "#e1e1e1" : "#181717",
      shadow: isDarkMode
        ? "0 4px 12px rgba(255, 255, 255, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
    {
      icon: <FaXTwitter />,
      href: "https://twitter.com/cod3_assassin",
      color: "#1DA1F2",
      shadow: isDarkMode
        ? "0 4px 12px rgba(255, 255, 255, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/cod3_assassin/",
      color: "#E4405F",
      shadow: isDarkMode
        ? "0 4px 12px rgba(255, 255, 255, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/wasim-shah-3198b52b8/",
      color: "#0A66C2",
      shadow: isDarkMode
        ? "0 4px 12px rgba(255, 255, 255, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
  ];

  const SocialIcon = ({ icon, href, color, shadow }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block p-3 transition-transform transform hover:scale-110 rounded-md"
        style={{ color: color, boxShadow: shadow }}
      >
        <span className="flex items-center justify-center text-xl">{icon}</span>
        <div className="absolute inset-0 h-12 w-12 rounded-xl bg-gradient-to-br from-opacity-1 to-opacity-10 opacity-30 blur-md" />
      </a>
    );
  };

  return (
    <footer
      className={`relative py-4 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row justify-between relative">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm mb-2">
            Made with <FaHeart className="text-red-500 inline" /> by
            cod3_assassin
          </p>
          <p className="text-sm mb-2">© 2024 All rights reserved</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialIcons.map((socialIcon, index) => (
            <SocialIcon key={index} {...socialIcon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
