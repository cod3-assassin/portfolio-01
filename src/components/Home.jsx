import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="w-full md:max-w-4xl h-full md:h-auto mx-auto px-4 py-8 text-center">
        {/* Updated height styling */}
        <h1 className="text-4xl font-bold mb-4 relative">
          Hi, I am <TypedTexts texts={["Wasim Shah", "React Developer"]} />
        </h1>
        <p className="text-sm mb-8">
          As an aspiring React.js developer, I am passionate about creating
          captivating and seamless user interfaces that elevate the digital
          experience. With a keen eye for detail and a commitment to excellence,
          I strive to deliver elegant solutions that enhance user engagement and
          satisfaction. Embracing innovation and continuous learning, I am
          excited to embark on my journey in crafting immersive web experiences
          with React.js
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <SocialIcon
            icon={<FaGithub />}
            href="https://github.com/cod3-assassin"
          />

          <SocialIcon
            icon={<FaXTwitter />}
            href="https://twitter.com/cod3_assassin"
          />
          <SocialIcon
            icon={<FaInstagram />}
            href="https://www.instagram.com/cod3_assassin/"
          />
        </div>
        <div className="text-gray-500 text-xs mt-2">
          <svg
            className="w-6 h-6 text-gray-400 animate-bounce inline-block mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          Scroll Down
        </div>
      </div>
    </div>
  );
};

// Component for typing animation
const TypedTexts = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const text = texts[currentTextIndex];
  const textColor = currentTextIndex === 0 ? "text-green-500" : "text-blue-500";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isTyping]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
        setDisplayedText(""); // Clear the displayed text
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, texts.length]);

  useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        if (displayedText !== text) {
          setDisplayedText((prev) => text.slice(0, prev.length + 1));
        }
      }, 150);
    } else {
      interval = setInterval(() => {
        if (displayedText !== "") {
          setDisplayedText((prev) => prev.slice(0, prev.length - 1) || "");
        }
      }, 100); // Faster clearing animation
    }

    return () => clearInterval(interval);
  }, [isTyping, displayedText, text]);

  return (
    <span className={`inline-block ${textColor}`}>
      {displayedText}
      {isTyping && <span className="animate-blink">|</span>}
    </span>
  );
};

// Component for social icon with hover effect
const SocialIcon = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block p-2 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300 mb-4 mx-2"
    >
      <span className="flex items-center justify-center w-7 h-7">{icon}</span>
    </a>
  );
};

export default Home;
