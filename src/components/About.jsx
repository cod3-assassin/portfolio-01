import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ResumePDF from "../pdf/Complete.pdf";
import { useTheme } from "../ThemeContext";
import FloatingSVGs from "./SVGPatterns";
import { TbFaceId } from "react-icons/tb";

const About = () => {
  const { isDarkMode } = useTheme();

  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps?q=Godavari+wasahat+Sakuri+Tal+Rahata+423109"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917066626439";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:lawlitel915@gmail.com";
  };

  const handleDownloadResume = () => {
    const a = document.createElement("a");
    a.href = ResumePDF;
    a.download = "WasimShahResume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      } overflow-hidden transition-colors duration-500`}
    >
      {/* SVG background container */}
      <div className="absolute inset-0">
        <FloatingSVGs isDarkMode={isDarkMode} />
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <TbFaceId className="mr-4 text-5xl" />
          About Me
        </h2>
        <div
          className={`${
            isDarkMode
              ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
              : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900"
          } p-8 rounded-lg shadow-2xl transition duration-300 relative`}
        >
          <div className="absolute inset-0">
            <FloatingSVGs isDarkMode={isDarkMode} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="font-bold text-xl">Name:</span>
                <span className="ml-4 text-lg">Wasim Shah</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl">Date of Birth:</span>
                <span className="ml-4 text-lg">20 June 1999</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl">Nationality:</span>
                <span className="ml-4 text-lg">Indian</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl">Languages:</span>
                <span className="ml-4 text-lg">English, Hindi, Marathi</span>
              </div>
            </div>
            <div className="space-y-6">
              <div
                className="cursor-pointer flex items-center"
                onClick={handleAddressClick}
              >
                <FaMapMarkerAlt className="mr-4 text-blue-500 text-2xl z-10" />
                <span className="text-lg">
                  Godavari wasahat, Sakuri, Tal: Rahata 423109
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center"
                onClick={handleEmailClick}
              >
                <FaEnvelope className="mr-4 text-red-500 text-2xl z-10" />
                <span className="text-lg">lawlitel915@gmail.com</span>
              </div>
              <div
                className="cursor-pointer flex items-center"
                onClick={handlePhoneClick}
              >
                <FaPhone className="mr-4 text-green-500 text-2xl z-10" />
                <span className="text-lg">+917066626439</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              className={`py-3 px-6 rounded-lg font-semibold focus:outline-none transition-colors duration-300 z-10 ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              }`}
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
