import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import FloatingSVGs from "./SVGPatterns";
import { useTheme } from "../ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } overflow-hidden transition-colors duration-500`}
    >
      <div className="absolute inset-0">
        <FloatingSVGs isDarkMode={isDarkMode} />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hello, I am{" "}
          <span
            className={`${
              isDarkMode ? "text-sky-400" : "text-sky-700"
            } transition-colors duration-500`}
          >
            Wasim Shah
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          <TypedTexts
            texts={[
              "Your Next Visionary Developer",
              "Crafting Futures Through Code",
            ]}
            isDarkMode={isDarkMode}
          />
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 px-4 py-2 font-serif">
          Crafting engaging user interfaces with a passion for innovation and
          seamless experiences. My approach combines modern design with
          intuitive functionality to deliver exceptional user experiences.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <SocialIcon
            icon={<FaGithub />}
            href="https://github.com/cod3-assassin"
            color={isDarkMode ? "#e1e1e1" : "#181717"}
            shadow={
              isDarkMode
                ? "0 4px 12px rgba(255, 255, 255, 0.3)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)"
            }
          />
          <SocialIcon
            icon={<FaXTwitter />}
            href="https://twitter.com/cod3_assassin"
            color="#1DA1F2"
            shadow={
              isDarkMode
                ? "0 4px 12px rgba(255, 255, 255, 0.3)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)"
            }
          />
          <SocialIcon
            icon={<FaInstagram />}
            href="https://www.instagram.com/cod3_assassin/"
            color="#E4405F"
            shadow={
              isDarkMode
                ? "0 4px 12px rgba(255, 255, 255, 0.3)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)"
            }
          />
          <SocialIcon
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/wasim-shah-3198b52b8/"
            color="#0A66C2"
            shadow={
              isDarkMode
                ? "0 4px 12px rgba(255, 255, 255, 0.3)"
                : "0 4px 12px rgba(0, 0, 0, 0.3)"
            }
          />
        </div>
        <ScrollLink to="next-section" smooth={true} duration={500}>
          <div className="text-gray-400 text-sm mt-4 cursor-pointer flex items-center justify-center">
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={isDarkMode ? "#f5f5f5" : "#333"}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span className="ml-2">
              {isDarkMode ? "Scroll Down" : "Scroll Down"}
            </span>
          </div>
        </ScrollLink>
      </div>
    </div>
  );
};

const TypedTexts = ({ texts, isDarkMode }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);
  const text = texts[currentTextIndex];
  const textColor =
    currentTextIndex === 0
      ? isDarkMode
        ? "text-teal-300"
        : "text-teal-500"
      : isDarkMode
      ? "text-blue-300"
      : "text-blue-500";

  React.useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, text.length * 100 + 3000); // Adjusted based on text length

    return () => clearTimeout(typingTimeout);
  }, [isTyping, text]);

  React.useEffect(() => {
    if (!isTyping) {
      const switchTextTimeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
        setDisplayedText("");
      }, 2500); // Delay before switching text

      return () => clearTimeout(switchTextTimeout);
    }
  }, [isTyping, texts.length]);

  React.useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        if (displayedText.length < text.length) {
          setDisplayedText((prev) => text.slice(0, prev.length + 1));
        }
      }, 100); // Speed of typing
    } else {
      interval = setInterval(() => {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        }
      }, 50); // Speed of deleting
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

export default Home;
