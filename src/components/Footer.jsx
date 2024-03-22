import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaGithub />, href: "https://github.com/cod3-assassin" },

    { icon: <FaXTwitter />, href: "https://twitter.com/cod3_assassin" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/cod3_assassin/" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <p className="text-sm mb-2 md:mb-0">© 2024 All rights reserved</p>
        <p className="text-sm mb-2 md:mb-0">
          Made with <FaHeart className="text-red-500 inline" /> by cod3_assassin
        </p>
        <div className="flex space-x-4">
          {socialIcons.map((socialIcon, index) => (
            <SocialIcon key={index} {...socialIcon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white rounded-lg overflow-hidden transition duration-300 hover:bg-gray-700 flex items-center justify-center w-8 h-8"
    >
      {icon}
    </a>
  );
};

export default Footer;
